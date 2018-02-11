import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Merchant} from './merchant';

@Injectable()
export class NessieService {
  constructor(private http: HttpClient) {}

  API_KEY = 'c7365f154839750fee89fcdd74fc248b';

  getAllAccounts(): Observable<Account[]> {
    const url = 'http://api.reimaginebanking.com/accounts';
    // const url = '/api/accounts';
    const params = new HttpParams().set('key', this.API_KEY);

    return this.http.get<Account[]>(url, {params: params});
  }

  getAllMerchants(): Observable<Merchant[]> {
    const url = 'http://api.reimaginebanking.com/merchants?lat=34.98&lng=-79.48&rad=70';
    const params = new HttpParams().set('key', this.API_KEY);
    return this.http.get<Merchant[]>(url, {params: params});
  }

  makePayment(): Observable<any>{
    const url = 'http://api.reimaginebanking.com/accounts/5a7f86c05eaa612c093b0e64/purchases';
    const params = new HttpParams().set('key', this.API_KEY);
    return this.http.get<any>(url, {params: params});
  }
}
