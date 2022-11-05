//Model
const products = {
  ring: ["glaze", "sugar", "chocolate", "maple", "chocolate-sprinkle"],
  bar: ["chocolate", "maple", "chocolate-sprinkle"],
  bismark: [
    "raspberry-filling-glaze",
    "custard-filling-chocolate",
    "lemon-filling-sugarcoat",
  ],
  twist: ["glaze", "cinnamon-Sugar"],
  Roll: ["glaze-cinnamon"],
};
let cart = {};

function setCart(donut, amount) {
  if (donut in cart) {
    cart[donut] = cart[donut] + amount;
  } else {
    cart[donut] = amount;
  }
  renderCart();
}
