import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { endpoint } from '../constants';
import { User, UserLogin } from '../interface';

@Injectable({
    providedIn: 'root'
})


export class Service {
    constructor(private http: HttpClient) { }
    getProductList() {
       return  (this.http.get<any>(endpoint+'product'))
    }
    getCategoryList () {
        return  (this.http.get<any>(endpoint+'category'))
    }

    login (user: UserLogin) {
        return this.http.post(`${endpoint}login`, user);
    }
    registerUser (user: User) {
        return this.http.post(`${endpoint}addUser`, user);
    }

}
