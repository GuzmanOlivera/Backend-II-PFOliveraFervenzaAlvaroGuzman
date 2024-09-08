import CartRepository from '../repositories/cartRepository.js';
import CartDTO from '../dto/cart.dto.js';

class CartService {
    async createCart() {
        return await this.cartRepository.createCart();
    }

    async getCartById(cid) {
        const cart = await this.cartRepository.getCartById(cid);
        return new CartDTO(cart.products);
    }

    async addProductToCart(cid, pid) {
        return await this.cartRepository.addProductToCart(cid, pid);
    }

    async removeProductFromCart(cid, pid) {
        return await this.cartRepository.removeProductFromCart(cid, pid);
    }

    async updateCart(cid, products) {
        return await this.cartRepository.updateCart(cid, products);
    }

    async updateProductQuantity(cid, pid, quantity) {
        return await this.cartRepository.updateProductQuantity(cid, pid, quantity);
    }

    async clearCart(cid) {
        return await this.cartRepository.clearCart(cid);
    }
}

export default CartService;
