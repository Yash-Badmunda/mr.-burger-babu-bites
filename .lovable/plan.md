# Mr. Burger Babu website

## What I’ll build
- Replace the blank page with one polished, mobile-first food-cart experience using the supplied logo and a warm green, tomato-red, cheese-yellow, and paper-white visual system.
- Keep the page focused on food, menu, cart, and ordering, with restrained street-food stickers, hand-drawn accents, light movement, and reduced-motion support.
- Add the requested header, hero, specials, digital menu, cart, order form, location/hours, Instagram, and footer sections.

## Digital menu and specials
- Convert every priced item visible in the uploaded menu into a selectable product, grouped only by its printed categories: Burger, Sandwich, Wrap, Spl. Delight, Maggi, Juice, Shake, Mojito, Custard, Cold Coffee, Frise, and Pasta.
- Preserve the printed names and prices exactly, including “Mashroom,” “Vanila,” “Frise,” and other menu spellings.
- Show Chai, Churi, Bun Maska, Momos, Pav Bhaji, Patiz, and Maska Bun as special/informational highlights without prices or cart buttons, since no prices are provided.
- Use the menu image only as the source of truth; it will not be displayed as the menu itself.

## Cart and ordering
- Build one shared cart for menu products with add, increase, decrease, remove, clear, live item count, subtotal, total, and a mobile sticky cart button.
- Keep cart and order summary synchronized so multiple items and quantities can be submitted together.
- Validate name, Indian phone/WhatsApp number, note length, and a non-empty cart in the page and again on the server.
- Add loading, clear error feedback, and a playful order-received state.
- Add a prefilled WhatsApp order link to 7494921302, plus working Instagram and Google Maps search/directions links using the supplied address without inventing coordinates.

## Secure email
- Add one small `/api/order` server endpoint that accepts only validated order fields.
- Keep a single trusted menu catalogue on the server, reject unknown items or invalid quantities, and recalculate every line total and the final total server-side.
- Send “New Order - Mr. Burger Babu” to sunnysodhi060@gmail.com through the linked Resend connection, using `orders@mrburgerbabu.in` as the sender.
- Surface Resend’s actual failure cleanly if `mrburgerbabu.in` has not yet been verified; no secret will appear in browser code or the repository.

## Technical details
- The project’s hosting shell is fixed to TanStack Start/React, so I’ll keep the implementation to one route, one small shared menu module, and one server endpoint rather than replacing the supported runtime with a separate framework.
- Use the supplied logo through the project asset system; keep the QR image unused because the requested order flows work directly through email and WhatsApp.
- Add page-specific title, description, Open Graph, and Twitter metadata; also ensure `.env` remains ignored.

## Verification
- Check every product against the printed menu, then test add/multiple quantities/decrease/remove/clear, counts and totals, validation, WhatsApp copy, navigation, links, and order submission behavior.
- Verify the finished page at phone and desktop sizes, animations/reduced motion, no horizontal overflow, and a clean production build.
