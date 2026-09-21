# Mr. Burger Babu Bites

@connector:resend:"Resend" @connector:github:"GitHub API" Build a simple, professional and fully working website for my food cart using mainly:

- HTML
- CSS
- Vanilla JavaScript

Do NOT over-engineer the project.
Do NOT use React, Next.js, complex frameworks, unnecessary libraries, or complicated architecture.

Use a very simple structure such as:

index.html
style.css
script.js

For the email/order functionality, use one small secure server-side/serverless API endpoint for Resend. The Resend API key must never be placed in HTML, CSS, JavaScript frontend code, or GitHub.

==================================================
BUSINESS DETAILS
==================================================

Business Name:
Mr. Burger Babu

Owner:
Sunny Sodhi

Tagline:
"Taste and Experience our Food."

WhatsApp:
7494921302

Order Email:
sunnysodhi060@gmail.com

Domain:
mrburgerbabu.in

Instagram:
https://www.instagram.com/mr_burger_babu?stkn=ZG9tdnc1czBlbG9n

Address:
Hisar Road and Janata Dharamsala,
Bhuna, Fatehabad, Haryana

Opening:
Every Day
5:00 PM – 11:00 PM

==================================================
ASSETS
==================================================

I will provide:

1. Mr. Burger Babu logo
2. Menu image

Use the actual logo I provide.

The menu image is only the reference for creating the website's digital menu.

IMPORTANT:
DO NOT make the menu just a picture.

Read the menu items and prices from the provided menu image and create each item as an actual HTML/JavaScript menu product.

Every item should have:

- Item name
- Price
- Add to Cart button
- Quantity controls after being added

Do not invent prices.

==================================================
DESIGN
==================================================

Keep the website:

- Light mode
- Simple
- Clean
- Professional
- Modern
- Food-focused
- Slightly playful/cheesy
- Mobile-friendly

Use warm food-style colors that work well with the logo.

Do not make it overly complicated.

Do not add huge amounts of text.

The website should focus on:
FOOD → MENU → CART → ORDER

Use smooth but lightweight CSS animations.

==================================================
PAGE
==================================================

Create a single-page website.

Sections:

1. Header
2. Hero
3. Special Items
4. Menu
5. Cart
6. Order Form
7. Location & Opening Hours
8. Instagram
9. Footer

==================================================
HEADER
==================================================

Show:

Mr. Burger Babu logo

Navigation:

Home
Specials
Menu
Order

Add a cart icon/button.

Example:

🛒 Cart (0)

The cart number must update automatically.

==================================================
HERO
==================================================

Show:

Mr. Burger Babu

"Taste and Experience our Food."

Add a short fun food-related line.

Buttons:

ORDER NOW
VIEW MENU

Buttons should scroll to the appropriate sections.

==================================================
SPECIAL ITEMS
==================================================

Highlight:

Chai
Churi
Bun Maska
Momos

Create simple attractive cards.

If their prices are available in the menu, show the price and Add to Cart button.

These should use the same cart system as the main menu.

==================================================
DIGITAL MENU
==================================================

THIS IS VERY IMPORTANT.

The menu must NOT be only a JPG/image.

Create a real digital menu using HTML + JavaScript.

Every item from the provided menu image should become an actual product.

Example:

Momos
₹80

[-] 1 [+]

[ADD TO CART]

The customer must be able to add every menu item to the cart.

Organize items into simple categories if the menu has categories.

For example:

Burgers
Momos
Chai
Snacks
Beverages
etc.

Only create categories that actually exist in the provided menu.

==================================================
CART
==================================================

Create a simple working shopping cart using Vanilla JavaScript.

Customers must be able to:

- Add an item
- Add multiple different items
- Add the same item multiple times
- Increase quantity
- Decrease quantity
- Remove item
- Clear cart
- See item prices
- See quantities
- See subtotal
- See TOTAL PRICE

Example:

YOUR CART

Momos
₹80 × 2 = ₹160

Bun Maska
₹60 × 1 = ₹60

Chai
₹30 × 3 = ₹90

-------------------

TOTAL: ₹310

The total must automatically update whenever quantity changes.

Do NOT hard-code the total.

Calculate:

price × quantity

for every item and then add everything together.

==================================================
MOBILE CART
==================================================

On mobile, make the cart easy to access.

