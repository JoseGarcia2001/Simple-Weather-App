import card from "./components/Card.js";

const cardsContainer = document.querySelector("div.cards-container");

const closeButton = (event) => {
  if (
    event.target.nodeName === "svg" ||
    event.target.parentNode.nodeName === "svg"
  ) {
    event.target.parentElement.nodeName === "DIV"
      ? event.target.parentElement.remove()
      : event.target.parentElement.parentElement.remove();
  }
};

cardsContainer.addEventListener("click", closeButton);

const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  if (!input.value) {
    input.classList.add("bad-input");
    input.placeholder = "Ingrese una ubicación";
    return;
  }
});

const renderData = async (city) => {
  const cardToInsert = await card(city);
  cardToInsert && cardsContainer.append(cardToInsert);
};

renderData("bogota");
renderData("medellin");
renderData("cali");
renderData("asdasdas");
