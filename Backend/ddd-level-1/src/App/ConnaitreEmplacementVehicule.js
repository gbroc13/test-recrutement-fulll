const ConnaitreEmplacementVehiculeRequest = require('./ConnaitreEmplacementVehiculeRequest.js');
const ConnaitreEmplacementVehiculeResponse = require('./ConnaitreEmplacementVehiculeResponse.js');

/*
 * Use case connaître l'emplacement d'un véhicule
 * Guillaume Broc
 * 04/2022
 */
class ConnaitreEmplacementVehicule {
	
	execute(request) {
		try {
			const location = request.fleet.location(request.vehicleId);
			return new ConnaitreEmplacementVehiculeResponse(location, undefined);
		} catch (error) {
			return new ConnaitreEmplacementVehiculeResponse(error.message);
		}
	 }
	
}

module.exports = ConnaitreEmplacementVehicule;