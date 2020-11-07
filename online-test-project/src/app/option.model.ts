
export class Option 
{

    optionID: number;
    questionID: number;
    optionDesc: string;

    constructor(data:any)
    {
        if(data)
        {
          this.optionID = data.optionID;
          this.questionID = data.questionID;
          this.optionDesc = data.optionDesc;
        }
    }
}
