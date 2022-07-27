import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodemindComponent } from './codemind/codemind.component';
import { ChildComponent } from './child/child.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './customDirective/custom.directive';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NewoneComponent } from './newone/newone.component';
import { NewDirective } from './newDirective/new.directive';
import { HooksComponent } from './hooks/hooks.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { NewtemplateformComponent } from './newtemplateform/newtemplateform.component';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NewreactiveformComponent } from './newreactiveform/newreactiveform.component';
import { OnchangeComponent } from './onchange/onchange.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { SignupformComponent } from './signupform/signupform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './notification.service';
import { UtilityService } from './services/utility.service';
import {HttpClientModule} from '@angular/common/http';
import { UserdetailsComponent } from './apiReactive/userdetails/userdetails.component';
import { NewtestComponent } from './practice/newtest/newtest.component';
import { PostService } from './services/post.service';
import { PostcomponentComponent } from './postcomponent/postcomponent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GobackService } from './products/goback.service';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { DetailsPipe } from './pipes/details.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { LoginComponent } from './assignmentProject/login/login.component';
import { SignupComponent } from './assignmentProject/signup/signup.component';
import { ForgotpasswordComponent } from './assignmentProject/forgotpassword/forgotpassword.component';
import { ConfirmvalidatorDirective } from './assignmentProject/confirmvalidator.directive';
import { ProductsModule } from './products/products.module';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { ComponentModule } from './components/component.module';



@NgModule({
  declarations: [
    AppComponent, 
    CodemindComponent,
    ChildComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    NgforComponent,
    NgswitchComponent,
    NewoneComponent,
    NewDirective,
    HooksComponent,
    TemplateformComponent,
    NewtemplateformComponent,
    ReactiveformComponent,
    NewreactiveformComponent,
    OnchangeComponent,
    Reactiveform2Component,
    SignupformComponent,
    UserdetailsComponent,
    NewtestComponent,
    PostcomponentComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    DigitcountPipe,
    DetailsPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ChangedetectionComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ConfirmvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ProductsModule,
    ComponentModule
  ],
  providers: [NotificationService,UtilityService, PostService, GobackService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('AppModule constructor called')
  }
 }
