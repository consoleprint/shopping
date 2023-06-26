import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<Product[]>
      ('http://localhost:4200/api/products').subscribe((data) => {
        this.products = [...data]
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/