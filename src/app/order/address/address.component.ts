import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'pps-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  personalInformation: any;

  submitted = false;

  constructor(public orderService: OrderService, private router: Router) {
  }

  ngOnInit(): void {
    this.personalInformation = this.orderService.getTicketInformation().personalInformation;
  }

  nextPage(): void {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
      this.orderService.ticketInformation.personalInformation = this.personalInformation;
      this.router.navigate(['steps/seat']);

      return;
    }

    this.submitted = true;
  }

}
