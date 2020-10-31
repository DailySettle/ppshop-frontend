import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {stepsSaveAddress} from '../store/actions/order.actions';
import {AddressModel} from '../model/address.model';
import {selectOrderAddress} from '../store/selectors/order.selectors';

@Component({
  selector: 'pps-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router,
              private translate: TranslateService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.store.select(selectOrderAddress).subscribe(
      address => this.addressForm.patchValue(address)
    );
  }

  nextPage(): void {
    if (this.addressForm.valid) {
      const address = new AddressModel(this.addressForm.value);
      this.store.dispatch(stepsSaveAddress({address}));
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

  getTooltip(): string {
    return this.translate.instant('address.tooltip');
  }
}
