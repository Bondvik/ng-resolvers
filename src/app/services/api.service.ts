import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://fakestoreapi.com/products';

  constructor(public http: HttpClient){}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

}
