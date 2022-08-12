import { Component, Input, OnInit } from '@angular/core';
const api = 'http://localhost:3000/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private urlOriginal: string = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${api}/imgs/${url}`;
    }
  }
  @Input() description = '';

  get url(): string {
    return this.urlOriginal;
  }
  constructor() {}

  ngOnInit(): void {}
}
