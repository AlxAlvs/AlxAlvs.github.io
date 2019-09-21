import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [ModalComponent],
})
export class ModalModule { }
