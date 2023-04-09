import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { IProduct } from './models/product-model';
import { ICustomer } from './models/register-model';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' },)
};

@Injectable({
    providedIn: 'root'
})

export class registerService {


    constructor(private httpclient: HttpClient,
        private userAuthService: UserAuthService) { }


public getCustomers():Observable<any>{
    return this.httpclient.get('http://localhost:8080/api/customers/getCustomers',httpOptions)
}
public getById(id:any):Observable<any>{
    return this.httpclient.get(`http://localhost:8080/api/customers/getCustomers/${id}`)
}
public create(tenant: ICustomer): Observable<any> {
    return this.httpclient.post<ICustomer>('http://localhost:8080/api/customers/addCustomer', tenant, { observe: 'response' });
  }
 public delete(id: string): Observable<HttpResponse<any>> {
    return this.httpclient.delete<any>(`http://localhost:8080/api/customers/deleteCustomers/${id}`, { observe: 'response' });
  }
  updateCustomers(product: ICustomer, id: number): Observable<any> {
    const url = `${'http://localhost:8080/api/customers/updateCustomers/'}${id}`;
    return this.httpclient.put(url, product);
  }


}
