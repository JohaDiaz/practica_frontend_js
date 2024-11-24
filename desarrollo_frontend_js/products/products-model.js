// modelo - obtención de datos que necesita nuestra aplicación

// los productos tienen que venir de SPARREST

export async function getProducts() {
        try {
        const response = await fetch("http://localhost:8000/api/products?_expand=user");
        const products = await response.json();
        
        if (!response.ok) {
        throw new Error("Recurso no existente");
        }

        return products;

    } catch (error) {
        throw new Error(error.message)
    }
}