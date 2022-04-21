/*
 * DTO de requête pour le use case connaître l'emplacement d'un véhicule
 * Guillaume Broc
 * 04/2022
 */
class ConnaitreEmplacementVehiculeRequest {
	
	constructor(vehicleId, fleet) {
		this.vehicleId = vehicleId;
		this.fleet = fleet;
	}
	
}

module.exports = ConnaitreEmplacementVehiculeRequest;