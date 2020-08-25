/// Make Cards
const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");

const images = [
  {
    title: "The 3 friend's | Ana Lorena <br> click to see more",
    price: "25€ each",
    thumb: "img/3amigos.jpg",
    id: "img/3amigos.jpg"
  },
  {
    title: "The cute deer | Ana Lorena <br> click to see more",
    price: "22€",
    thumb: "img/alce.jpg",
    id: "img/alce.jpg",

  },
  {
    title: "The Ane with her book | Ana Lorena <br> click to see more",
    price: "28€",
    thumb: "img/ane2.jpg",
    id: "img/ane2.jpg"
  },
  {
    title: "The Olivia  | Ana Lorena <br> click to see more",
    price: "26€",
    thumb: "img/olivia.jpg",
    id: "img/olivia.jpg"
  },
  {
    title: "Sheep | Ana Lorena <br> click to see more",
    price: "22€",
    thumb: "img/ovelha2.jpg",
    id: "img/ovelha2.jpg"
  },
  {
    title:" The Rabbit in her dress | Ana Lorena <br> click to see more",
    price: "32€",
    thumb: "img/coelhaAmarela.jpg",
    id: "img/coelhaAmarela.jpg"
  }
];

images.map(images => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", images.id);
  cardClone.querySelector("img").src = images.thumb;
  cardClone.querySelector(".title").innerHTML = images.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    images.price;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "img"
    ).src = `${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("img").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
// MENU RESPONSE