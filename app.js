const productsArray = [
  {
    id: 1,
    img: '01.jpeg',
    price: 100,
    title: 'Sample Headline',
  },
  {
    id: 2,
    img: '02.jpeg',
    price: 250,
    title: 'Sample Headline',
  },
  {
    id: 3,
    img: '03.jpeg',
    price: 70,
    title: 'Sample Headline',
  },
  {
    id: 4,
    img: '04.jpg',
    price: 100,
    title: 'Sample Headline',
  }
];

const $products = document.querySelector('.products');
const $dialog = document.getElementById('dialog');
const $dialogContent = document.getElementById('dialog-content');

productsArray.forEach(product => {
  $products.innerHTML += `
  <div class="card">
    <img src="./images/${product.img}" alt="foto">
		<div class="card-info">
			<h3 class="card-price">$ ${product.price}</h3>
			<p class="card-title">${product.title}</p>
			<button onClick="showCard(${product.id})" class="card-btn">learn more</button>
		</div>
  </div>
  `;
})

function showCard(id) {
  const product = productsArray.find(item => item.id == id);

  $dialogContent.innerHTML = `
    <div class="dialog-card">
      <img src="./images/${product.img}" alt="foto" />
      <p>${product.title}</p>
    </div>
  `;

  $dialog.showModal();
  console.log(product, id);
}