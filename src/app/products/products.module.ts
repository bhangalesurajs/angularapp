import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,
    ProductsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
 
})
export class ProductsModule {
  constructor(){
    console.log('ProductsModule constructor called')
  }
 }
