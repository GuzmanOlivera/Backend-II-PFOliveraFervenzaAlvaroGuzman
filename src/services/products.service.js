import ProductRepository from '../repositories/productRepository.js';

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getProducts(queryParams) {
        return await this.productRepository.getProducts(queryParams);
    }

    async getProductById(id) {
        return await this.productRepository.getProductById(id);
    }

    async addProduct(productData) {
        return await this.productRepository.addProduct(productData);
    }

    async updateProduct(id, updatedFields) {
        return await this.productRepository.updateProduct(id, updatedFields);
    }

    async deleteProduct(id) {
        return await this.productRepository.deleteProduct(id);
    }
}

export default ProductService;
