import {Injectable} from '@angular/core';
import {User} from '../user/model/user.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  paymentComplete$: any = of({personalInformation: new User('Ming', 'li')});
  ticketInformation: any;
  private personalInformation: User;
  private person: { personalInformation: User };

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getTicketInformation() {
    this.person.personalInformation = new User('Ming', 'Li');
    return this.person;
  }
}
