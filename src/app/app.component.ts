import { Component } from '@angular/core';
import { pages } from '../assets/pages/pages.json';
import { Page } from './interfaces.js';

@Component({
  selector: 'app-root',
  template: `
    <div id="page-wrapper">
      <app-header [currentPage]="currentPage" 
              [pages]="pages" 
              (changePage)="updateCurrentPage($event)"></app-header>
      <deck [cards]="currentPage.cards" 
            [currentPage]="currentPage" 
            [ngStyle]="{'background-image': currentPage.background}"></deck>
      <app-footer [currentPageColor]="currentPage.color"></app-footer>
    </div>
    <topButton [currentPageColor]="currentPage.color"></topButton>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  readonly HOME_PAGE = 0; 
  currentPage = pages[this.HOME_PAGE];
  pages = pages;

  constructor() {
    this.changeBodyColor();
  }

  changeBodyColor(): void {
    let color = this.currentPage.color;
    let red = parseInt(color.substring(1,3), 16);
    let green = parseInt(color.substring(3,5), 16);
    let blue = parseInt(color.substring(5,7), 16);
    document.body.style.cssText = `background: rgba(${red},${green},${blue},.2);`;
                                  //  ::-webkit-scrollbar-thumb{background: rgb(78, 78, 78)}`;
  }

  updateCurrentPage(event : Page) : void {
    this.currentPage = event;
    this.changeBodyColor();
  }
}