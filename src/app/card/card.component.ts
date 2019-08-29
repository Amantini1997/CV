import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces';

@Component({
  selector: 'card',
  template: `
  <button class="card" [ngStyle]="styleObject()">
    <img class="card-icon" [src]="card.source"/>
    <div class="cardText"> 
        <div class="card-title">{{card.title}}</div>
        <div class="line" [ngStyle]="{'border-color': colour}"></div>
        <!-- <div class="preview">
            {{preview}}
        </div> -->
        <article id="article{{id}}" class="content">
          {{renderTextOf('article' + id)}}
        </article>
    </div>
  </button>
`,
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  readonly ANIMATION_FACTOR = 0.6;
  readonly TIME_MEASURE = 's';

  @Input() colour: number
  @Input() card: Card
  @Input() id: number
  constructor() {}

  styleObject(): Object {
    return {
      borderColor: this.colour,
      animationDelay: this.id * this.ANIMATION_FACTOR + this.TIME_MEASURE,
      animationDuration: this.ANIMATION_FACTOR + this.TIME_MEASURE,
    };
  }

  ngOnInit() {}

  renderTextOf(id: string) : void {
    document.getElementById(id).innerHTML = this.card.content.join("\n");
  }

  ngAfterContentInit(): void {
  }

}
