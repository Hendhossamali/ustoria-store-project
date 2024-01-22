import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'shop',component:ShopComponent},
    {path:'single-product',component:SingleProductComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'single-product/:id',component:SingleProductComponent}
];
