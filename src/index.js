import "./styles/main.scss";

const travelCardsImages = document.querySelectorAll(".travel-card__image");
const travelCardsArray = [
  "--peru",
  "--greece",
  "--japan",
  "--tanzania",
  "--usa",
  "--jordan",
  "--indonesia",
  "--portugal",
  "--iceland",
  "--bolivia",
];

for (let i = 0; i < travelCardsImages.length; i++) {
  const randomClass = travelCardsArray[i];
  const newClass = "travel-card__image" + randomClass;

  document.querySelectorAll(".travel-card__number")[i].textContent = i + 1;

  travelCardsImages[i].classList.add(newClass);
  console.log(i + 1);
}
