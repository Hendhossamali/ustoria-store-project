import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products/products.service';
import { Cart } from '../shared/models/Cart';
import CartItem from '../shared/models/CartItem';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cart!: Cart;

  public totalItem :number =0;

  constructor(private cartService : CartService , private activatedRoute :ActivatedRoute, 
    private productService : ProductsService){
      
    this.setCart();
      
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  changeQuantity(cartItem: CartItem, quantityInstring: string) {
    const quantity = parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
}
