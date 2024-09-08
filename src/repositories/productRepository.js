import ProductManager from '../dao/db/product-manager-db.js';
import ProductDTO from '../dto/product.dto.js';

class ProductRepository {
    constructor() {
        this.productManager = new ProductManager();
    }

    async getProducts(queryParams) {
        const productsData = await this.productManager.getProducts(queryParams);
        return productsData.docs.map(product => new ProductDTO(
            product.title,
            product.description,
            product.price,
            product.code,
            product.status,
            product.stock,
            product.category,
            product.thumbnails
        ));
    }

    async getProductById(id) {
        const product = await this.productManager.getProductById(id);
        return product ? new ProductDTO(
            product.title,
            product.description,
            product.price,
            product.code,
            product.status,
            product.stock,
            product.category,
            product.thumbnails
        ) : null;
    }

    async addProduct(productData) {
        const productDTO = new ProductDTO(
            productData.title,
            productData.description,
            productData.price,
            productData.code,
            productData.status,
            productData.stock,
            productData.category,
            productData.thumbnails
        );
        return await this.productManager.addProduct(productDTO);
    }

    async updateProduct(id, updatedFields) {
        return await this.productManager.updateProduct(id, updatedFields);
    }

    async deleteProduct(id) {
        return await this.productManager.deleteProduct(id);
    }
}

export default ProductRepository;
