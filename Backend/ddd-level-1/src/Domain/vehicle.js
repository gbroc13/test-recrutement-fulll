/*
 * Objet métier pour un véhicule
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class Vehicle {

	constructor(name) {
		this._id = Date.now() + name;
		this._name = name;
	}
	
	get id() {
		return this._id;
	}
	
	get name() {
		return this._name;
	}

}

module.exports = Vehicle;