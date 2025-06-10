const products = [
  {
    name: "Goyard in Pelle",
    category: "borse",
    image: "Goyard-in-Pelle.png",
    price: "85€",
    discountedPrice: "40€",
    discount: true,
    description: "Borsa uomo Goyard in Pelle, Grigio."
  },

  {
    name: "Borsa Gucci",
    category: "borse",
    image: "Borsa-Gucci.png",
    price: "110€",
    discountedPrice: "35€",
    discount: true,
    description: "Borsa Gucci, grigia"
  },

  {
    name: "Cappellino Louis Vuitton",
    category: "copricapo",
    image: "Cappellino-Louis-Vuitton.png",
    price: "90€",
    discountedPrice: "25€",
    discount: true,
    description: "Cappellino Louis Vuitton a quadri"
  },

   {
    name: "Berretto Gucci",
    category: "copricapo",
    image: "berretto gucci.png",
    price: "80€",
    discountedPrice: "25€",
    discount: true,
    description: "Berretto Gucci in Tela, nero,rosso,grigio"
  },

     {
    name: "Philip Plein Shorts",
    category: "parte inferiore",
    image: "Philip Plein Shorts.png",
    price: "90€",
    discountedPrice: "40€",
    discount: true,
    description: ""
  },

     {
    name: "Philip Plein t-shirt",
    category: "parte superiore",
    image: "Philip Plein t-shirt.png",
    price: "90€",
    discountedPrice: "40€",
    discount: true,
    description: ""
  },


     {
    name: "Dquared Icon t-shirt",
    category: "parte superiore",
    image: "Dsquared Icon t-shirt.png",
    price: "70€",
    discountedPrice: "35€",
    discount: true,
    description: ""
  },

     {
    name: "Louis Vuitton Trainer",
    category: "scarpe",
    image: "Louis Vuitton Trainer.png",
    price: "150€",
    discountedPrice: "90€",
    discount: true,
    description: ""
  },

     {
    name: "Burberry Belt",
    category: "accessori",
    image: "Burberry Belt.png",
    price: "50€",
    discountedPrice: "25€",
    discount: true,
    description: ""
  },

     {
    name: "Gucci Belt",
    category: "accessori",
    image: "Gucci Belt.png",
    price: "55€",
    discountedPrice: "25€",
    discount: true,
    description: ""
  },

     {
    name: "Gucci Wallet",
    category: "accessori",
    image: "Gucci Wallet.png",
    price: "60€",
    discountedPrice: "20€",
    discount: true,
    description: ""
  },

     {
    name: "Louis Vutton Belt",
    category: "accessori",
    image: "Louis Vuitton Belt.png",
    price: "68€",
    discountedPrice: "25€",
    discount: true,
    description: ""
  },
  
     {
    name: "Gucci Hat",
    category: "copricapo",
    image: "Gucci Hat.png",
    price: "70€",
    discountedPrice: "27€",
    discount: true,
    description: ""
  },

       {
    name: "Stone Island t-shirt",
    category: "parte superiore",
    image: "Stone Island t-shirt.png",
    price: "70€",
    discountedPrice: "25€",
    discount: true,
    description: ""
  },

       {
    name: "Louis Vuitton Skate",
    category: "scarpe",
    image: "Louis Vuitton Skate.png",
    price: "200€",
    discountedPrice: "80€",
    discount: true,
    description: ""
  },

       {
    name: "Dior b30",
    category: "scarpe",
    image: "Dior b30.png",
    price: "250€",
    discountedPrice: "70€",
    discount: true,
    description: ""
  },

         {
    name: "Burberry Shorts",
    category: "parte inferiore",
    image: "Burberry Shorts.png",
    price: "80€",
    discountedPrice: "30€",
    discount: true,
    description: ""
  },

         {
    name: "Balenciaga Shorts ",
    category: "parte inferiore",
    image: "Balenciaga Shorts.png",
    price: "80€",
    discountedPrice: "30€",
    discount: true,
    description: ""
  },

         {
    name: "Kenzo t-shirt",
    category: "parte superiore",
    image: "Kenzo t-short.png",
    price: "70€",
    discountedPrice: "30€",
    discount: true,
    description: ""
  },

         {
    name: "Balenciaga t-shirt ",
    category: "parte superiore",
    image: "Balenciaga t-short.png",
    price: "70€",
    discountedPrice: "30€",
    discount: true,
    description: ""
  },

           {
    name: "Buono da 25 Euro",
    category: "buono",
    image: ".png",
    price: "25€",
    discountedPrice: "25€",
    discount: true,
    description: ""
  },
         {
    name: "Buono da 35 Euro",
    category: "buono",
    image: ".png",
    price: "35€",
    discountedPrice: "35€",
    discount: true,
    description: ""
  },
         {
    name: "Buono da 50 Euro",
    category: "buono",
    image: ".png",
    price: "50€",
    discountedPrice: "50€",
    discount: true,
    description: ""
  },
];

let currentCategory = null;

function filterProducts() {
  const term = document.getElementById("search").value.toLowerCase();
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  if(term.trim() === "") return;
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  filtered.forEach(p => container.appendChild(createProductCard(p)));
}

function filterByCategory(category) {
  const container = document.getElementById("product-container");
  if (currentCategory === category) {
    container.innerHTML = "";
    currentCategory = null;
    return;
  }
  currentCategory = category;
  container.innerHTML = "";
  const filtered = products.filter(p => p.category === category);
  filtered.forEach(p => container.appendChild(createProductCard(p)));
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product";
  card.onclick = () => openModal(product);
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <div class="price-tag">
      ${product.discount ? `<span class="discounted">${product.discountedPrice}</span> <span class="original">${product.price}</span>` : `<span>${product.price}</span>`}
    </div>
  `;
  return card;
}

function openModal(product) {
  document.querySelector(".modal-img").src = product.image;
  document.querySelector(".modal-name").textContent = product.name;
  document.querySelector(".modal-price").textContent = product.discount
    ? `${product.discountedPrice} (scontato da ${product.price})`
    : product.price;
  document.querySelector(".modal-description").textContent = product.description;
  document.getElementById("product-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

window.onload = () => {
  setTimeout(() => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("main-header").style.display = "flex";
    document.getElementById("category-bar").style.display = "flex";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("footer").style.display = "block";
  }, 1800);
};
