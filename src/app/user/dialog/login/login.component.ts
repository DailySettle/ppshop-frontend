import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'pps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login(): void {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const user = new User(username, password);
  }

  buildForm(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
