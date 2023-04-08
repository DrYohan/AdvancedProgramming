import { Component } from '@angular/core';
import { productsService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  productDetails=null
  constructor(private productService:productsService,
    private userServive:UserService,
    private router:Router,
    private matSnackBar: MatSnackBar,

)
{


}


ngOnInit(): void
{
    this.getData();
}

  getData(){
    this.productService.getProducts().subscribe(res=>{
      this.productDetails=res

})
}
deleteProduct(id:any){
  this.productService.delete(id).subscribe(res=>{

    this.matSnackBar.open(
      "Deleted Successfully", 'OK', {
      verticalPosition: 'top',
      duration: 4000,
      panelClass: ['warning']
    })
  })
}
editProdusts(id:any){
  this.router.navigate(['/product/'+id ]);

}

}
