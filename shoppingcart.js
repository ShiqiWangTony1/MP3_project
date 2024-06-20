// Task 1

const EventEmitter = require('events');
class ShoppingCart extends EventEmitter {
    constructor() {
        super();
        this.cart = [];
        this.on('onCreate', this.onCreate);
        this.on('onUpdate', this.onUpdate);
        this.on('onDestroy', this.onDestroy);
        this.emit('onCreate');
    }
    onCreate() {
        console.log('Shopping cart initialized.');
    }
    add(name, price, amount) {
        this.cart.push({ name, price, amount });
        this.emit('onUpdate');
    }
    onUpdate() {
        console.log('Cart updated:', this.cart);
    }
    onDestroy() {
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.amount), 0);
        console.log('Total price:', total);
    }
}

// Use my terminal to test
const cart = new ShoppingCart();
cart.add('Apple', 1.0, 3);
cart.add('Banana', 1.5, 5);
cart.add('Water',0.7, 4);
cart.emit('onDestroy');

