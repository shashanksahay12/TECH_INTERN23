// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll("button");
// Add a click event listener to each button
addToCartButtons.forEach(button => {
button.addEventListener("click", () => {
// Get the book details from the button's parent element
const book = button.parentNode;
const title = book.querySelector("h3").innerText;
const author = book.querySelector("p").innerText;
const price = 9.99; // You can set the price for each book here
// Create a new item for the cart
const item = document.createElement("div");
item.classList.add("cart-item");
item.innerHTML = `

<h3>${title}</h3>
<p>${author}</p>
<p>$${price}</p>
`;
// Add the item to the cart
const cart = document.querySelector(".cart");
cart.appendChild(item);
});
});