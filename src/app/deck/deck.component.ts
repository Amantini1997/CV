import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.sass']
})
export class DeckComponent implements OnInit {

  @Input() cards : JSON[]
  @Input() currentPage : JSON
  constructor() { }

  ngOnInit() {
  }

}
