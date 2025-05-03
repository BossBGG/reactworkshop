import { ProductModel } from "../types/Product.model";

const API_URL = 'https://localhost:3001/products';

export const ProductService = {
    getProductList: async (): Promise<ProductModel[]> => {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    },

    getProductById: async (id: number): Promise<ProductModel> =>{
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    },

    addProduct: async (product: Omit<ProductModel, 'id'>): Promise<ProductModel> => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(product),  
        })

        if (!response.ok) {
            throw new Error('Failed to add products');
        }

        return await response.json();
    },
};
