import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortStrPipe } from './short-str.pipe';
import { CustomDatePipe } from './custom-date.pipe';



@NgModule({
  declarations: [ShortStrPipe, CustomDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortStrPipe,
    CustomDatePipe
  ]
})
export class PipesModule { }
