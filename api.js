const container = document.querySelector(".container");
const artanButton = document.getElementById("artan");
const azalanButton = document.getElementById("az");



artanButton.addEventListener('click',function sort(e){
    products.sort((a,b)=>a.price-b.price)
    renderUI(products);
});

azalanButton.addEventListener('click',function sort(e){
    products.sort((a,b)=>b.price-a.price)
    renderUI(products);
});

const fetchProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      products = json;
      renderProducts(products);
    });
};

const renderProducts = (productsArray) => {
  container.innerHTML = "";
  for (let i = 0; i < productsArray.length; i++) {
    const product = productsArray[i];
    container.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="">
          <h2>${product.title}</h2>
          <p>Price: ${product.price}$</p>
          <p>${product.description}</p>
        </div>
      `;
  }
};

fetchProducts();
