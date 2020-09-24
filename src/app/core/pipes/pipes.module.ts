import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortStrPipe } from './short-str.pipe';



@NgModule({
  declarations: [ShortStrPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShortStrPipe
  ]
})
export class PipesModule { }
