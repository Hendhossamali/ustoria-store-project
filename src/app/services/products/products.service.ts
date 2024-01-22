import { Injectable } from "@angular/core";
import { Product } from "../../shared/models/Product"

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    productsApiUrl =" http://localhost:3000/products";
    constructor() {}

    //Get All Products (Read)
    async getAllProducts(): Promise<Product[]> {
      const data = await fetch(this.productsApiUrl);
      return await data.json() ?? [];
    }
    //Get Product by Id (Read)
    async getProductById(id: number): Promise<Product | undefined> {
      const data = await fetch(`${this.productsApiUrl}/${id}`);  
        return await data.json() ?? {};
    }

}