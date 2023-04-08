import { Component } from '@angular/core';
import { IProduct, Product } from '../services/models/product-model';
import { productsService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  productId:any
  editForm = this.form.group({
    id: [],
    productDescription: [],
    productName: [],
    category: [],
    image1: [],
    image2: [],
    image3: [],
    price: [],
    quantity: []

});
constructor(

  private form: FormBuilder,
  protected activatedRoute: ActivatedRoute,

  private matSnackBar: MatSnackBar,
  private productService: productsService
) {

}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(response => {
     this.productId= (response['id'])
      this.productService.getProductsById(this.productId).subscribe(response => {
        this.editForm.get(['productName'])?.patchValue(response.productName)
        this.editForm.get(['productDescription'])?.patchValue(response.productDescription)
        this.editForm.get(['price'])?.patchValue(response.price)
        this.editForm.get(['quantity'])?.patchValue(response.quantity)




      })

  })

}

// updateForm(product: IProduct) {

//   this.editForm.patchValue({
//       id: product.id,
//       productDescription: product.productDescription,
//       productName: product.productName,
//       price: product.price,
//       image1: product.image1,
//       image2: product.image2,
//       image3: product.image3,
//       quantity: product.quantity
//   });

// }
private createFromForm(): IProduct {
  return {

    ...new Product(),
    id: this.editForm.get(['id'])!.value,
    productName:this.editForm.get(['productName'])!.value,
    productDescription:this.editForm.get(['productDescription'])!.value,
    quantity:this.editForm.get(['quantity'])!.value,
    price:this.editForm.get(['price'])!.value,
   };
}

submit(){
const submit=this.createFromForm();
this.productService.create(submit).subscribe(res=>{
  res
  this.matSnackBar.open(
    "Product Added", 'OK', {
    verticalPosition: 'top',
    duration: 4000,
    panelClass: ['warning']
  })
  if(res.id){
    location.reload();
  }

})
}
}
