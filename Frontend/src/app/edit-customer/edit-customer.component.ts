import { Component } from '@angular/core';
import { ICustomer, Register } from '../services/models/register-model';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { registerService } from '../services/register.service';
import * as moment from 'moment';
// import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  id:any;
  editForm = this.formBuilder.group({
      id: [''],
      email:[''],
      name:[''],
      dateOfBirth:[''],
      loanBalance:[''],
      budget:[''],
      usedAmount:['0'],







  });




constructor(
  private formBuilder: FormBuilder,
  private router:Router,
  private registerSer:registerService,
  protected activatedRoute: ActivatedRoute,

) { }

ngOnInit() {
  this.activatedRoute.params.subscribe(res => { res['id']
  this.id=res['id']
  this.registerSer.getById(res['id']).subscribe(res=>{
      this.updateForm(res)
      this.editForm.get(['dateOfBirth'])?.value
  })
})
const date= this.editForm.get(['usedAmount'])?.patchValue('0')


}
 updateForm(product: ICustomer) {

  this.editForm.patchValue({
      id: product.id,
      email: product.email,
      name: product.name,
      dateOfBirth: product.dateOfBirth,

      budget: product.budget,

  });

}

private createFromForm(): ICustomer {
  return {

    ...new Register(),

    name:this.editForm.get(['name'])!.value,
    budget:this.editForm.get(['budget'])!.value,

   };
}

updateCustomers(){
  const subimit=this.createFromForm();
    this.registerSer.updateCustomers(subimit,this.id).subscribe(res=>{
this.router.navigateByUrl('/customers')
    })
}
delete(){
  this.registerSer.delete(this.id).subscribe(res=>{
    location.reload();

  })
}
}
