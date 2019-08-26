import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Page } from '../interfaces';

@Component({
  selector: 'topButton',
  template: `
    <button id="top-button" 
            [ngStyle]="{'color': currentPage.colour}" 
            (click)="scrollToTop()">
      &#8679;
    </button>
  `,
  styleUrls: ['./top-button.component.sass']
})
export class TopButtonComponent implements OnInit {

  @Input() currentPage: Page
  constructor() { }

  ngOnInit() {}

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
