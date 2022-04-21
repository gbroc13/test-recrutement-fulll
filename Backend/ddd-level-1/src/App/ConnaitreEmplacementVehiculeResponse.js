/*
 * DTO de réponse pour le use case connaître l'emplacement d'un véhicule
 * Guillaume Broc
 * 04/2022
 */
class ConnaitreEmplacementVehiculeResponse {
	
	constructor(location, error) {
		this.location = location;
		this.error = error;
	}
	
}

module.exports = ConnaitreEmplacementVehiculeResponse;