import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../interfaces';

@Component({
  selector: 'app-footer',
  template: `
    <div id="footer" [ngStyle]="{'background-color': currentPage.colour}">
      <div class="footer-row">
        <span><b>Phone:</b> +44 7919824459</span>
        <span><b>Email:</b> ale.amantini1997@gmail.com</span>
      </div>
      <div class="footer-row">
        <span><b>Github: </b><a href='https://github.com/Amantini1997' style="color: lightgrey;">Amantini1997</a></span>
        <span><b>Location:</b> Newcombe Road, CV5 6NL, Coventry, UK</span>
      </div>
      <div class="footer-row">
        <span>Amantini Alessandro's CV</span>
        <span>Last update 2019</span>
      </div>
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
