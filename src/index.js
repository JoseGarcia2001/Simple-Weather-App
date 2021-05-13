import card from "./components/Card.js";

// Array con las cartas insertadas para validar que no se repita la mísma
const cardsInserted = [];

const cardsContainer = document.querySelector("div.cards-container");

// Lógica del botón para eliminar cartas
const closeButton = (event) => {
  if (
    event.target.nodeName === "svg" ||
    event.target.parentNode.nodeName === "svg"
  ) {
    if (event.target.parentElement.nodeName === "DIV") {
      const elId = parseInt(event.target.parentElement.dataset.id);
      const index = cardsInserted.indexOf(elId);
      cardsInserted.splice(index, 1);
      event.target.parentElement.remove();
    } else {
      const elId = parseInt(
        event.target.parentElement.parentElement.dataset.id
      );
      const index = cardsInserted.indexOf(elId);
      cardsInserted.splice(index, 1);
      event.target.parentElement.parentElement.remove();
    }
  }
};

cardsContainer.addEventListener("click", closeButton);

const renderData = () => {
  const input = document.querySelector("input");
  const submitButton = document.querySelector("button");

  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!input.value) {
      input.classList.add("bad-input");
      input.placeholder = "Ingrese una ubicación";
      return;
    }

    const { cardContainer, id } = await card(input.value);

    if (!cardContainer) {
      input.value = "";
      input.classList.add("bad-input");
      input.placeholder = "Ubicación no válida";
      return;
    }

    // Validar si la carta ya está desplegada
    if (cardsInserted.includes(id)) {
      input.classList.add("bad-input");
      input.placeholder = "Ya consultaste esta ubicación";
      input.value = "";
      return;
    }

    input.classList.remove("bad-input");
    cardsContainer.insertAdjacentElement("afterbegin", cardContainer);
    input.value = "";
    input.placeholder = "Ingresa una ubicación";
    cardsInserted.push(id);
  });
};

renderData();
