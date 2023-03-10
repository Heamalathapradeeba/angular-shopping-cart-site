import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

getProductData(): Observable<product[]>{
     return this.http.get<product[]>('./assets/sampledata.json', {responseType: 'json'});
}


}
