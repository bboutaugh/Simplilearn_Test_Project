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
export class TestComponent implements OnInit {
  //test: Test = new Test(null);
  //page = {index:0, amount:0, count:0};
  //constructor(private testService: TestService) { }

  ngOnInit(): void 
  {
    /*this.testService.get('./jscript.json').subscribe(res=>
      {
      this.test = new Test(res);
      });
  }

  get questions()
  {
    return(this.test.questions)
  }*/
}
}

