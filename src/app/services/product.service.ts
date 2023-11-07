import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get('https://testologia.site/tea')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  }

  sendOrder(data: any) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data)
  }
}

