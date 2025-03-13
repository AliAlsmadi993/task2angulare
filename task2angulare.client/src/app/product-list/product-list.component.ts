import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  category: string | null = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');

      if (this.category) {
        this.productService.getProductsByCategory(this.category, (data) => {
          this.products = data;
        });
      } else {
        this.productService.getAllProducts((data) => {
          this.products = data.products;
        });
      }
    });
  }
}
