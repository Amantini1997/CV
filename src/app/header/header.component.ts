import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../interfaces';

@Component({
  selector: 'app-header',
  template: `
    <header [ngStyle]="{'background-color': currentPage.color}">
      <span id="title">{{currentPage.name}}</span>
      <button class="nav-toggle" type="checkbox">	&#9776;</button>
      <nav class="topnav" [ngStyle]="{'background-color': currentPage.color}">
        <ng-container *ngFor="let page of pages">
          <input type="radio" 
                [id]="page.name"
                (click)="selectPage(page)"
                [name]="page">
          <label class="page-link" [for]="page.name">{{page.name}}</label>
        </ng-container>
      </nav> 
    </header>
  `,
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() pages : Page[];
  @Input() currentPage : Page;
  @Output() changePage = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  
  selectPage(page : Page) : void {
    this.changePage.emit(page);
  }
}
