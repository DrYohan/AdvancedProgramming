


export interface ICustomer {
 id?:string,
 email?:string,
 name?:string,
 dateOfBirth?:string,
 loanBalance?:Number,
 budget?:string
 usedAmount?:Number
 installmentPlan?:string
 password?:string
 installment?:string






  }

  export class Register implements ICustomer{
    constructor(

        public id?:string,

        public email?:string,
        public name?:string,
        public dateOfBirth?:string,
        public loanBalance?:Number,
        public budget?:string,
        public  usedAmount?:Number,
        public installmentPlan?:string,
        public password?:string,
        public installment?:string


    ) {}
  }
