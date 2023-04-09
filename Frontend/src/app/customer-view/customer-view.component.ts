import { Component } from '@angular/core';
import { registerService } from '../services/register.service';
import { IProduct } from '../services/models/product-model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
  customerDetails=null
  listProducts!:IProduct[];
  dataSource:any;
  constructor(

    private registerService:registerService,
    private router: Router,
    private matSnackBar:MatSnackBar

)
{


}
ngOnInit(): void {
  this.getData();

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
getData(){
  this.registerService.getCustomers().subscribe(res=>{
this.customerDetails=res

 //    modifiedDate:moment(block.modifiedDate).format('DD-MM-YYYY HH:mm'),
      this.listProducts=res
      this.listProducts

      console.log(this.listProducts)

  })
}
edit(id:any){
  console.log(id)
  this.router.navigate(['/customersEdit/' + id ]);

}
delete(id:any){
  this.registerService.delete(id).subscribe(res=>{
    location.reload();
    this.matSnackBar.open(
      "Customer Deleted", 'OK', {
      verticalPosition: 'top',
      duration: 4000,
      panelClass: ['warning']
    })
  })
}

}
