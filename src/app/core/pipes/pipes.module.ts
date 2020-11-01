import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortStrPipe } from './short-str.pipe';
import { CustomDatePipe } from './custom-date.pipe';
import { IndexCharPipe } from './index-char.pipe';



@NgModule({
  declarations: [ShortStrPipe, CustomDatePipe, IndexCharPipe],
  imports: [
    CommonModule
  ],
    exports: [
        ShortStrPipe,
        CustomDatePipe,
        IndexCharPipe
    ]
})
export class PipesModule { }
