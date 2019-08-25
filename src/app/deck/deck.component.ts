import { Component, OnInit, Input } from '@angular/core';
import { Page, Card } from '../interfaces';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {

  @Input() cards : Card[]
  @Input() currentPage : Page
  constructor() { }

  ngOnInit() {
  }

}
