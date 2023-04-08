import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IRegister, Register } from '../services/models/register-model';
import { registerService } from '../services/register.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  registerForm: any;
  constructor(

    private form: FormBuilder,
    private matSnackBar: MatSnackBar,
    private registerService:registerService
    // private storageService: StorageService,
  ){}

  ngOnInit(): void
  {
      this.registerForm = this.form.group({
          name           : ['', Validators.required],
          email          : ['', [Validators.required, ]],
          password       : ['', Validators.required],
          passwordConfirm: ['', [Validators.required, ]],
          budget:['',],
          dateOfBirth:[]

      });


  }
  private register(): IRegister {
    return {

      ...new Register(),

     email: this.registerForm.get(['email']).value,
     name:this.registerForm.get(['name']).value,
     dateOfBirth:this.registerForm.get(['dateOfBirth']).value,
    password:this.registerForm.get(['password']).value,
     budget:this.registerForm.get(['budget']).value,

     };
  }

  submit(){
    const submit=this.register();
    this.registerService.create(submit).subscribe(res=>{

    })
    this.matSnackBar.open(
      "Registration Succesful", 'OK', {
      verticalPosition: 'top',
      duration: 4000,
      panelClass: ['warning']
    })
  }

}
