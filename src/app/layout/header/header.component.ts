import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang = 'CN';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  setLang(lang: string): void {
    this.lang = lang;
    this.translate.use(lang);
  }
}
