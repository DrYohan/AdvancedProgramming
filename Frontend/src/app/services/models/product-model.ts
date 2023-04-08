

export interface IProduct {
 id?:string

 productName?:string,
 image1?:string,
 image2?:string,
 image3?:string,
 price?:Number,
 productDescription?:string,
 quantity?:Number,
 category?:string





  }

  export class Product implements IProduct{
    constructor(

        public id?:string,

        public productName?:string,
       public image1?:string,
       public image2?:string,
       public image3?:string,
       public price?:Number,
       public productDescription?:string,
       public quantity?:Number,
       public category?:string

    ) {}
  }
