import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../user';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  constructor() {}
  @Input() User: Iuser | undefined;
  ngOnInit() {}
}
