import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { endpoint } from '../constants';
import { User, UserLogin, Product, Category, AppState } from '../interface';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getUserId } from '../reducers';

@Injectable({
    providedIn: 'root'
})


export class Service {
    userId: string = 'test';

    constructor(private http: HttpClient, private store: Store<AppState>) {
        this.userId = 'test'
        this.store.pipe(select(getUserId)).subscribe((userId: string) => {
            this.userId = userId;
        });
    }
    getProductList(): Observable<Product[]> {
        return (this.http.get<Product[]>(`${endpoint}product`));
    }
    getCategoryList(): Observable<Category[]> {
        return (this.http.get<Category[]>(`${endpoint}category`));
    }

    login(user: UserLogin): Observable<object> {
        return this.http.post(`${endpoint}login`, user);
    }
    registerUser(user: User) {
        return this.http.post(`${endpoint}addUser`, user);
    }
    getCart(userId: any): Observable<object> {
        return this.http.get(`${endpoint}cart/${userId.userId}`);
    }
    addToCart(payload: any): Observable<object> {
        try {
            return this.http.post(`${endpoint}cart/add`,
{              ...payload
}            );
        }
        catch (e) {
            console.log(e)
        }

    }
}
