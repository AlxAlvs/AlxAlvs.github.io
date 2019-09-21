import { Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() {}

  images:any [] = ['assets/images/exemplo1.png'];

  currentImage: number;

  @Input() display;
  
  ngOnInit() {
    this.display = true;
    this.loadImage(0);
  }

  clickModal() {
    document.getElementById("modal").click();
  }

  loadImage(index:number){
    for(var i=0; i< this.images.length; i++) {
      if(i == index){
        var img = new Image();
        img.src = this.images[i];
        img.style.width = "100%";
        img.style.height = "100%";
        document.getElementById('imageDiv').appendChild(img);
        this.currentImage = i;
      } 
    }
  }
}
