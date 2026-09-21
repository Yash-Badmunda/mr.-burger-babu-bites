import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { ChefHat, Coffee, Flame, Instagram, MapPin, Minus, PartyPopper, Plus, Send, ShoppingBag, Soup, Sparkles, Trash2, UtensilsCrossed, Wheat, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MENU, MENU_CATEGORIES, formatPrice, type MenuItem } from "@/lib/menu";
import logoAsset from "@/assets/mbblogo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr. Burger Babu | Street Food in Bhuna" },
      { name: "description", content: "Order burgers, wraps, shakes, fries and more from Mr. Burger Babu in Bhuna, Fatehabad. Open every day, 5 PM–11 PM." },
      { property: "og:title", content: "Mr. Burger Babu | Taste and Experience our Food" },
      { property: "og:description", content: "Fresh, fun street-food favourites in Bhuna. Build your order online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Cart = Record<string, number>;
const SPECIALS = [
  { name: "Chai", icon: Coffee, note: "CHAI TIME" },
  { name: "Churi", icon: Soup, note: "FULL ON SWAD" },
  { name: "Bun Maska", icon: Wheat, note: "MADE TO CRAVE" },
  { name: "Momos", icon: ChefHat, note: "HOT & FRESH" },
  { name: "Pav Bhaji", icon: Soup, note: "STREET FAVOURITE" },
  { name: "Patiz", icon: UtensilsCrossed, note: "CRISPY BITE" },
];

function Index() {
  const [cart, setCart] = useState<Cart>({});
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(0);
  const [toast, setToast] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const cartLines = useMemo(() => MENU.filter((item) => cart[item.id]).map((item) => ({ ...item, quantity: cart[item.id] ?? 0 })), [cart]);
  const count = cartLines.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartLines.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const filteredMenu = category === "All" ? MENU : MENU.filter((item) => item.category === category);

  const changeQuantity = (item: MenuItem, change: number) => {
    setCart((current) => {
      const next = Math.max(0, (current[item.id] ?? 0) + change);
      const updated = { ...current };
      if (next === 0) delete updated[item.id];
      else updated[item.id] = next;
      return updated;
    });
    if (change > 0) {
      setToast(`${item.name} added — yum!`);
      setCartPulse((value) => value + 1);
      window.setTimeout(() => setToast(""), 1500);
    }
  };

  const whatsappHref = useMemo(() => {
    const lines = cartLines.map((item) => `${item.name} × ${item.quantity}`).join("\n");
    return `https://wa.me/917494921302?text=${encodeURIComponent(`Hi Mr. Burger Babu,\n\nI would like to order:\n\n${lines || "Please share today's availability."}\n\nTotal: ₹${total}`)}`;
  }, [cartLines, total]);

  const submitOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!cartLines.length) {
      setStatus("error"); setMessage("Add at least one tasty item first."); return;
    }
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const note = String(form.get("note") ?? "").trim();
    if (name.length < 2 || !/^(?:\+?91[ -]?)?[6-9]\d{9}$/.test(phone)) {
      setStatus("error"); setMessage("Please enter your name and a valid 10-digit mobile number."); return;
    }
    setStatus("sending"); setMessage("");
    try {
      const response = await fetch("/api/order", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, note, items: cartLines.map((item) => ({ id: item.id, quantity: item.quantity })) }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Order could not be sent.");
      setStatus("success"); setMessage("Get ready for something tasty!"); setCart({});
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Order could not be sent.");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b-2 border-primary/20 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2" aria-label="Mr. Burger Babu home">
            <img src={logoAsset.url} alt="Mr. Burger Babu" className="size-13 rounded-full border-2 border-primary object-cover" />
            <span className="font-display hidden text-lg text-primary sm:block">Mr. Burger Babu</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-extrabold uppercase md:flex" aria-label="Main navigation">
            <a href="#home" className="hover:text-tomato">Home</a><a href="#specials" className="hover:text-tomato">Specials</a><a href="#menu" className="hover:text-tomato">Menu</a><a href="#order" className="hover:text-tomato">Order</a>
          </nav>
          <Button key={cartPulse} variant="cheese" className={cartPulse ? "cart-pop" : ""} onClick={() => { setCartOpen(true); document.querySelector("#cart")?.scrollIntoView({ behavior: "smooth" }); }}>
            <ShoppingBag /> Cart ({count})
          </Button>
        </div>
      </header>

      <section id="home" className="paper-grid relative overflow-hidden border-b-2 border-primary/20">
        <div className="mx-auto grid min-h-[76vh] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_.85fr] md:py-20">
          <div className="relative z-10">
            <span className="sticker inline-block rounded-md bg-cheese px-3 py-1 text-sm font-black text-cheese-foreground">HOT & FRESH 🔥</span>
            <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] text-primary sm:text-7xl lg:text-8xl">MR. BURGER BABU</h1>
            <p className="mt-5 text-2xl font-black text-tomato">Taste and Experience our Food.</p>
            <p className="mt-3 max-w-lg text-lg font-semibold text-muted-foreground">Good food. Better mood. Made fresh for your evening cravings.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero"><a href="#order">Order now <ShoppingBag /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#menu">View menu</a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <span className="floaty sticker absolute -left-5 top-5 rounded-md bg-cheese px-3 py-2 text-xs font-black text-cheese-foreground" aria-hidden="true">FRIES</span>
            <span className="floaty sticker absolute -right-3 bottom-14 rounded-md bg-paper px-3 py-2 text-xs font-black text-tomato [animation-delay:-2s]" aria-hidden="true">SO CHEESY</span>
            <img src={logoAsset.url} alt="Mr. Burger Babu circular burger logo" className="relative z-10 aspect-square w-full rounded-full border-8 border-paper object-cover shadow-2xl" />
            <span className="sticker absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-tomato px-4 py-2 font-black text-primary-foreground">CAN'T STOP AT ONE 👀</span>
          </div>
        </div>
      </section>

      <section id="specials" className="bg-primary py-16 text-primary-foreground">
        <SectionHeading kicker="Local favourites" title="Special delights" light />
        <div className="mx-auto mt-9 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
          {SPECIALS.map((special, index) => <article key={special.name} className="group relative min-h-44 overflow-hidden rounded-md border-2 border-primary-foreground/30 bg-primary-foreground/10 p-4 text-center transition hover:-translate-y-1 hover:rotate-1">
            <special.icon className="mx-auto size-11 transition group-hover:scale-110" /><h3 className="mt-3 text-lg font-black">{special.name}</h3><span className="mt-3 inline-block rotate-[-2deg] rounded-sm bg-cheese px-2 py-1 text-[10px] font-black text-cheese-foreground">{special.note}</span>
            {index === 0 && <Sparkles className="absolute right-2 top-2 size-4" />}
          </article>)}
        </div>
        <p className="mx-auto mt-5 max-w-7xl px-4 text-sm font-semibold text-primary-foreground/80 sm:px-6">Ask us for today’s price and availability.</p>
      </section>

      <section id="menu" className="paper-grid py-16">
        <SectionHeading kicker="Pick your craving" title="The digital menu" sub="Every priced item from our cart menu—ready to mix, match and order." />
        <div className="mx-auto mt-7 flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6" aria-label="Menu categories">
          {["All", ...MENU_CATEGORIES].map((item) => <Button key={item} size="sm" variant={category === item ? "default" : "outline"} onClick={() => setCategory(item)}>{item}</Button>)}
        </div>
        <div className="mx-auto mt-5 grid max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMenu.map((item) => <MenuCard key={item.id} item={item} quantity={cart[item.id] ?? 0} changeQuantity={changeQuantity} />)}
        </div>
      </section>

      <section id="cart" className="border-y-2 border-primary/15 bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_.85fr]">
          <div>
            <div className="flex items-end justify-between gap-4"><SectionHeading kicker="Hungry yet?" title="Your cart" align="left" /><span className="sticker hidden rounded-md bg-paper px-3 py-1 text-xs font-black text-tomato sm:block">YUM!</span></div>
            {!cartLines.length ? <div className="mt-7 rounded-md border-2 border-dashed border-primary/30 bg-background p-10 text-center"><ChefHat className="mx-auto size-12 text-primary" /><p className="mt-3 font-black">Your cart is waiting for something delicious.</p><Button asChild className="mt-5" variant="outline"><a href="#menu">Explore menu</a></Button></div> : <div className="mt-7 space-y-2">
              {cartLines.map((item) => <CartLine key={item.id} item={item} changeQuantity={changeQuantity} />)}
              <div className="mt-5 flex items-center justify-between border-t-2 border-primary pt-5"><Button variant="ghost" onClick={() => setCart({})}><Trash2 /> Clear cart</Button><div className="text-right"><span className="text-xs font-black uppercase text-muted-foreground">Total price</span><div className="font-display text-3xl text-primary">{formatPrice(total)}</div></div></div>
            </div>}
          </div>

          <form id="order" onSubmit={submitOrder} className="rounded-md border-2 border-primary bg-paper p-5 shadow-[7px_7px_0_var(--primary)] sm:p-7">
            <span className="text-xs font-black uppercase text-tomato">One bite. Instant happiness.</span><h2 className="font-display mt-2 text-3xl text-primary">Place your order</h2>
            <label className="mt-6 block text-sm font-extrabold">Customer name<input name="name" maxLength={80} required className="mt-1 h-11 w-full rounded-md border-2 border-input bg-background px-3 outline-none focus:border-primary" placeholder="Your name" /></label>
            <label className="mt-4 block text-sm font-extrabold">Phone / WhatsApp number<input name="phone" inputMode="tel" maxLength={14} required className="mt-1 h-11 w-full rounded-md border-2 border-input bg-background px-3 outline-none focus:border-primary" placeholder="10-digit mobile number" /></label>
            <label className="mt-4 block text-sm font-extrabold">Additional note<textarea name="note" maxLength={500} rows={3} className="mt-1 w-full resize-none rounded-md border-2 border-input bg-background p-3 outline-none focus:border-primary" placeholder="Less spicy, no onion…" /></label>
            <div className="my-5 border-y border-border py-4"><h3 className="text-xs font-black uppercase text-muted-foreground">Order summary</h3>{cartLines.length ? cartLines.map((item) => <div key={item.id} className="mt-2 flex justify-between text-sm"><span>{item.name} × {item.quantity}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>) : <p className="mt-2 text-sm text-muted-foreground">Your selected items will appear here.</p>}<div className="mt-3 flex justify-between border-t border-border pt-3 text-lg font-black"><span>Total</span><span>{formatPrice(total)}</span></div></div>
            <Button type="submit" size="lg" variant="hero" className="w-full" disabled={status === "sending"}>{status === "sending" ? "Sending order…" : <>Place order <Send /></>}</Button>
            {message && <div role="status" className={`mt-4 rounded-md p-4 text-center font-bold ${status === "success" ? "bg-accent text-accent-foreground" : "bg-destructive/10 text-destructive"}`}>{status === "success" && <PartyPopper className="mx-auto mb-1 size-8" />}<strong>{status === "success" ? "Order Received!" : "Please check your order"}</strong><p className="text-sm">{message}</p></div>}
            <div className="my-4 flex items-center gap-3 text-xs font-black uppercase text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">or</div>
            <Button asChild size="lg" variant="outline" className="w-full"><a href={whatsappHref} target="_blank" rel="noreferrer">Order on WhatsApp</a></Button>
          </form>
        </div>
      </section>

      <section className="py-16"><div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2">
        <div className="border-l-4 border-tomato py-2 pl-5"><MapPin className="text-tomato" /><h2 className="font-display mt-4 text-3xl text-primary">Find the cart</h2><p className="mt-3 text-lg font-semibold">Hisar Road and Janata Dharamsala,<br />Bhuna, Fatehabad, Haryana</p><Button asChild className="mt-5" variant="outline"><a href="https://www.google.com/maps/search/?api=1&query=Hisar%20Road%20and%20Janata%20Dharamsala%2C%20Bhuna%2C%20Fatehabad%2C%20Haryana" target="_blank" rel="noreferrer">Get directions <MapPin /></a></Button></div>
        <div className="border-l-4 border-cheese py-2 pl-5"><span className="text-2xl">🕔</span><h2 className="font-display mt-4 text-3xl text-primary">Open every day</h2><p className="mt-3 text-3xl font-black text-tomato">5:00 PM – 11:00 PM</p><p className="mt-2 font-semibold text-muted-foreground">Come hungry. Leave happy.</p></div>
      </div></section>

      <section className="bg-tomato py-12 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left"><div><span className="text-sm font-black uppercase">Fresh drops & food mood</span><h2 className="font-display mt-1 text-3xl">Follow the cravings</h2></div><Button asChild size="lg" variant="cheese"><a href="https://www.instagram.com/mr_burger_babu?stkn=ZG9tdnc1czBlbG9n" target="_blank" rel="noreferrer"><Instagram /> Instagram</a></Button></div></section>
      <footer className="bg-primary pb-24 pt-10 text-primary-foreground md:pb-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center sm:px-6 md:flex-row md:text-left"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="size-14 rounded-full object-cover" /><div><strong className="font-display">Mr. Burger Babu</strong><p className="text-sm text-primary-foreground/70">By Sunny Sodhi</p></div></div><p className="text-sm">Taste and Experience our Food. © 2026</p></div></footer>

      {count > 0 && <div className="fixed inset-x-3 bottom-3 z-50 md:hidden"><Button size="lg" variant="cheese" className="h-14 w-full justify-between shadow-xl" onClick={() => { setCartOpen(true); document.querySelector("#cart")?.scrollIntoView({ behavior: "smooth" }); }}><span><ShoppingBag /> {count} {count === 1 ? "Item" : "Items"} • {formatPrice(total)}</span><span>View cart</span></Button></div>}
      {toast && <div className="added-toast fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 rounded-md bg-foreground px-4 py-2 text-sm font-black text-background shadow-xl">{toast}</div>}
      {cartOpen && <Button size="icon" variant="ghost" className="fixed right-3 top-21 z-50 bg-background shadow-md md:hidden" aria-label="Close cart shortcut" onClick={() => setCartOpen(false)}><X /></Button>}
    </main>
  );
}

