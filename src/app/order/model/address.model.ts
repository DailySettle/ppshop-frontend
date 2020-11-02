export class AddressModel {
  firstname: string;
  lastname: string;
  postcode: string;
  city: string;
  street: string;
  number: string;

  constructor(init?: Partial<AddressModel>) {
    Object.assign(this, init);
  }
}
