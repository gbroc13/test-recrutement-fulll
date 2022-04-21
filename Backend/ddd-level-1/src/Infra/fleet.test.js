const Vehicle = require('../Domain/vehicle.js');
const Address = require('../Domain/address.js');
const Location = require('../Domain/location.js');
const Fleet = require('./fleet.js');

/*
 * Tests unitaires de la flotte
 * Pour les lancer : npm run test
 * Guillaume Broc
 * 04/2022
 */
describe('Tests unitaires de la flotte', () => {
	
	it("Vérifier que l'on puisse inscrire un véhicule à la flotte", () => {
		// Given
		let fleet = new Fleet("Flotte de Guillaume");
		let vehicle = new Vehicle("Toyota Yaris");
		
		try {
			// When
			fleet.register(vehicle);
		} catch (err) {
			expect(false).toBe(true);
		}
		
		// Then
		expect(true).toBe(true);
	});
	
	it("Vérifier que l'on ne puisse pas inscrire plusieurs fois le même véhicule à la flotte", () => {
		// Given
		let fleet = new Fleet("Flotte de Guillaume");
		let vehicle = new Vehicle("Toyota Yaris");
		
		try {
			// When
			fleet.register(vehicle);
			fleet.register(vehicle);
			
			expect(false).toBe(true);
		} catch (error) {
			// Then
			expect(error.message).toBe(`Le véhicule '${vehicle.name}' existe déjà dans la flotte '${fleet.name}' !`);
		}
	});
	
	it("Vérifier que l'on puisse inscrire un même véhicule à plusieurs flottes", () => {
		// Given
		let fleetGuillaume = new Fleet("Flotte de Guillaume");
		let fleetSaikou = new Fleet("Flotte de Saïkou");
		let vehicle = new Vehicle("Toyota Yaris");
		
		try {
			// When
			fleetGuillaume.register(vehicle);
			fleetSaikou.register(vehicle);
		} catch (err) {
			expect(false).toBe(true);
		}
		
		// Then
		expect(true).toBe(true);
	});
	
	it("Vérifier que l'on puisse garer un véhicule", () => {
		// Given
		let fleet = new Fleet("Flotte de Guillaume");
		let vehicle = new Vehicle("Toyota Yaris");
		fleet.register(vehicle);
		let address = new Address(920, "avenue du 8 mai 1945", 13320, "Bouc-Bel-Air");
		let location = new Location(address, "Chez moi");
		
		try {
			// When
			fleet.park(vehicle, location);
		} catch (err) {
			expect(false).toBe(true);
		}
		
		// Then
		expect(true).toBe(true);
	});
	
	it("Vérifier que la localisation connue d'un véhicule garé est correcte", () => {
		// Given
		let fleet = new Fleet("Flotte de Guillaume");
		let vehicle = new Vehicle("Toyota Yaris");
		fleet.register(vehicle);
		let address = new Address(920, "avenue du 8 mai 1945", 13320, "Bouc-Bel-Air");
		let location = new Location(address, "Chez moi");
		fleet.park(vehicle, location);
		
		// When
		const result = fleet.location(vehicle.id);
		
		// then
		expect(result.toString()).toBe(location.toString());
	});
	
	it("Vérifier que l'on ne puisse pas garer deux fois le même véhicule au même endroit d'affilé", () => {
		// Given
		let fleet = new Fleet("Flotte de Guillaume");
		let vehicle = new Vehicle("Toyota Yaris");
		fleet.register(vehicle);
		let address = new Address(920, "avenue du 8 mai 1945", 13320, "Bouc-Bel-Air");
		let location = new Location(address, "Chez moi");
		
		try {
			// When
			fleet.park(vehicle, location);
			fleet.park(vehicle, location);
			
			expect(false).toBe(true);
		} catch (error) {
			// Then
			expect(error.message).toBe(`Le véhicule '${vehicle.name}' est déjà garé à : ${location.toString()}`);
		}
	});
	
});