const rateElements = document.querySelectorAll('.rate');
const button = document.querySelector('#submit-button');
const firstCard = document.querySelector('.rating-container');
const secondCard = document.querySelector('.greetings-container');
const finalRate = document.querySelector('.paragraph-greetings');
const starContainer = document.querySelector('.star-container');

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
rateElements.forEach(rateElement => rateElement.addEventListener("click", rateStar));

document.addEventListener("click", resetColorsAndStars);

function toggleColor() {
  const rate = this.innerHTML;
  
  rateElements.forEach(rateElement => {
    if (rateElement.innerHTML === rate) {
      rateElement.style.color = "var(--White)";
      rateElement.style.backgroundColor = "var(--Light-Grey)";
      finalRate.innerHTML = `You selected ${rate} out of 5`;
    } else {
      rateElement.style.color = "";
      rateElement.style.backgroundColor = "";
    }
  });
}

function resetColorsAndStars(event) {
  if (!event.target.classList.contains("rate")) {
      rateElements.forEach(rateElement => {
      rateElement.style.color = "";
      rateElement.style.backgroundColor = "";
    });
    
    starContainer.innerHTML = "";
    const starBox = document.createElement("span");
    const starImg = document.createElement("img");
    starImg.src = "./images/icon-star.svg";
    starBox.classList.add("star");
    starBox.appendChild(starImg);
    starContainer.appendChild(starBox);
  }
}

function isButtonSelected() {
  for (let i = 0; i < rateElements.length; i++) {
    const rateElement = rateElements[i];
    if (rateElement.style.backgroundColor === "var(--Light-Grey)") {
      return true;
    }
  }
  return false;
}

function rateStar() {
  const rateValue = parseInt(this.innerHTML);
  starContainer.innerHTML = "";
  for (let i = 1; i <= rateValue; i++) {
    const starBox = document.createElement("span");
    const starImg = document.createElement("img");
    starImg.src = "./images/icon-star.svg";
    starBox.classList.add("star");
    starBox.appendChild(starImg);
    starContainer.appendChild(starBox);
  }
}
