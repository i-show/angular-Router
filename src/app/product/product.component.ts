import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { DEFAULT_PRODUCTS } from './product-factory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit {
  private mProductList: Product[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.mProductList = DEFAULT_PRODUCTS;
  }

  viewInfo(id: number): void {
    if (id === 1) {
      this.router.navigate(['/product/fruit']);
    } else if (id === 2) {
      this.router.navigate(['/product/vegetables']);
    }
  }

}
