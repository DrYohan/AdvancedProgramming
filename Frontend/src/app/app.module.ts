import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Auth/auth.guard';
import { AuthInterceptor } from './Auth/auth.intercepter';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [

  {path: 'dashboard',
  component: DashboardComponent,} ,
  {path: 'customers',
  component: CustomerViewComponent,},
  {path: 'customersEdit/:id',
  component: EditCustomerComponent,},
  {path: 'product',
  component: ProductTableComponent,},
  {path: 'product/:id',
  component: EditProductsComponent,},
  {path: 'addProducts',
  component: AddProductsComponent,},
  {path: 'customerRegistration',
  component: CustomerRegistrationComponent,},







];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerViewComponent,
    EditCustomerComponent,
    ProductTableComponent,
    EditProductsComponent,
    AddProductsComponent,
    CustomerRegistrationComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot([

       // {path: 'crisis-list', component: CrisisListComponent},
       // {path: 'heroes-list', component: HeroesListComponent},
       // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
       {path: '**', component: LoginComponent}  //first page
     ]),

    AppRoutingModule,

  ],

  providers: [AuthGuard,
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },
UserService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
