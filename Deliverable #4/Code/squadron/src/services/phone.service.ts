import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  protected http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('User:Pass')
    })
  };

  public makeCall(): Observable<any> {
    const url = 'Ask Paul';
    const data = 'To=+Ask Paul0&From=+Ask Paul&Url=Ask Paul&ApplicationSid=Ask Paul';
    return this.http.post<any>(url, data, this.httpOptions);
  }

}
