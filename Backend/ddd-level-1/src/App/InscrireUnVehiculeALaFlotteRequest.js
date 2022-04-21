/*
 * DTO pour la requête du use case inscrire un véhicule à la flotte
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class InscrireUnVehiculeALaFlotteRequest {
	
	constructor(vehicle, fleet) {
		this.vehicle = vehicle;
		this.fleet = fleet;
	}

}

module.exports = InscrireUnVehiculeALaFlotteRequest;