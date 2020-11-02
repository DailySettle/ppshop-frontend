export class PaymentModel {
  number: string;
  owner: string;
  date: string;
  cvv: string;

  constructor(init?: Partial<PaymentModel>) {
    Object.assign(this, init);
  }
}
