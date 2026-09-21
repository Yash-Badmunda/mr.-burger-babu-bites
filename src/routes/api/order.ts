import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MENU } from "@/lib/menu";

const orderSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^(?:\+?91[ -]?)?[6-9]\d{9}$/),
  note: z.string().trim().max(500).default(""),
  items: z.array(z.object({ id: z.string().max(80), quantity: z.number().int().min(1).max(20) })).min(1).max(52),
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character] ?? character);

export const Route = createFileRoute("/api/order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = orderSchema.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ error: "Please check your name, phone number and cart." }, { status: 400 });
        }

        const trustedMenu = new Map(MENU.map((item) => [item.id, item]));
        const lines = [];
        for (const requested of parsed.data.items) {
          const item = trustedMenu.get(requested.id);
          if (!item) return Response.json({ error: "Your cart contains an unavailable item." }, { status: 400 });
          lines.push({ ...item, quantity: requested.quantity, lineTotal: item.price * requested.quantity });
        }
        const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);
        const orderedAt = new Intl.DateTimeFormat("en-IN", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: "Asia/Kolkata",
        }).format(new Date());

        const lovableKey = process.env['LOVABLE_API_KEY'];
        const resendKey = process.env['RESEND_API_KEY'];
        if (!lovableKey || !resendKey) {
          console.error("Resend connection credentials are not configured");
          return Response.json({ error: "Email ordering is temporarily unavailable. Please order on WhatsApp." }, { status: 503 });
        }

        const itemText = lines.map((line) => `${line.name} × ${line.quantity} — ₹${line.lineTotal}`).join("\n");
        const payload = {
          to: ["sunnysodhi060@gmail.com"],
          subject: "New Order - Mr. Burger Babu",
          text: `NEW ORDER\n\nCustomer: ${parsed.data.name}\nPhone: ${parsed.data.phone}\n\nItems:\n${itemText}\n\nTOTAL: ₹${total}\n\nNote: ${parsed.data.note || "No additional note"}\n\nOrder date/time: ${orderedAt}`,
          html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#173f2b"><h1>NEW ORDER</h1><p><strong>Customer:</strong> ${escapeHtml(parsed.data.name)}<br/><strong>Phone:</strong> ${escapeHtml(parsed.data.phone)}</p><h2>Items</h2><ul>${lines.map((line) => `<li>${escapeHtml(line.name)} × ${line.quantity} — ₹${line.lineTotal}</li>`).join("")}</ul><h2>TOTAL: ₹${total}</h2><p><strong>Note:</strong> ${escapeHtml(parsed.data.note || "No additional note")}</p><p><strong>Order date/time:</strong> ${escapeHtml(orderedAt)}</p></div>`,
        };

        const sendWith = (from: string) =>
          fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ from, ...payload }),
          });

        const primaryFrom = process.env['RESEND_FROM_EMAIL'] || "Mr. Burger Babu <orders@mrburgerbabu.in>";
        let response = await sendWith(primaryFrom);

        if (response.status === 403) {
          const details = await response.text();
          console.error(`Resend order email failed [403] with ${primaryFrom}: ${details}`);
          // Domain not verified yet — fall back to Resend's shared sender so orders still arrive.
          response = await sendWith("Mr. Burger Babu <onboarding@resend.dev>");
        }

        if (!response.ok) {
          const details = await response.text();
          console.error(`Resend order email failed [${response.status}]: ${details}`);
          return Response.json({ error: "We couldn't email this order. Please send it on WhatsApp instead." }, { status: 502 });
        }


        return Response.json({ ok: true, total });
      },
    },
  },
});