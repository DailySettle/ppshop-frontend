import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../translation/language.enum';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserDialogComponent} from '../../user/dialog/user-dialog/user-dialog.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectAuth} from '../../user/store/selectors/user.selectors';
import {logout} from 'src/app/user/store/actions/user.actions';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang: Language;
  Language = Language;
  auth$: Observable<boolean>;

  constructor(private translate: TranslateService,
              public dialog: MatDialog,
              private store: Store) {
    this.auth$ = this.store.select(selectAuth);
  }

  ngOnInit(): void {
  }

  setLang(lang: Language): void {
    this.lang = lang;
    this.translate.use(lang.toLowerCase());
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(UserDialogComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
