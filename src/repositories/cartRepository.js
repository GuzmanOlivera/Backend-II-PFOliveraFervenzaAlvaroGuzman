import CartManager from '../dao/db/cart-manager-db.js';
import CartDTO from '../dto/cart.dto.js';

class CartRepository {
    constructor() {
        this.cartManager = new CartManager(); 
    }

    async createCart() {
        const cart = await this.cartManager.createCart(); 
        return { cartDTO: new CartDTO(cart.products), _id: cart._id };
    }

    async getCartById(id) {
        const cart = await this.cartManager.getCartById(id);  
        return new CartDTO(cart.products);
    }

    async addProductToCart(cid, pid) {
        const updatedCart = await this.cartManager.addProductToCart(cid, pid);  
        return new CartDTO(updatedCart.products);
    }

    async removeProductFromCart(cid, pid) {
        const updatedCart = await this.cartManager.removeProductFromCart(cid, pid);  
        return new CartDTO(updatedCart.products);
    }

    async updateCart(cid, products) {
        const updatedCart = await this.cartManager.updateCart(cid, products);  
        return new CartDTO(updatedCart.products);
    }

    async updateProductQuantity(cid, pid, quantity) {
        const updatedCart = await this.cartManager.updateProductQuantity(cid, pid, quantity);  
        return new CartDTO(updatedCart.products);
    }

    async clearCart(cid) {
        const updatedCart = await this.cartManager.clearCart(cid);  
        return new CartDTO(updatedCart.products);
    }
}

export default CartRepository;
