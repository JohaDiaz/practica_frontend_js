export function buildProductDetail(product) {

  return `
    <div>
      <p>${product.message}</p>
    </div>
  `
}

export function buildDeleteButton() {
  const removeButton = document.createElement('button');
  removeButton.textContent = "Borrar";

  return removeButton;
}
