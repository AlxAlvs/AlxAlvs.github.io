import { Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() {}

  images:any [] = ['assets/images/exemplo1.png','assets/images/exemplo2.png','assets/images/exemplo3.png'];

  currentImage: any;

  @Input() display;
  
  ngOnInit() {
    this.display = true;
    this.loadImage(0);
  }

  clickModal() {
    document.getElementById("modal").click();
  }

  loadImage(index:any){
    for(var i=0; i< this.images.length; i++) {
      if(i == index && this.currentImage != i){
        var img = new Image();
        img.src = this.images[i];
        img.style.width = "100%";
        img.style.height = "100%";
        var list = document.getElementById('imageDiv');
        if (list.hasChildNodes()) {
          list.replaceChild(img,list.childNodes[0]);
          var element = document.getElementById(this.currentImage);
          element.classList.remove("active");  
        }else{
          list.appendChild(img);
        }                    
        this.currentImage = i;
        var element = document.getElementById(index);
        element.classList.add("active");

        switch(index){         
          case 0: document.getElementById('myUniqueLinkId').setAttribute("href", "#");
                  document.getElementById('description').setAttribute('data-content', "");
          break
          case 1: document.getElementById('myUniqueLinkId').setAttribute("href", "#");
                  document.getElementById('description').setAttribute('data-content', "");
          break
          case 2: document.getElementById('myUniqueLinkId').setAttribute("href", "http://meuprimeiroprojeto.ga"); 
                  document.getElementById('description').setAttribute('data-content', "Meu primeiro projeto (apenas para ilustrar evolução).");     
          break
          default:
          break
        }    
      } 
    }
  }
}
