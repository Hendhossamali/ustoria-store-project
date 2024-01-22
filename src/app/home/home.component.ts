import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products/products.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,
     CommonModule,
      CarouselModule,
       FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  public productList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private cartservice: CartService,
    private router: Router
  ) {
    this.productService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    });

    this.products.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
  }

  addCartItem(item: Product) {
    this.cartservice.addtoCart(item);
    this.router.navigateByUrl('/cart');
  }
  dynamicSlides = [
    {
      id: 1,
      src: '../../assets/img/product-1.jpg',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: '../../assets/img/product-2.jpg',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: '../../assets/img/product-3.jpg',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: '../../assets/img/product-4.jpg',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: '../../assets/img/product-5.jpg',
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: 6,
      src: '../../assets/img/product-6.jpg',
      alt: 'Side 6',
      title: 'Side 6',
    },
  ];
  dynamicSlidess = [
    {
      id: 1,
      src: '../../assets/img/brand1.png',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: '../../assets/img/brand2.png',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: '../../assets/img/brand3.png',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: '../../assets/img/brand4.png',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: '../../assets/img/brand5.png',
      alt: 'Side 5',
      title: 'Side 5',
    },
    {
      id: 6,
      src: '../../assets/img/brand6.png',
      alt: 'Side 6',
      title: 'Side 6',
    },
  ];
  // customOptions: OwlOptions = {
  //     // loop:true,
  //     // autoplay: false,
  //     // mouseDrag: true,
  //     // touchDrag: true,
  //     // pullDrag: true,
  //     // freeDrag:false,
  //     // dots: false,
  //     // autoplayHoverPause:false,
  //     // autoplayTimeout:1000,
  //     // navSpeed: 500,
  //     // navText: ['', ''],
  //     items :3,
  //   skip_validateItems :false,
  //   loop : true,
  //   center : false,
  //   rewind : false,
  //   mouseDrag : true,
  //   touchDrag : true,
  //   pullDrag : true,
  //   freeDrag : false,
  //   margin : 0,
  //   stagePadding : 0,
  //   merge : false,
  //   mergeFit : true,
  //   autoWidth : false,
  //   startPosition : 0,
  //   rtl : false,
  //   smartSpeed : 250,
  //   fluidSpeed : false,
  //   dragEndSpeed : false,
  //   // responsive = {};
  //   responsiveRefreshRate : 200,
  //   // defaults to Navigation
  //   nav : true,
  //   navText : ['prev', 'next'],
  //   navSpeed : false,
  //   slideBy : 1, // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  //   dots : false,
  //   dotsEach : false,
  //   dotsData : false,
  //   dotsSpeed : false,
  //   // defaults to Autoplay
  //   autoplay : false,
  //   autoplayTimeout : 5000,
  //   autoplayHoverPause : false,
  //   autoplaySpeed : false,
  //   autoplayMouseleaveTimeout : 1,
  //   // defaults to LazyLoading
  //   lazyLoad : false,
  //   lazyLoadEager : 0,
  //   // defaults to Animate
  //   slideTransition : '',
  //   animateOut : false,
  //   animateIn : false,
  //   // defaults to AutoHeight
  //   autoHeight : false,
  //   // defaults to Hash
  //   URLhashListener : false,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       400: {
  //         items: 2
  //       },
  //       760: {
  //         items: 3
  //       },
  //       1000: {
  //         items: 5
  //       }
  //     },
  //     // nav: true
  //   }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplayHoverPause: false,
    autoplayTimeout: 1000,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
  customOptionss: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplayHoverPause: false,
    autoplayTimeout: 1000,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };
}
