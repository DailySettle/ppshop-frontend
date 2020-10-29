import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';
import {OrderService} from '../order.service';

@Component({
  selector: 'pps-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  subscription: Subscription;

  constructor(public messageService: MessageService, public orderService: OrderService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Address',
        routerLink: 'address'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];

    this.subscription = this.orderService.paymentComplete$.subscribe((personalInformation) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Order submitted',
        detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

