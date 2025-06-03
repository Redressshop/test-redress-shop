const products = [
  {
    name: "Cappello Urban",
    category: "copricapo",
    image: "https://via.placeholder.com/150?text=Cappello",
    price: "25€",
    discountedPrice: "19€",
    discount: true,
    description: "Berretto urban, perfetto per lo streetwear."
  },
  {
    name: "Felpa Oversize",
    category: "parte superiore",
    image: "https://via.placeholder.com/150?text=Felpa",
    price: "45€",
    discountedPrice: "35€",
    discount: true,
    description: "Felpa calda con stampa Redress."
  },
  // aggiungi altri prodotti qui...
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
