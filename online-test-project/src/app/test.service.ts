import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Test} from './test.model';
import {Question} from './question.model';
import { TestComponent } from './test/test.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http: HttpClient) {}
 
loadTest()
{
  return this.http.get<Test[]>("http://localhost:3000/test");
  //return this.http.get<Test[]>("./test_info/jscript_test.json");
}

  
}
