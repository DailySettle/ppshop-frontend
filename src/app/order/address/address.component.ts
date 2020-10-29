import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'pps-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  nextPage(): void {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
      this.router.navigate(['checkout', 'payment']);
    }
  }

  buildForm(): void {
    this.addressForm = this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      city: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
    });
  }

  getTooltip(): void {
    return this.translate.instant('address.tooltip');
  }
}
