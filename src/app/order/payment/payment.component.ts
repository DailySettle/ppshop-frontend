import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'pps-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router,
              private store: Store,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  nextPage(): void {
    if (this.paymentForm.valid) {
      console.log(this.paymentForm.value);
      this.router.navigate(['checkout', 'confirmation']);
    }
  }

  prevPage(): void {
    this.router.navigate(['checkout', 'address']);
  }

  buildForm(): void {
    this.paymentForm = this.builder.group({
      owner: ['', Validators.required],
      number: ['', Validators.required],
      date: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  getTooltip(): void {
    return this.translate.instant('payment.tooltip');
  }
}
