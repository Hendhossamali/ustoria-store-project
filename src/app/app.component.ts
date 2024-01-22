import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    HeaderComponent,
    HomeComponent,
    ShopComponent,
    CarouselModule,
    FooterComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ustoria-store';

  constructor() { }
}

