/*
 * Programme principal
 * Pour le lancer, se placer à la racine du projet, puis : node .
 * Guillaume Broc
 * 04/2022
 */
const Fleet = require('../Infra/fleet.js');
const Vehicle = require('../Domain/vehicle.js');
const Address = require('../Domain/address.js');
const Location = require('../Domain/location.js');

const InscrireUnVehiculeALaFlotteRequest = require('./InscrireUnVehiculeALaFlotteRequest.js');
const InscrireUnVehiculeALaFlotte = require('./InscrireUnVehiculeALaFlotte.js');
const InscrireUnVehiculeALaFlotteResponse = require('./InscrireUnVehiculeALaFlotteResponse.js');

const GarerUnVehiculeALEmplacement = require('./GarerUnVehiculeALEmplacement.js');
const GarerUnVehiculeALEmplacementRequest = require('./GarerUnVehiculeALEmplacementRequest.js');
const GarerUnVehiculeALEmplacementResponse = require('./GarerUnVehiculeALEmplacementResponse.js');

const ConnaitreEmplacementVehicule = require('./ConnaitreEmplacementVehicule.js');
const ConnaitreEmplacementVehiculeRequest = require('./ConnaitreEmplacementVehiculeRequest.js');
const ConnaitreEmplacementVehiculeResponse = require('./ConnaitreEmplacementVehiculeResponse.js');


console.log("useCaseInscrirePlusieursVehiculesALaFlotte()");
useCaseInscrirePlusieursVehiculesALaFlotte();

console.log("");
console.log("-");
console.log("useCaseInscrirePlusieursVehiculesALaFlotteDontDeuxFoisLeMeme()");
useCaseInscrirePlusieursVehiculesALaFlotteDontDeuxFoisLeMeme();

console.log("");
console.log("-");
console.log("useCaseGarerUnVehiculeALEmplacement()");
useCaseGarerUnVehiculeALEmplacement();

console.log("");
console.log("-");
console.log("useCaseConnaitreEmplacementVehicule()");
useCaseConnaitreEmplacementVehicule();


function useCaseInscrirePlusieursVehiculesALaFlotte() {
	let fleet = new Fleet("Flotte de Guillaume");
	let vehicles = [
		new Vehicle("Toyota Yaris"),
		new Vehicle("Opel Corsa"),
		new Vehicle("Renault Twingo")
	];
	
	// Exécution du use case
	const inscrireUnVehiculeALaFlotte = new InscrireUnVehiculeALaFlotte();
	vehicles.forEach(vehicle => {
		let request = new InscrireUnVehiculeALaFlotteRequest();
		request.vehicle = vehicle;
		request.fleet = fleet;

		const response = inscrireUnVehiculeALaFlotte.execute(request);
		if (response.error) {
			console.log(response.error);
		}
	});
}

function useCaseInscrirePlusieursVehiculesALaFlotteDontDeuxFoisLeMeme() {
	let fleet = new Fleet("Flotte de Guillaume");
	let vehicles = [
		new Vehicle("Toyota Yaris"),
		new Vehicle("Opel Corsa"),
		new Vehicle("Renault Twingo")
	];
	
	// Exécution du use case
	const inscrireUnVehiculeALaFlotte = new InscrireUnVehiculeALaFlotte();
	vehicles.forEach(vehicle => {
		let request = new InscrireUnVehiculeALaFlotteRequest();
		request.vehicle = vehicle;
		request.fleet = fleet;

		new InscrireUnVehiculeALaFlotte().execute(request);
	});
	
	let request = new InscrireUnVehiculeALaFlotteRequest();
	request.vehicle = vehicles[0];
	request.fleet = fleet;

	const response = inscrireUnVehiculeALaFlotte.execute(request);
	if (response.error) {
		console.log(response.error);
	}
}

function useCaseGarerUnVehiculeALEmplacement() {
	let fleet = new Fleet("Flotte de Guillaume");
	let vehicle = new Vehicle("Opel Corsa");
	fleet.register(vehicle);
	
	// Exécution du use case
	const garerUnVehiculeALEmplacement = new GarerUnVehiculeALEmplacement();
	let request = new GarerUnVehiculeALEmplacement();
	request.vehicle = vehicle;
	let address = new Address(920, "avenue du 8 mai 1945", 13320, "Bouc-Bel-Air");
	request.location = new Location(address, "Chez moi");
	request.fleet = fleet;
	
	const response = garerUnVehiculeALEmplacement.execute(request);
	if (response.error) {
		console.log(response.error);
	}
}

function useCaseConnaitreEmplacementVehicule() {
	let fleet = new Fleet("Flotte de Guillaume");
	let vehicle = new Vehicle("Renault Twingo");
	fleet.register(vehicle);
	let address = new Address(920, "avenue du 8 mai 1945", 13320, "Bouc-Bel-Air");
	location = new Location(address, "Chez moi");
	fleet.park(vehicle, location);
	
	// Exécution du use case
	const connaitreEmplacementVehicule = new ConnaitreEmplacementVehicule();
	let request = new ConnaitreEmplacementVehiculeRequest(vehicle.id, fleet);
	const response = connaitreEmplacementVehicule.execute(request);
	if (response.error) {
		console.log(response.error);
	} else {
		console.log("Véhicule garé à : " + response.location.toString());
	}
}