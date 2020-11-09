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
  
  index:any=0;
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

    currentQuestion(): Question
    {
      
      return this.test[0].questions[this.index];
      
    }

    nextQuestion():void
    {
      if(this.index < 10)
      {
        this.index += 1;
      }
    }

    prevQuestion():void
    {
      if(this.index > 0)
      {
        this.index -= 1;
      }
    }

   
}

