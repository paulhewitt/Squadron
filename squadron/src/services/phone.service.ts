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
      Authorization: 'Basic ' + btoa('userName:Password')
    })
  };

  public makeCall(): Observable<any> {
    const url = 'endPointURL';
    const data = 'To=ToNum&From=FromNum&Url=EndPoint&ApplicationSid=AccountSID';
    return this.http.post<any>(url, data, this.httpOptions);
  }

}