function SectionHeading({ kicker, title, sub, light = false, align = "center" }: { kicker: string; title: string; sub?: string; light?: boolean; align?: "left" | "center" }) {
  return <div className={`mx-auto max-w-2xl px-4 sm:px-6 ${align === "center" ? "text-center" : "px-0 text-left"}`}><span className={`text-xs font-black uppercase ${light ? "text-cheese" : "text-tomato"}`}>{kicker}</span><h2 className={`font-display mt-2 text-3xl sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>{sub && <p className={`mt-3 font-semibold ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{sub}</p>}</div>;
}

function MenuCard({ item, quantity, changeQuantity }: { item: MenuItem; quantity: number; changeQuantity: (item: MenuItem, change: number) => void }) {
  return <article className="group flex min-h-42 flex-col justify-between rounded-md border-2 border-primary/15 bg-paper p-4 shadow-[3px_3px_0_color-mix(in_oklch,var(--primary)_18%,transparent)] transition hover:-translate-y-1 hover:rotate-[.3deg] hover:border-primary/50">
    <div className="flex items-start justify-between gap-3"><span className="grid size-10 place-items-center rounded-full bg-accent text-sm font-black text-accent-foreground transition group-hover:scale-110">{item.category.slice(0, 2).toUpperCase()}</span><span className="rounded-sm bg-secondary px-2 py-1 text-[10px] font-black uppercase text-secondary-foreground">{item.category}</span></div><div><h3 className="mt-3 font-extrabold leading-tight">{item.name}</h3><p className="mt-1 text-xl font-black text-tomato">{formatPrice(item.price)}</p></div>
    {quantity === 0 ? <Button className="mt-4 w-full" onClick={() => changeQuantity(item, 1)}><ShoppingBag /> Add to cart</Button> : <QuantityControl item={item} quantity={quantity} changeQuantity={changeQuantity} />}
  </article>;
}

