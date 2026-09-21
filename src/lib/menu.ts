export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  emoji: string;
};

export const MENU: MenuItem[] = [
  { id: "aloo-tikki-burger", name: "Aloo Tikki Burger", price: 39, category: "Burger", emoji: "🍔" },
  { id: "cheese-burger", name: "Cheese Burger", price: 49, category: "Burger", emoji: "🧀" },
  { id: "crisp-burger", name: "Crisp Burger", price: 49, category: "Burger", emoji: "🍔" },
  { id: "mashroom-burger", name: "Mashroom Burger", price: 69, category: "Burger", emoji: "🍄" },
  { id: "cheese-chips-burger", name: "Cheese Chips Burger", price: 79, category: "Burger", emoji: "🧀" },
  { id: "double-tikki-burger", name: "Double Tikki Burger", price: 79, category: "Burger", emoji: "🍔" },
  { id: "double-tikki-paneer-burger", name: "Double Tikki Paneer Burger", price: 89, category: "Burger", emoji: "🍔" },
  { id: "mbb-spl-burger", name: "MBB Spl. Burger", price: 119, category: "Burger", emoji: "⭐" },
  { id: "veg-grilled-sandwich", name: "Veg Grilled Sandwich", price: 79, category: "Sandwich", emoji: "🥪" },
  { id: "paneer-tikka-sandwich", name: "Paneer Tikka Sandwich", price: 79, category: "Sandwich", emoji: "🥪" },
  { id: "chatpata-corn-sandwich", name: "Chatpata Corn Sandwich", price: 79, category: "Sandwich", emoji: "🌽" },
  { id: "chocolate-banana-sandwich", name: "Chocolate Banana Sandwich", price: 99, category: "Sandwich", emoji: "🍌" },
  { id: "super-healthy-sandwich", name: "Super Healthy Sandwich", price: 99, category: "Sandwich", emoji: "🥪" },
  { id: "aloo-tikki-wrap", name: "Aloo Tikki Wrap", price: 49, category: "Wrap", emoji: "🌯" },
  { id: "paneer-tikka-wrap", name: "Paneer Tikka Wrap", price: 69, category: "Wrap", emoji: "🌯" },
  { id: "loaded-cheese-wrap", name: "Loaded Cheese Wrap", price: 89, category: "Wrap", emoji: "🧀" },
  { id: "corn-chat", name: "Corn Chat", price: 49, category: "Spl. Delight", emoji: "🌽" },
  { id: "veg-maggi", name: "Veg Maggi", price: 59, category: "Maggi", emoji: "🍜" },
  { id: "corn-maggi", name: "Corn Maggi", price: 59, category: "Maggi", emoji: "🌽" },
  { id: "cheese-maggi", name: "Cheese Maggi", price: 69, category: "Maggi", emoji: "🧀" },
  { id: "mix-maggi", name: "Mix Maggi", price: 79, category: "Maggi", emoji: "🍜" },
  { id: "pineapple-paradise", name: "Pineapple Paradise", price: 99, category: "Juice", emoji: "🍍" },
  { id: "mango-twist", name: "Mango Twist", price: 99, category: "Juice", emoji: "🥭" },
  { id: "tropical-sunrise", name: "Tropical Sunrise", price: 99, category: "Juice", emoji: "🍹" },
  { id: "mixed-berry", name: "Mixed Berry", price: 129, category: "Juice", emoji: "🫐" },
  { id: "vanila-shake", name: "Vanila Shake", price: 59, category: "Shake", emoji: "🥤" },
  { id: "chocolate-shake", name: "Chocolate Shake", price: 69, category: "Shake", emoji: "🥤" },
  { id: "oreo-shake", name: "Oreo Shake", price: 69, category: "Shake", emoji: "🥤" },
  { id: "kit-kat-shake", name: "Kit Kat Shake", price: 69, category: "Shake", emoji: "🍫" },
  { id: "butter-scotch-shake", name: "Butter Scotch Shake", price: 79, category: "Shake", emoji: "🥤" },
  { id: "brownie-shake", name: "Brownie Shake", price: 89, category: "Shake", emoji: "🍫" },
  { id: "mint-mojito", name: "Mint Mojito", price: 59, category: "Mojito", emoji: "🍹" },
  { id: "pules-mojito", name: "Pules Mojito", price: 69, category: "Mojito", emoji: "🍹" },
  { id: "watermelon-mojito", name: "Watermelon Mojito", price: 79, category: "Mojito", emoji: "🍉" },
  { id: "green-apply-mojito", name: "Green Apply Mojito", price: 79, category: "Mojito", emoji: "🍏" },
  { id: "classic-custard-delight", name: "Classic Custard Delight", price: 79, category: "Custard", emoji: "🍨" },
  { id: "chocolate-custard-delight", name: "Chocolate Custard Delight", price: 99, category: "Custard", emoji: "🍫" },
  { id: "banana-custard-delight", name: "Banana Custard Delight", price: 99, category: "Custard", emoji: "🍌" },
  { id: "mix-custard-mbb-spl", name: "Mix Custard MBB Spl.", price: 119, category: "Custard", emoji: "⭐" },
  { id: "classic-cold-coffee", name: "Classic Cold Coffee", price: 59, category: "Cold Coffee", emoji: "🧋" },
  { id: "strong-cold-coffee", name: "Strong Cold Coffee", price: 69, category: "Cold Coffee", emoji: "🧋" },
  { id: "vanila-cold-coffee", name: "Vanila Cold Coffee", price: 69, category: "Cold Coffee", emoji: "🧋" },
  { id: "chocolate-cold-coffee", name: "Chocolate Cold Coffee", price: 79, category: "Cold Coffee", emoji: "🍫" },
  { id: "oreo-cold-coffee", name: "Oreo Cold Coffee", price: 79, category: "Cold Coffee", emoji: "🧋" },
  { id: "mbb-spl-cold-coffee", name: "MBB Spl. Cold Coffee", price: 119, category: "Cold Coffee", emoji: "⭐" },
  { id: "french-frise", name: "French Frise", price: 59, category: "Frise", emoji: "🍟" },
  { id: "masala-frise", name: "Masala Frise", price: 69, category: "Frise", emoji: "🌶️" },
  { id: "peri-peri-frise", name: "Peri Peri Frise", price: 69, category: "Frise", emoji: "🔥" },
  { id: "cheese-loaded-frise", name: "Cheese Loaded Frise", price: 79, category: "Frise", emoji: "🧀" },
  { id: "red-sauce-pasta", name: "Red Sauce Pasta", price: 99, category: "Pasta", emoji: "🍝" },
  { id: "white-sauce-pasta", name: "White Sauce Pasta", price: 119, category: "Pasta", emoji: "🍝" },
  { id: "mbb-spl-pasta", name: "MBB Spl. Pasta", price: 149, category: "Pasta", emoji: "⭐" },
];

export const MENU_CATEGORIES = Array.from(new Set(MENU.map((item) => item.category)));

export const formatPrice = (amount: number) => `₹${amount}`;