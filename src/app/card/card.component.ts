import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces';

@Component({
  selector: 'card',
  template: `
    <div class="card" [ngStyle]="{'border-color': colour}">
      <img class="card-icon" [src]="card.source"/>
      <div class="cardText"> 
          <div class="card-title">{{card.title}}</div>
          <hr [ngStyle]="{'border-color': colour}"/>
          <!-- <div class="preview">
              {{preview}}
          </div> -->
          <article class="content">
              {{card.content.join("\n")}}
          </article>
      </div>
    </div>
`,
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() colour: number
  @Input() card: Card
  constructor() {}

  ngOnInit() {}

}
