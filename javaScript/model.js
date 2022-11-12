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
let totalCost = 0;
const MAX = 48;
const MIN = 1;

function setCart(donut, amount) {
  if (donut in cart) {
    cart[donut] = cart[donut] + amount;
  } else {
    cart[donut] = amount;
  }

  if (cart[donut] > MAX) {
    cart[donut] = MAX;
  }
  renderCartAmount();
}

function getCart() {
  return cart;
}

function getProducts() {
  return products;
}

function removeCartItem(item) {
  delete cart[item];
}

function getTotal() {
  let amount = 0;
  totalCost = 0;
  Object.values(getCart()).forEach((val) => {
    amount += val;
  });
  totalCost = totalCost + productsPrice * amount;
  return totalCost.toFixed(2);
}
