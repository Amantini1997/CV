import { Component, HostListener, ɵɵresolveBody } from '@angular/core';
import { pages } from '../assets/pages/pages.json';

@Component({
  selector: 'app-root',
  template: `
    <app-header [currentPage]="currentPage" 
            [pages]="pages" 
            (changePage)="updateCurrentPage($event)"
            style="top: 0; position: sticky"></app-header>
    <topButton [currentPage]="currentPage"></topButton>
    <deck [cards]="currentPage.cards" [currentPage]="currentPage"></deck>
    <app-footer [currentPage]="currentPage"></app-footer>
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

  changeBodyColour(){
    let colour = this.currentPage.colour;
    let red = colour.substring(1,3);
    let green = colour.substring(3,5);
    let blue = colour.substring(5,7);
    document.body.style.background = `rgba(${red},${green},${blue},.1)`;
  }

  updateCurrentPage(event) : void {
    this.currentPage = event;
    this.changeBodyColour();
  }

  @HostListener ('scroll')
  hideBar(): void {
    // let header = document.getElementById("header");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // header.classList.add("sideHeader");
      document.getElementById("topButton").style.display = "visible";
    } else {
      // header.classList.remove("sideHeader");
    }
  }
}