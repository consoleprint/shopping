import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private http: HttpClient,
    private cartService: CartService
    ) { }
    products: any;
    ngOnInit() {
      this.products=this.cartService.getItems()
    }
    buy(){
      this.http.post('http://localhost:4200/api/products', this.products)
      .subscribe(r=>{
        console.log(r)
      })
    }
}
