import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})


export class TestService {

  constructor(private http: HttpClient) { }
 
  get(url:string)
  {
    return this.http.get(url);
  }

  
}
