import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  product: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.http.get<Product[]>(
        `http://localhost:4200/api/products/${params['id']}`).subscribe((data) => {
        this.product = data
      });
    })
  }
  addToCart(){
    this.cartService.addToCart(this.product)
  }
}
