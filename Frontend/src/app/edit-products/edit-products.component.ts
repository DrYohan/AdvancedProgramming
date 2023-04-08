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
      this.productService.getProductsById(this.productId).subscribe(response => {
        this.editForm.get(['productName'])?.patchValue(response.productName)
        this.editForm.get(['productDescription'])?.patchValue(response.productDescription)
        this.editForm.get(['price'])?.patchValue(response.price)
        this.editForm.get(['quantity'])?.patchValue(response.quantity)




      })

  })

}

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
this.productService.updateProduct(submit,this.productId).subscribe(res=>{

})
}


}
