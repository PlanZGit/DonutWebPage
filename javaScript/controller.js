//Controller
document.getElementById("ring").addEventListener("click", function () {
  resetGrid();
  render(this.id);
});

document.getElementById("bar").addEventListener("click", function () {
  resetGrid();
  render(this.id);
});

document.getElementById("bismark").addEventListener("click", function () {
  resetGrid();
  render(this.id);
});

document.getElementById("shop-name").addEventListener("click", function () {
  resetGrid();
  renderHomePage();
});

document.getElementById("cart-button").addEventListener("click", function () {
  resetGrid();
  renderCartPreview();
});

const buyBox = (itemType) => {
  return () => {
    addToCart(itemType, 12);
  };
};

const buyOne = (itemType) => {
  return () => {
    addToCart(itemType, 1);
  };
};

const removeItem = (itemType) => {
  return () => {
    removeCartItem(itemType);
    renderCartAmount();
    renderCartPreview();
  };
};

const selectQuantity = (obj) => {
  return () => {
    console.log(obj.value);
    console.log(obj.id);
    setCart(obj.id, obj.value * 1);
    renderCartAmount();
    renderCartPreview();
  };
};
