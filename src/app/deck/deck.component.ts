import { Component, OnInit, Input } from '@angular/core';
import { Page, Card } from '../interfaces';

@Component({
  selector: 'deck',
  template: `
    <div id="deck" [class]="classify(currentPage.name)">
      <card *ngFor="let card of cards; let id = index" 
          [color]="currentPage.color" 
          [card]="card"   
          [id]="id"></card>
    </div>
  `,
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {

  @Input() cards : Card[]
  @Input() currentPage : Page
  constructor() { }

  ngOnInit() {
  }

  classify(name: string) : string {
    return name.toLowerCase().replace(/\s/, "-");
  }

}
