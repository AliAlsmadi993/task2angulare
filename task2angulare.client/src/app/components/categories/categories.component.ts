import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getAllCategories((data: any[]) => {
      this.categories = data;
    });
  }
}
