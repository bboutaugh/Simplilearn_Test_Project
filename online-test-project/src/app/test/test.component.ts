import { Component, OnInit } from '@angular/core';
import {TestService} from './app/test.service.ts';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit(): void {}

  loadTest(id: number)
  {
    
  }
}
