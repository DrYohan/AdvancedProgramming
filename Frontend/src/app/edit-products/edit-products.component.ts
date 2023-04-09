import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { productsService } from '../services/product.service';
import { IProduct, Product } from '../services/models/product-model';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
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


  private productService: productsService
) {

}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(response => {
     this.productId= (response['id'])
     alert(this.productId)
      this.productService.getProductsById(this.productId).subscribe(response => {
        this.editForm.get(['productName'])?.patchValue(response.productName)
        this.editForm.get(['productDescription'])?.patchValue(response.productDescription)
        this.editForm.get(['price'])?.patchValue(response.price)
        this.editForm.get(['quantity'])?.patchValue(response.quantity)
        this.editForm.get(['id'])?.patchValue(response.id)




      })

  })

}

private createFromForm(): IProduct {
  return {

    ...new Product(),

    productName:this.editForm.get(['productName'])!.value,
    productDescription:this.editForm.get(['productDescription'])!.value,
    quantity:this.editForm.get(['quantity'])!.value,
    price:this.editForm.get(['price'])!.value,
    category:this.editForm.get(['category'])!.value,

   };
}

submit(){
const submit=this.createFromForm();
submit.id=this.productId
this.productService.create(submit).subscribe(res=>{

})
}


}
