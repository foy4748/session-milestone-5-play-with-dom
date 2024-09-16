document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
const cartItemSection = document.getElementById("shopping-cart-section");

const cardsContainer = document.getElementById("cards-section");
const cards = cardsContainer.getElementsByTagName("section");

function singleCartItem(itemName, price) {
  return `
        <!-- Single Cart Item Band -->
        <div class="bg-slate-100 p-2 flex justify-between items-center">
          <p class="text-sm">${itemName}</p>
          <p>${price}</p>
        </div>

	`;
}

//const singleCard = cards[0];
for (const singleCard of cards) {
  const cardBtn = singleCard.querySelector("button");

  cardBtn.addEventListener("click", function () {
    const itemName = singleCard.querySelector("h1").innerText;
    const itemPrice = singleCard.querySelector("h2").innerText;
    const newRowHTML = singleCartItem(itemName, itemPrice);
    cartItemSection.innerHTML += newRowHTML;
    cardBtn.setAttribute("disabled", true);
    cardBtn.classList.add("btn", "btn-disabled");
    singleCard.style.cursor = "not-allowed";
  });
}
