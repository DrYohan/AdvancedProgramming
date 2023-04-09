import { Component, OnInit } from '@angular/core';
import { productsService } from '../services/product.service';
import { registerService } from '../services/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProducts:any
  totalCustomers:any
  constructor(private productService:productsService,
    private registerService:registerService


)
{


}
  ngOnInit(): void {
this.getData();
this.getDataCustomers();
  }
  getData(){
    this.productService.getProducts().subscribe(res=>{
this.totalProducts=res.length
   console.log(res.length)

})
}

getDataCustomers(){
  this.registerService.getCustomers().subscribe(res=>{
this.totalCustomers=res.length

 //    modifiedDate:moment(block.modifiedDate).format('DD-MM-YYYY HH:mm'),




  })
}

}
