import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div id="header" [ngStyle]="{'background-color': currentPage.colour}">
      <div class="page" *ngFor="let page of pages" (click)="selectPage(page)">{{page.name}}</div>
    </div> 
  `,
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() pages : JSON[];
  @Input() currentPage : JSON;
  @Output() changePage = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  
  selectPage(page : JSON) : void {
    this.changePage.emit(page);
  }
}
