import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeComponent } from './coffe.component';



@NgModule({
  declarations: [CoffeComponent],
  imports: [
    CommonModule
  ],
  exports: [CoffeComponent],
})
export class CoffeModule { }
