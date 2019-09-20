import { Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() {}

  @Input() display;
  
  ngOnInit() {
    this.display = true;
  }

  clickModal() {
    document.getElementById("modal").click();
  }

}
