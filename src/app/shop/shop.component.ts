import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  products: Product[] = [];
  public productList: any;

  constructor(private activatedRoute:ActivatedRoute,
    private productService: ProductsService,
    private cartservice: CartService,
    private router : Router) {

    this.productService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    })
    
    this.products.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
  }
  

  addCartItem(item: Product) {
    this.cartservice.addtoCart(item);
    this.router.navigateByUrl('/cart');
  }
}
