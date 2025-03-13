import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts(callback: (data: { products: any[] }) => void): void {
    this.http.get<{ products: any[] }>(this.apiUrl).subscribe(callback);
  }

  getProductById(id: number, callback: (data: any) => void): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(callback);
  }
}
