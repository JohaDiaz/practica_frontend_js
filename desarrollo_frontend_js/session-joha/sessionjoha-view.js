export function buildAuthorizedSession() {
    return `
      <a href="/create-product.html">Crear Producto</a>
      <button>cerrar sesión</button>
    `
  }
  export function buildUnauthorizedSession() {
  
   window.location.href = "./login.html"
    
  }
  