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
const productsPrice = 0.5;
const productsBoxPrice = 5.99;

let cart = {};
let total = 0;

function setCart(donut, amount) {
  if (donut in cart) {
    cart[donut] = cart[donut] + amount;
  } else {
    cart[donut] = amount;
  }
  renderCartAmount();
}

function getProducts() {
  return products;
}

function getCart() {
  return cart;
}

function setTotal(amount) {
  total = total + productsPrice * amount;
}

function getTotal() {
  return total.toFixed(2);
}
