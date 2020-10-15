import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user.model';
import {Store} from '@ngrx/store';
import {login} from '../../store/actions/user.actions';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private builder: FormBuilder,
              private dialogRef: MatDialogRef<LoginComponent>,
              private store: Store) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const user = new User(username, password);
    this.store.dispatch(login({user}));
    this.dialogRef.close();
  }

  buildForm(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
