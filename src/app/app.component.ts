import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <Header (currentPage)="currentPage"></Header>
    
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Alessandro Amantini\' CV';
  readonly  pages = {
    home: {
      name: "Home",
      colour: "blue"
    },
    education: {
      name: "Education",
      colour: "darkGreen"
    },
    work: {
      name: "Work",
      colour: "black"
    },
    tools: {
      name: "IT Tools",
      colour: "maroon"
    }
  };
  readonly HOME_PAGE = "home"; 
  currentPage = this.pages.[this.HOME_PAGE];

  @Output() changePage: string;
  constructor() {}
}
