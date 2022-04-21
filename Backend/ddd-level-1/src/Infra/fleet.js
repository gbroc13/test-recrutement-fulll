const Vehicle = require('../Domain/vehicle.js');

/*
 * Flotte (dépôt des véhicules)
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class Fleet {

	constructor(name) {
		this._name = name;
		this.registredVehicles = [];
	}
	
	get name() {
		return this._name;
	}
	
	register(vehicle) {
		let findResult = this.registredVehicles.find(rv => rv.vehicle.id === vehicle.id);
		if (findResult === undefined) {
			this.registredVehicles.push({ vehicle, location: undefined });
		} else {
			throw new Error(`Le véhicule '${vehicle.name}' existe déjà dans la flotte '${this.name}' !`);
		}
	}
	
	park(vehicle, location) {
		let findResult = this.registredVehicles.find(rv => rv.vehicle.id === vehicle.id);
		if (findResult !== undefined) {
			if ( (findResult.location !== undefined) && (findResult.location.toString() === location.toString()) ) {
				throw new Error(`Le véhicule '${vehicle.name}' est déjà garé à : ${location.toString()}`);
			} else {
				findResult.location = location;
			}
		} else {
			throw new Error(`Le véhicule '${vehicle.name}' n'a pas été trouvé dans la flotte '${this.name}' !`);
		}
	}
	
	get(vehicleId) {
		let registredVehicle = this.registredVehicles.find(rv => rv.vehicle.id === vehicleId);
		return registredVehicle.vehicle;
	}
	
	location(vehicleId) {
		let registredVehicle = this.registredVehicles.find(rv => rv.vehicle.id === vehicleId);
		return registredVehicle.location;
	}
	
	registredVehicles() {
		return this.registredVehicles.length;
	}

}

module.exports = Fleet;