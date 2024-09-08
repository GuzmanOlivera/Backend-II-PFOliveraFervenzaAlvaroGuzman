import CartService from '../services/carts.service.js';

class CartController {
    constructor() {
        this.cartService = new CartService();
    }

    async createCart(req, res) {
        try {
            const newCart = await this.cartService.createCart();
            res.status(201).json(newCart);
        } catch (error) {
            console.error("Error al crear carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async getCartById(req, res) {
        try {
            const cart = await this.cartService.getCartById(req.params.cid);
            if (!cart) {
                return res.status(404).json({ error: 'Carrito no encontrado' });
            }
            res.json(cart);
        } catch (error) {
            console.error("Error al obtener carrito por ID:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async addProductToCart(req, res) {
        try {
            const updatedCart = await this.cartService.addProductToCart(req.params.cid, req.params.pid);
            res.json(updatedCart);
        } catch (error) {
            console.error("Error al agregar producto al carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async removeProductFromCart(req, res) {
        try {
            const updatedCart = await this.cartService.removeProductFromCart(req.params.cid, req.params.pid);
            res.json(updatedCart);
        } catch (error) {
            console.error("Error al eliminar el producto del carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateCart(req, res) {
        try {
            const updatedCart = await this.cartService.updateCart(req.params.cid, req.body.products);
            res.json(updatedCart);
        } catch (error) {
            console.error("Error al actualizar carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async updateProductQuantity(req, res) {
        const { quantity } = req.body;
        try {
            const updatedCart = await this.cartService.updateProductQuantity(req.params.cid, req.params.pid, quantity);
            res.json(updatedCart);
        } catch (error) {
            console.error("Error al actualizar la cantidad de productos en el carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }

    async clearCart(req, res) {
        try {
            const updatedCart = await this.cartService.clearCart(req.params.cid);
            res.json(updatedCart);
        } catch (error) {
            console.error("Error al vaciar el carrito:", error);
            res.status(500).json({ error: error.message });
        }
    }
}

export default CartController;
