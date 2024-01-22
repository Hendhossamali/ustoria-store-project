import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  productId: number | undefined;
  singleProduct:Product | undefined;
  products: Product[] = [];
  

  constructor(private activatedRoute: ActivatedRoute,
    private productService :ProductsService,
    private cartservice: CartService ,
    private router :Router){
    this.activatedRoute.params.subscribe(params => {
      this.productId =Number( params['id']);
      this.productService.getProductById(this.productId).then((product)=>{
            this.singleProduct=product;
      })

    })
    
  }
  addCartItem(item: Product) {
    this.cartservice.addtoCart(item);
    this.router.navigateByUrl('/cart');
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    autoHeight :false,
  
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
