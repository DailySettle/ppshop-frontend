import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pps-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router) {
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
