import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'topButton',
  template: `
    <button id="top-button" 
            [ngStyle]="{ 'color': currentPageColor}" 
            [ngClass]="{'visible' : displayButton}" 
            (click)="scrollToTop()"
            (scroll)="setDisplayButton()" >
      &#8679;
    </button>
  `,
  styleUrls: ['./top-button.component.sass']
})
export class TopButtonComponent implements OnInit {
  readonly SCROLL_THRESHOLD = 300; // px
  displayButton: boolean = false;

  @Input() currentPageColor: string
  constructor() {
    
  }

  ngOnInit() {

  }

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  @HostListener('window:scroll')
  setDisplayButton(): void {
    this.displayButton = window.pageYOffset > this.SCROLL_THRESHOLD;
  }
}
