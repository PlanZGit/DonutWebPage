//Visual
renderHomePage();

function renderHomePage() {
  Object.keys(getProducts()).forEach((element) => {
    render(element);
  });
}

function render(itemType) {
  let productGrid = document.getElementById("product-grid-id");

  //creates product-preview
  getProducts()[itemType].forEach((element) => {
    console.log(element.toLowerCase());
    let productPreview = document.createElement("div");
    productPreview.className = "product-preview";

    let productImage = document.createElement("img");
    productImage.className = "product-img";
    productImage.src =
      "product-img/" +
      element.toLowerCase() +
      "-" +
      itemType.toLowerCase() +
      "-donut.jpg";
    productImage.alt =
      "product-img/" +
      element.toLowerCase() +
      "-" +
      itemType.toLowerCase() +
      "-donut.jpg";

    let productName = document.createElement("div");
    productName.className = "product-name";
    productName.innerText =
      capitalizeFirstLetter(element) +
      " " +
      capitalizeFirstLetter(itemType) +
      " Donut";

    let productButtonContainer = document.createElement("div");
    productButtonContainer.className = "product-button-container";

    let addToBoxButton = document.createElement("button");
    addToBoxButton.id = "addOne";
    addToBoxButton.onclick = buyOne(element + " " + itemType);
    addToBoxButton.className = itemType;
    addToBoxButton.innerText = "Add";
    addToBoxButton.style.marginRight = "5px";

    let buyBoxButton = document.createElement("button");
    buyBoxButton.id = "addBox";
    buyBoxButton.onclick = buyBox(element + " " + itemType);
    buyBoxButton.className = itemType;
    buyBoxButton.innerText = "Buy Box";

    productButtonContainer.appendChild(addToBoxButton);
    productButtonContainer.appendChild(buyBoxButton);

    productPreview.appendChild(productImage);
    productPreview.appendChild(productName);
    productPreview.appendChild(productButtonContainer);
    productGrid.appendChild(productPreview);
  });
}

function resetGrid() {
  document.getElementById("product-grid-id").innerHTML = "";
  document.getElementById("cart-checkout-section").style.visibility = "hidden";
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderCartAmount() {
  let totalAmount = 0;
  Object.values(getCart()).forEach((val) => {
    totalAmount += val;
  });
  document.getElementById("cart-amount").innerHTML = totalAmount.toString();
  if (totalAmount > 0) {
    document.getElementById("cart-amount").style.visibility = "visible";
  }
}

function renderCartPreview() {
  document.getElementById("cart-checkout-section").style.visibility = "visible";
  document.getElementById("cart-preview").innerHTML = "";

  Object.keys(getCart()).forEach((element) => {
    let itemContainer = document.createElement("div");
    itemContainer.className = "item-container";

    let items = document.createElement("div");
    items.innerHTML = element + " x" + cart[element];

    let itemCost = document.createElement("div");
    itemCost.className = "item-cost";
    itemCost.innerHTML = "$" + (cart[element] * 0.5).toFixed(2);

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer";

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "removeButton";
    removeButton.onclick = removeItem(element);

    let container = document.createElement("div");
    container.className = "container";

    let parentButtonContainer = document.createElement("div");
    parentButtonContainer.className = "parentButtonContainer";

    let quantity = document.createElement("select");
    quantity.className = "quantity";
    quantity.id = element;
    quantity.value = cart[element];

    let quantityOption = document.createElement("option");
    quantityOption.id = element + "quantity";
    quantity.onchange = selectQuantity(quantity);

    quantityOption.value = cart[element];
    quantityOption.innerText = cart[element];
    quantity.appendChild(quantityOption);

    for (let i = 1; i < 13; i++) {
      let quantityOption = document.createElement("option");
      quantityOption.value = i;
      quantityOption.innerText = i;

      quantity.appendChild(quantityOption);
    }

    buttonContainer.appendChild(quantity);
    buttonContainer.appendChild(removeButton);

    parentButtonContainer.appendChild(buttonContainer);

    container.appendChild(itemCost);
    container.appendChild(parentButtonContainer);

    itemContainer.appendChild(items);
    itemContainer.appendChild(container);

    document.getElementById("cart-preview").appendChild(itemContainer);
  });

  renderTotal();
}

function renderTotal() {
  document.getElementById("total-cost").innerHTML = "";

  let totalCost = document.createElement("div");
  totalCost.innerHTML = "Total Cost";
  let costContainer = document.createElement("div");
  costContainer.innerHTML = "$" + getTotal();
  // let dateContainer = document.createElement("div");
  // dateContainer.innerHTML = new Date().toISOString().slice(0, 10);

  document.getElementById("total-cost").appendChild(totalCost);
  document.getElementById("total-cost").appendChild(costContainer);
  // document.getElementById("total-cost").appendChild(dateContainer);
}
