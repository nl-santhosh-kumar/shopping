import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import { endpoint } from '../constants';

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

}
