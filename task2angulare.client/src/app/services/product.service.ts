import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts(callback: (data: any) => void): void {
    this.http.get<any>(this.apiUrl).subscribe(response => callback(response.products));
  }

  getProductById(id: number, callback: (data: any) => void): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(callback);
  }

  getAllCategories(callback: (categories: any) => void): void {
    this.http.get<any>(this.apiUrl).subscribe(response => {
      const categories = [...new Set(response.products.map((product: any) => product.category))];
      callback(categories);
    });
  }

  getProductsByCategory(category: string, callback: (data: any) => void): void {
    this.http.get<any>(`${this.apiUrl}/category/${category}`).subscribe(response => {
      callback(response.products);
    });
  }
}
