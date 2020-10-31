import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AddressModel} from '../model/address.model';
import {PaymentModel} from '../model/payment.model';
import {selectOrderAddress, selectOrderPayment} from '../store/selectors/order.selectors';

@Component({
  selector: 'pps-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  address$: Observable<AddressModel>;
  payment$: Observable<PaymentModel>;

  constructor(private router: Router,
              private store: Store) {
    this.address$ = this.store.select(selectOrderAddress);
    this.payment$ = this.store.select(selectOrderPayment);
  }

  ngOnInit(): void {
  }

  complete(): void {
    this.router.navigate(['home']);
  }

  prevPage(): void {
    this.router.navigate(['checkout', 'payment']);
  }
}
