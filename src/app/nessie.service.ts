import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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
}
