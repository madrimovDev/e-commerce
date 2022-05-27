import app from "../app.axios";

// getProducts
export const getProducts = async () => {
    const response = await app.get("/products");
    return response.data;
};


// getProduct
export const getProduct = async (id: number) => {
    const response = await app.get(`/products/${id}`);
    return response.data;
}


// getProducts by limit query param
export const getProductsByLimit = async (limit: number) => {
    const response = await app.get(`/products?limit=${limit}`);
    return response.data;
}


// getProducts by sort desc query param
export const getProductsBySortDesc = async () => {
    const response = await app.get(`/products?sort=desc`);
    return response.data;
}


//getProducts 
export const getProductsBySortAsc = async () => {
    const response = await app.get(`/products?sort=asc`);
    return response.data;
}