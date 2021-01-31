import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ArrayFromObjectKeyPipe } from './array-from-object-key.pipe';

@NgModule({
  declarations: [ArrayFromObjectKeyPipe],
  exports: [
    ArrayFromObjectKeyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
