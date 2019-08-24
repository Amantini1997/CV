import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class Header implements OnInit {

  @Input() pages;
  constructor() {}

  ngOnInit() {}

}
