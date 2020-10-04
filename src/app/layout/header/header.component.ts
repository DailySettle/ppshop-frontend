import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = 'CN';

  constructor() {
  }

  ngOnInit(): void {
  }

  setLang(lang: string): void {
    this.lang = lang;
  }
}
