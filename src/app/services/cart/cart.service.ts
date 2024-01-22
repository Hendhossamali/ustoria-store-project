import { Injectable } from "@angular/core";
import { Cart } from "../../shared/models/Cart";
import { Product } from "../../shared/models/Product";
import CartItem from "../../shared/models/CartItem";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cart: Cart = new Cart();
    public productList = new BehaviorSubject<any>([]);

    constructor() { }
    getProducts(){
        return this.productList.asObservable();
    }
    //optional
    setProduct(product:any){
        this.cart.items.push(...product);
        this.productList.next(product);
    }
    // Add new Product to cart 
    addtoCart(product: Product): void {
        let cartItem =  this.cart.items.find(item => item.product.id === product.id);
        if(cartItem){
            this.changeQuantity(product.id, cartItem.quantity +1);
            return ;
        }
        this.cart.items.push(new CartItem(product));
        this.productList.next(this.cart.items);
     
    }
   
    //remove one cart item
    removeFromCart(productId:number): void{
        this.cart.items =
        this.cart.items.filter(item => item.product.id != productId);
        this.productList.next(this.cart.items);
    }
  
    changeQuantity(productId:number,quantity:number){
        let cartItem =  this.cart.items.find(item => item.product.id === productId);
        if(!cartItem) return;
        cartItem.quantity = quantity;
    }
    // Display Cart elements (Items)
    getCart(): Cart{
        return this.cart;
    }
    // remove all items / update cart 
    removeAllcart(){
        this.cart.items=[]
        this.productList.next(this.cart.items);
    }
}