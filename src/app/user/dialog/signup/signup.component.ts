import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {User} from '../../model/user.model';
import {signUp} from '../../store/actions/user.actions';
import {MatDialogRef} from '@angular/material/dialog';

function passwordMatchValidator(form): any {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    return confirmPassword.setErrors({passwordsMatch: true});
  } else {
    return null;
  }

}

@Component({
  selector: 'pps-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private builder: FormBuilder,
              private dialogRef: MatDialogRef<SignupComponent>,
              private store: Store) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validators: passwordMatchValidator
    });
  }

  register(): void {
    const username = this.signupForm.get('username').value;
    const password = this.signupForm.get('password').value;
    const user = new User(username, password);
    this.store.dispatch(signUp({user}));
    this.dialogRef.close();
  }
}
