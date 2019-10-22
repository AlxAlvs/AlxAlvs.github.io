import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'estudoAngular'; 
  callModal = true;
  english:boolean = false;

  @ViewChild(ModalComponent, {static: false}) child;
  
  ngOnInit(): void {
    this.english = false;
  }

  openModal(){
    this.callModal = false;
    this.child.clickModal(this.english);
  }

  changeLanguage(){
    if(this.english){
      this.english = false;
    }else{
      this.english = true;
    }   
  }
}
