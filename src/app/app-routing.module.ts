import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './assignmentProject/signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { ProductsComponent } from './products/products.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { LoginComponent } from './assignmentProject/login/login.component';
import { ForgotpasswordComponent } from './assignmentProject/forgotpassword/forgotpassword.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component1Component } from './components/component1/component1.component';


const routes: Routes = [
  // {path: '', redirectTo: 'aboutus', pathMatch: 'full'},
  // {path: 'aboutus', component: AboutusComponent},
  // {path: 'contactus', component: ContactusComponent},
  // {path: 'products', children:[
  //   {path: '', component: ProductsComponent},
  //   {path: 'laptop', component:LaptopComponent},
  //   {path: 'tablet', component: TabletComponent},
  //   {path: 'tv', component: TvComponent},
  //   {path: 'washingmachine', component: WashingmachineComponent}
  // ]}
  // {path: '**', component: PagenotfoundComponent}

  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'signup', component: SignupComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'forgotpassword', component: ForgotpasswordComponent}

  {path: '', redirectTo: 'component1', pathMatch: 'full'},
  {path: 'component1', component: Component1Component},
  {path: 'component2', children: [
    {path: '', component: Component2Component},
    {path: 'component3', component: Component3Component},
    {path: 'component4', component: Component4Component}
  ]} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
