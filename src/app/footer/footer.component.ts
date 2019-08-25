import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../interfaces';

@Component({
  selector: 'app-footer',
  template: `
    <div id="footer" [ngStyle]="{'background-color': currentPage.colour}">
      <span>Amantini Alessandro's CV</span>
      <span>Last update 2019</span>
    </div> 
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input() currentPage: Page;
  constructor() { }

  ngOnInit() {
  }

}
