import {Question} from './question.model';
export class Test 
{

   testID: number;
   testName: string;
   questions: Question[];

   constructor(data: any)
   {
       if(data)
       {
           this.testID = data.testID;
           this.testName = data.testName;
           this.questions = [];
           data.questions.forEach(q=>{
               this.questions.push(new Question(q));
           })
       }
   }
}
