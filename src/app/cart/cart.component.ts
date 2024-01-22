import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import CartItem from '../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
    // this.grandTotal = this.cartService.getTotalPrice();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInstring: string) {
    const quantity = parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }

  
  // remove all items
  updateCart(){
    this.cartService.removeAllcart();
  }
}
