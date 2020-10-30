import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { endpoint } from '../constants';
import { User, UserLogin, Product, Category } from '../interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class Service {
    constructor(private http: HttpClient) { }
    getProductList(): Observable<Product[]> {
       return  (this.http.get<Product[]>(`${endpoint}product`));
    }
    getCategoryList(): Observable<Category[]> {
        return  (this.http.get<Category[]>(`${endpoint}category`));
    }

    login(user: UserLogin): Observable<object> {
        return this.http.post(`${endpoint}login`, user);
    }
    registerUser(user: User): Observable<object> {
        return this.http.post(`${endpoint}addUser`, user);
    }
  

}
