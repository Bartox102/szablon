import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 @ViewChild("input") input?:ElementRef;
 @ViewChild("lista") lista?:ElementRef;
 constructor(private render: Renderer2){}
Dodaj(){
  let ElementList = this.render.createElement("li");
  this.render.addClass(ElementList, "list-group-item");
 let data = new Date().toLocaleString();
 ElementList.innerHTML = this.input?.nativeElement.value + "<br>" +"Dodano: " + data;
 
  this.render.appendChild(this.lista?.nativeElement, ElementList);
}
}
