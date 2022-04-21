/*
 * Objet métier pour une adresse
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class Address {

	constructor(streetNumber, street, zipCode, city) {
		this._streetNumber = streetNumber;
		this._street = street;
		this._zipCode = zipCode;
		this._city = city;
	}
	
	get streetNumber() {
		return this._streetNumber;
	}
	
	get street() {
		return this._street;
	}
	
	get zipCode() {
		return this._zipCode;
	}
	
	get city() {
		return this._city;
	}
	
	toString() {
		return `${this._streetNumber} ${this._street}, ${this._zipCode} ${this._city}`;
	}

}

module.exports = Address;