A sticky bottom button can be used:

🛒 4 Items • ₹310
VIEW CART

Only show it when the cart has items.

==================================================
ORDER FORM
==================================================

After the customer finishes shopping, show:

Customer Name
Phone / WhatsApp Number
Additional Note

Show the complete cart before submission.

Example:

ORDER SUMMARY

Momos × 2
Bun Maska × 1
Chai × 3

TOTAL: ₹310

[PLACE ORDER]

The customer must be able to order MULTIPLE ITEMS in one order.

Do NOT create a form where the customer can select only one item.

==================================================
ORDER VALIDATION
==================================================

Require:

- Customer name
- Valid phone number
- At least one cart item

Show simple validation messages.

Show a loading state when the order is being sent.

Show success message after successful submission.

Show an error message if submission fails.

==================================================
RESEND EMAIL
==================================================

Send order details to:

sunnysodhi060@gmail.com

Domain:

mrburgerbabu.in

Sender:

orders@mrburgerbabu.in

The domain must be verified in Resend before using the sender.

Use Resend through a small secure server-side/serverless endpoint.

For example:

/api/order

Frontend JavaScript sends the order data to this endpoint.

The endpoint sends the email through Resend.

IMPORTANT:

Never put:

RESEND_API_KEY

inside:

- script.js
- index.html
- CSS
- browser code
- GitHub

Store it as a server-side environment variable.

Example:

RESEND_API_KEY=...

Also use an environment variable for the sender:

RESEND_FROM_EMAIL=orders@mrburgerbabu.in

==================================================
ORDER EMAIL
==================================================

Email:

To:
sunnysodhi060@gmail.com

Subject:

New Order - Mr. Burger Babu

Include:

Customer Name
Phone Number
All ordered items
Quantity of each item
Price of each item
Total price
Additional note
Order date/time

Example:

NEW ORDER

Customer:
Rahul

Phone:
9876543210

Items:

Momos × 2 — ₹160
Bun Maska × 1 — ₹60
Chai × 3 — ₹90

TOTAL: ₹310

Note:
Less spicy please.

==================================================
WHATSAPP
==================================================

Add a WhatsApp button using:

7494921302

The WhatsApp button should work.

Also create a WhatsApp order message from the cart.

Example:

Hi Mr. Burger Babu,

I would like to order:

Momos × 2
Bun Maska × 1
Chai × 3

Total: ₹310

The customer should then be able to send that message through WhatsApp.

==================================================
INSTAGRAM
==================================================

Use:

https://www.instagram.com/mr_burger_babu?stkn=ZG9tdnc1czBlbG9n

Add an Instagram button.

==================================================
LOCATION
==================================================

Show:

Hisar Road and Janata Dharamsala,
Bhuna, Fatehabad, Haryana

Add a "Get Directions" button if a reliable Google Maps URL is available.

Do not invent coordinates.

==================================================
OPENING HOURS
==================================================

Show:

Open Every Day
5:00 PM – 11:00 PM

==================================================
ANIMATIONS
==================================================

Use simple CSS animations:

- Hero fade/slide
- Card hover
- Button hover
- Add-to-cart animation
- Cart badge animation
- Scroll reveal

Do not use heavy animation libraries.

CSS animations are preferred.

==================================================
RESPONSIVE DESIGN
==================================================

Make it work properly on:

Mobile
Tablet
Desktop

Mobile is the priority.

The menu and cart must be especially easy to use on phones.

No horizontal scrolling.

==================================================
SECURITY
==================================================

Keep the implementation simple but secure.

Do NOT expose the Resend API key.

Do NOT commit .env files.

Add .env to .gitignore.

Validate order data on the server.

Do not blindly trust prices sent by the browser.

The server should calculate/verify the order total using the trusted menu data.

==================================================
GITHUB
==================================================

Repository:

https://github.com/Yash-Badmunda/Mr-Burger-Babu.git

Keep the project simple.

Do not commit:

- API keys
- Passwords
- Tokens
- .env files
- Private credentials

==================================================
FINAL CHECK
==================================================

Before finishing, test:

- Logo
- Menu
- Every menu item
- Add to Cart
- Multiple items
- Quantity +/-
- Remove item
- Clear cart
- Cart count
- Automatic total
- Order form
- Validation
- Resend email
- WhatsApp
- Instagram
- Navigation
- Mobile layout
- Desktop layout
- Animations
- Production build

