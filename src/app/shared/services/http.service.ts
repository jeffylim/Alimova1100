import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly URL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<any> {
    return this.http.get(this.URL).toPromise();
  }

  postProduct(data: IProduct): Promise<object> {
    return this.http.post(this.URL, data).toPromise();
  }

  updateProduct(data: IProduct): Promise<object> {
    return this.http.put(`${this.URL}/${data.id}`, data).toPromise();
  }

  deleteProduct(id: number): Promise<object> {
    return this.http.delete(`${this.URL}/${id}`).toPromise();
  }
}
