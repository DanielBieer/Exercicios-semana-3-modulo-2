const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

function renderProducts(productList){
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''

    productList.forEach(product => {
        const productElement = document.createElement('div')
        productElement.classList.add('product-item')

        const productTitle = document.createElement('h2')
        productTitle.textContent = product.nome

        const productPrice = document.createElement('p')
        productPrice.textContent = `R$ ${product.valor} `

        productElement.appendChild(productTitle)
        productElement.appendChild(productPrice)
        productContainer.appendChild(productElement)
    });
}

renderProducts(produtos)