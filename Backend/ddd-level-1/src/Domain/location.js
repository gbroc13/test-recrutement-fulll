const Address = require('./address.js');

/*
 * Objet métier pour un emplacement géographique
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class Location {
	
	constructor(address, favoriteName) {
		this._address = address;
		this._favoriteName = favoriteName;
	}
	
	get address() {
		return this._address;
	}
	
	get favoriteName() {
		return this._favoriteName;
	}
	
	toString() {
		if (this.favoriteName === undefined) {
			return `${this.address.toString()}`;
		} else {
			return `${this.favoriteName} (${this.address.toString()})`;
		}
	}

}

module.exports = Location;