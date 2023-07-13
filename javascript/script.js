const rateElements = document.querySelectorAll('.rate');
const button = document.querySelector('#submit-button');
const firstCard = document.querySelector('.rating-container');
const secondCard = document.querySelector('.greetings-container');
const finalRate = document.querySelector('.paragraph-greetings');

button.addEventListener("click", (e) => {
  if (isButtonSelected()) {
    e.preventDefault();
    firstCard.classList.toggle('hide');
    secondCard.classList.toggle('hide');
  } else {
    e.preventDefault();
  }
});

rateElements.forEach(rateElement => rateElement.addEventListener("click", toggleColor));
rateElements.forEach(rateElement => rateElement.addEventListener("click", isButtonSelected));
document.addEventListener("click", resetColor);

function toggleColor() {
  const clickedElement = this;
  const rate = clickedElement.innerHTML;

  rateElements.forEach(rateElement => {
    if (rateElement === clickedElement) {
      rateElement.style.color = "var(--White)";
      rateElement.style.backgroundColor = "var(--Light-Grey)";
      finalRate.innerHTML = `You selected ${rate} out of 5`;
    } else {
      rateElement.style.color = "";
      rateElement.style.backgroundColor = "";
    }
  });
}

function resetColor(event) {
  if (!event.target.classList.contains("rate")) {
    rateElements.forEach(rateElement => {
      rateElement.style.color = "";
      rateElement.style.backgroundColor = "";
    });
  }
}

function isButtonSelected() {
  for (let i = 0; i < rateElements.length; i++) {
    const rateElement = rateElements[i];
    if (rateElement.style.backgroundColor === "var(--Light-Grey)") {
      return true;
    }
  }
}
