import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'topButton',
  template: `
    <a href="header" id="top-button" [ngStyle]="{'color': currentPage.colour}">&#8679;</a>
  `,
  styleUrls: ['./top-button.component.sass']
})
export class TopButtonComponent implements OnInit {

  @Input() currentPage: JSON
  constructor() { }

  ngOnInit() {
    document.getElementById("top-button").scrollIntoView({behavior: "smooth", inline: "start"});
  }

}
