// cálculo del html que vamos a mostrar al usuario

export const buildProduct = (product) => {
const newProduct = document.createElement('a');
newProduct.setAttribute("href", `/product-detail.html?id=${product.id}`);
newProduct.innerHTML = `
    <div>
    <span>usuario: ${product.user.username}</span>
    <p>${product.name}</p>
    <p>${product.description}</p>
    <p>${product.price}</p>
    </div>
`;
return newProduct;
}

export function buildEmptyProductList() {
return '<h2>No hay productos disponibles</h2>';
}
