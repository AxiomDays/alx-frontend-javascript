import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(input) {
    this._amount = input;
  }

  get currency() {
		  return this._currency;
  }

  set currency(input) {
    this._currency = input;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
