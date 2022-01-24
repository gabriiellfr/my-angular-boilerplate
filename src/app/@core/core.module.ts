import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import {
  NotFoundComponent,
  FooterComponent,
  HeaderComponent,
} from './components';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HttpClientModule, MainLayoutComponent],
  providers: [],
})
export class CoreModule {}
