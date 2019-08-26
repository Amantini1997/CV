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
          <article id="article{{id}}" class="content">
            {{renderTextOf('article' + id)}}
          </article>
      </div>
    </div>
`,
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() colour: number
  @Input() card: Card
  @Input() id: number
  constructor() {}

  ngOnInit() {}

  renderTextOf(id: string) : void {
    document.getElementById(id).innerHTML = this.card.content.join("\n");
  }

  ngAfterContentInit(): void {
  }

}
