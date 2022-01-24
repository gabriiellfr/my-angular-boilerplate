import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules: any = [CommonModule, FormsModule, ReactiveFormsModule];
const components: any = [];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {
  constructor() {}

  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
