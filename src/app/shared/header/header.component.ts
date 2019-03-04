import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  selected: string;
    states: string[] = [
    'mobiles',
    'laptop',
    'washing machine',
    'refrigerators',
    'shoes',
    'sarees',
    'furniture'
  ];

  constructor() { }

  ngOnInit() {
  }

}
