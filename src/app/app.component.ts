import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'estudoAngular'; 
  callModal = true;

  @ViewChild(ModalComponent, {static: false}) child;
  
  openModal(){
    this.callModal = false;
    this.child.clickModal();
  }

}
