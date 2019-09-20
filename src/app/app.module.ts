import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule,
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
