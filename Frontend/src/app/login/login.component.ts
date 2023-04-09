import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
roles:any;
loginForm:any

  constructor(

    private _formBuilder: FormBuilder,
    private userService:UserService,
    private matSnackBar: MatSnackBar,
    // private storageService: StorageService,

    private userAuthService:UserAuthService,
    private router:Router
){}
ngOnInit(): void
{

    this.loginForm = this._formBuilder.group({
        email   : ['', [Validators.required]],
        password: ['', Validators.required]
    });

}


login(){

     const user=this.loginForm.get(['email']).value
     const password=this.loginForm.get(['password']).value
     this.userService.login(user,password).subscribe(res=>{

      console.log(res)

      this.userAuthService.setRoles(res.roles[0])
      this.userAuthService.setToken(res.accessToken)
      const role=res.roles[0]
      if(role==='ROLE_ADMIN'){
          this.router.navigate(['/dashboard' ]);
          this.matSnackBar.open(
            "Login Succesful", 'OK', {
            verticalPosition: 'top',
            duration: 4000,
            panelClass: ['warning']
          })

      }
      else{
        this.matSnackBar.open(
          "Login Failed", 'OK', {

          duration: 4000,
      
        })
      }


     })
  }
}
