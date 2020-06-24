import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer [ngStyle]="{'background-color': currentPageColor}">
        <div><b>Phone:</b> +44 7919824459</div>
        <div><b>Email:</b> ale.amantini1997@gmail.com</div>
        <div><b>Github: </b><a href='https://github.com/Amantini1997' style="color: lightgrey;">Amantini1997</a></div>
        <div><b>Location:</b> Newcombe Road, CV5 6NL, Coventry, UK</div>
        <hr class="full-row"/>
        <div class="full-row">Last update 2020</div>
    </footer> 
  `,
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  @Input() currentPageColor: string;
  constructor() { }

  ngOnInit() {}

}