Most importantly:

THE MENU MUST BE A REAL WORKING DIGITAL MENU.

Do not simply display the menu image.

Every menu item must be selectable and addable to the cart.

The customer must be able to order multiple items and quantities and see the automatically calculated total before placing the order.

Keep the entire project simple and understandable using HTML, CSS, Vanilla JavaScript, and only the minimum server-side code required for Resend.==================================================

FOOD VIBE, STICKERS & ANIMATIONS

==================================================

The website should strongly communicate a fun, cheesy, street-food vibe.

Do NOT make it look like a boring restaurant template.

Use playful food-themed visual elements throughout the website, such as:

- 🍔 Burger stickers

- 🍟 Fries stickers

- 🥤 Drink/cup stickers

- 🌶️ Chili stickers

- 🧀 Melting cheese elements

- 😋 Food emojis where appropriate

- ⭐ Small star/sparkle stickers

- 🔥 "Hot & Tasty" style badges

- ❤️ Small food-love elements

- Hand-drawn style food doodles

- Fun sticker-like labels around food cards

These should feel like physical food-cart/street-food stickers.

Examples of small sticker text:

"YUM! 😋"

"SO CHEESY 🧀"

"HOT & FRESH 🔥"

"MADE TO CRAVE 🤤"

"CHAI TIME ☕"

"FULL ON SWAD 😋"

"CAN'T STOP AT ONE 👀"

Do not overload the page with stickers.

Use them strategically around:

- Hero

- Special items

- Menu

- Cart

- Order section

==================================================

PLAYFUL ANIMATIONS

==================================================

Use CSS/Vanilla JavaScript animations instead of heavy animation libraries.

Include:

1. HERO

Food stickers should gently float or rotate.

Example:

- Burger sticker floating slightly

- Cheese sticker slowly moving

- Small stars/sparkles appearing around the hero

2. FOOD CARDS

When hovering over a food card:

- Slight lift

- Slight rotation

- Image/emoji gently scales

- Sticker can pop in

3. ADD TO CART

When the customer clicks "Add to Cart":

- Button gives a small bounce

- Cart icon briefly animates

- Small "Added! 😋" notification appears

- Optional small food/sticker animation travels toward the cart

Keep this animation quick.

4. CART

When an item is added:

- Cart badge briefly pops/bounces

- Total updates smoothly

5. SCROLL ANIMATIONS

As sections enter the screen:

- Fade in

- Slight slide up

- Small food stickers appear with a playful delay

6. MENU

Menu cards should have subtle hover/tap animations.

7. ORDER SUCCESS

After a successful order:

Show a fun but professional success animation.

Example:

🎉

"Order Received!"

"Get ready for something tasty! 😋"

Use small floating food/confetti elements.

==================================================

CHEESY MICROCOPY

==================================================

Use short playful food-related phrases throughout the website.

Examples:

"Good food. Better mood."

"Warning: Serious cravings ahead 🤤"

"One bite. Instant happiness."

"Your cravings called. We answered."

"Come hungry. Leave happy."

"Made for your evening cravings."

"Don't just scroll. Order something tasty. 😋"

Do not put cheesy text everywhere.

Use it only where it improves the experience.

==================================================

STICKER DESIGN

==================================================

Sticker elements should look like:

- Hand-drawn

- Slightly imperfect

- Playful

- Food-cart inspired

- Rounded

- Casual

- Modern

Use CSS where possible instead of loading large external sticker/image libraries.

If actual sticker graphics are needed, keep them lightweight.

The stickers should complement the provided Mr. Burger Babu logo and menu.

Do NOT let stickers cover important information, buttons, menu prices, or the cart.

==================================================

IMPORTANT DESIGN BALANCE

==================================================

The final website must feel:

70% professional + clean

30% playful + cheesy + street-food

NOT:

50% professional + 50% childish

The food should remain the main visual focus.

Animations must be:

- Smooth

- Lightweight

- Fast

- Mobile-friendly

Do not use excessive bouncing, spinning, flashing, or distracting effects.

Respect prefers-reduced-motion where possible so users who disable animations still get a complete experience.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6d5d2230-e7cc-4596-a3bc-ab71c4995353).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