function QuantityControl({ item, quantity, changeQuantity }: { item: MenuItem; quantity: number; changeQuantity: (item: MenuItem, change: number) => void }) {
  return <div className="mt-4 grid grid-cols-[40px_1fr_40px] items-center overflow-hidden rounded-md border-2 border-primary bg-background"><Button size="icon" variant="ghost" aria-label={`Decrease ${item.name}`} onClick={() => changeQuantity(item, -1)}><Minus /></Button><span className="text-center font-black">{quantity}</span><Button size="icon" variant="ghost" aria-label={`Increase ${item.name}`} onClick={() => changeQuantity(item, 1)}><Plus /></Button></div>;
}

function CartLine({ item, changeQuantity }: { item: MenuItem & { quantity: number }; changeQuantity: (item: MenuItem, change: number) => void }) {
  return <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-primary/20 bg-background p-3 sm:grid-cols-[1fr_auto_auto]"><div><h3 className="font-extrabold">{item.name}</h3><p className="text-sm text-muted-foreground">{formatPrice(item.price)} × {item.quantity} = <strong className="text-foreground">{formatPrice(item.price * item.quantity)}</strong></p></div><QuantityControl item={item} quantity={item.quantity} changeQuantity={changeQuantity} /><Button size="icon" variant="ghost" aria-label={`Remove ${item.name}`} className="hidden text-destructive sm:inline-flex" onClick={() => changeQuantity(item, -item.quantity)}><Trash2 /></Button></div>;
}