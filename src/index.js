import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/hero.scss";
import "./styles/top-ten.scss";
import "./styles/rules.scss";
import "./styles/media.scss";
import dataJson from "../data.json";

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

const data = dataJson.data;

for (let i = 0; i < travelCardsImages.length; i++) {
  const randomClass = travelCardsArray[i];
  const newClass = "travel-card__image" + randomClass;

  document.querySelectorAll(".travel-card__number")[i].textContent = i + 1;

  travelCardsImages[i].classList.add(newClass);
}

class TravelCard {
  constructor(image, country, number, title, description, list) {
    this.image = image;
    this.country = country;
    this.number = number;
    this.title = title;
    this.description = description;
    this.list = list;
  }

  createlistItems() {
    const listItems = this.list.map((item) => {
      const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
    });
    return listItems;
  }

  addCardToDOM() {
    const travelCard = document.createElement("article");
    const travelCardImage = document.createElement("div");
    const travelCardNumber = document.createElement("span");
    const travelCardCountry = document.createElement("span");
    const travelCardTitle = document.createElement("h3");
    const travelCardDescription = document.createElement("p");
    const travelCardList = document.createElement("ul");

    travelCard.classList.add("travel-card");
    travelCardImage.classList.add("travel-card__image", this.image);

    travelCardNumber.classList.add("travel-card__number");
    travelCardNumber.textContent = this.number;

    travelCardCountry.classList.add("travel-card__country");
    travelCardCountry.textContent = this.country;

    travelCardImage.append(travelCardNumber);
    travelCardImage.append(travelCardCountry);

    travelCardTitle.classList.add("travel-card__title");
    travelCardTitle.textContent = this.title;

    travelCardDescription.classList.add("travel-card__description");
    travelCardDescription.textContent = this.description;

    travelCardList.classList.add("travel-card__list");
    
    this.createlistItems().forEach((listItem) => {
        travelCardList.append(listItem);
    });

    travelCard.append(travelCardImage);
    travelCard.append(travelCardTitle);
    travelCard.append(travelCardDescription);
    
    travelCard.append(travelCardList);

    return travelCard;
  }
}

const rulseSection = document.querySelector(".top-ten__grid");
for (let i = 0; i < data.length; i++) {
    const travelCard = new TravelCard(
        data[i].image,
        data[i].country,
        data[i].number,
        data[i].title,
        data[i].description,
        data[i].list
    );
    const travelCardElement = travelCard.addCardToDOM();
    rulseSection.appendChild(travelCardElement);
}