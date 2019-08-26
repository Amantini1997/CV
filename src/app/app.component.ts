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
    </div>
    <app-footer [currentPage]="currentPage"></app-footer>
    <!-- <topButton [currentPage]="currentPage"></topButton> -->
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  readonly HOME_PAGE = 0; 
  currentPage = pages[this.HOME_PAGE];
  pages = pages;

  constructor() {
    this.changeBodyColour();
  }

  changeBodyColour(): void {
    let colour = this.currentPage.colour;
    let red = colour.substring(1,3);
    let green = colour.substring(3,5);
    let blue = colour.substring(5,7);
    document.body.style.cssText = `background: rgba(${red},${green},${blue},.1);`;
                                  //  ::-webkit-scrollbar-thumb{background: rgb(78, 78, 78)}`;
  }

  updateCurrentPage(event : Page) : void {
    this.currentPage = event;
    this.changeBodyColour();
  }
}