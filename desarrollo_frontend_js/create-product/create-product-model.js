export async function createProduct(message) {
  const token = localStorage.getItem('jwt');

  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    body: JSON.stringify({
      message
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error("Error creando producto")
  }


}
