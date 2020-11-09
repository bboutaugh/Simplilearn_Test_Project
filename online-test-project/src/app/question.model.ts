import {Option} from './option.model';
export class Question 
{
    questionID: number;
    question: string;
    answer: string;
    options: Option[];

    constructor(data:any)
        {
        this.questionID = data.questionID;
        this.question = data.question;
        this.answer = data.answer;
        this.options = [];
        data.options.forEach(opt =>{
            this.options.push(new Option(opt));
        })
        }
    
}
