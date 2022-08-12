import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.scss']
})
export class CoffeComponent implements OnInit {
  @Input() title = ''

  constructor() { }

  ngOnInit(): void {
  }

}
