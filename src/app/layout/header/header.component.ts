import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../translation/language.enum';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../../user/dialog/user-dialog/user-dialog.component';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang: Language;
  Language = Language;

  constructor(private translate: TranslateService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  setLang(lang: Language): void {
    this.lang = lang;
    this.translate.use(lang.toLowerCase());
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent,
      {
        width: '500px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
