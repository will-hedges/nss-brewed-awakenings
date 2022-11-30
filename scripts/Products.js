import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

// clicking a product should open an alert that shows the product name and how much it costs

// create a new event listener for clicking on the products
document.addEventListener("click", (clickEvent) => {
  // target the most specific html element clicked by the user
  const itemClicked = clickEvent.target;

  // get the price and show the alert IFF the product list item was clicked
  if (itemClicked.id.startsWith("product")) {
    // get the product primary key
    const [, productId] = itemClicked.id.split("--");
    // use the productId pk to look up the product
    for (const product of products) {
      // when you find the product, show the alert
      if (product.id == productId) {
        window.alert(`${product.name} costs 
$${product.price.toFixed(2)}`);
      }
    }
  }
});
