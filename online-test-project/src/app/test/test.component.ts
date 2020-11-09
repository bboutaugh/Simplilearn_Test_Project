import { Component, OnInit } from '@angular/core';
import { Test } from '../test.model';
import {TestService} from '../test.service';
import {Question} from '../question.model';
import {Option} from '../option.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[TestService]
})

export class TestComponent implements OnInit 
{

  constructor(private testService: TestService){}
  
  testString="my test";
  test: Test[];
 
  
    ngOnInit(): void 
    {  
      this.loadTestInfo();
    }

    loadTestInfo(): void
    {
      this.testService.loadTest().subscribe(data=>this.test=data);
      console.log("this.test.testID");
    }

    currentQuestion(index:number): Question
    {
      
      return this.test[0].questions[index];
      
    }

   
}

