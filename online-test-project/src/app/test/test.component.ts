import { Component, OnInit } from '@angular/core';
import { Test } from '../test.model';
import {TestService} from '../test.service';
import {Question} from '../question.model';
import {Option} from '../option.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  userAns = new Array(10).fill("x");
  correctCount: number = 0;
  result:string = "See your result here after hitting submit.";
 
  
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

    logAnswer(quesID: number, optID:CharacterData):any
    {
      this.userAns[quesID-1] = optID;
      console.log(this.userAns);
    }

    processResults():void
    {
      var i:number;
      for(i=0; i<10; i++)
      {
        if(this.userAns[i] == this.test[0].questions[i].answer)
        {
          this.correctCount++;
        }
      }
      this.result = this.correctCount + " out of 10 are correct";
      this.correctCount=0;
    }
   
}

