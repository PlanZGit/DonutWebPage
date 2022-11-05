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

const buyBox = (itemType) => {
  return () => {
    setCart(itemType, 12);
  };
};

const buyOne = (itemType) => {
  return () => {
    setCart(itemType, 1);
  };
};
