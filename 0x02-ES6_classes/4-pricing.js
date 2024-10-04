import Currency from "./3-currency";

export default class Pricing{
	constructor(amount, currency){
		this._amount = amount
		this._curreny = currency
	}

	get amount(){
		return this._amount;
	}

	set amount(input){
		this._amount = input;
	}

	get currency(){
		  return this._currency;
	}

	set currency(input){
                this._currency = input;
        }

	displayFullPrice(){
		return (`${this._amount} ${this._name} (${this._code})`);
	}

	static convertPrice(amount, conversionRate){
		return amount * conversionRate
	}
}
