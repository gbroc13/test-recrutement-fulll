const GarerUnVehiculeALEmplacementRequest = require('./GarerUnVehiculeALEmplacementRequest.js');
const GarerUnVehiculeALEmplacementResponse = require('./GarerUnVehiculeALEmplacementResponse.js');

 class GarerUnVehiculeALEmplacement {
	 
	 execute(request) {
		try {
			request.fleet.park(request.vehicle, request.location);
			return new GarerUnVehiculeALEmplacementResponse(undefined);
		} catch (error) {
			return new GarerUnVehiculeALEmplacementResponse(error.message);
		}
	 }
	 
 }
 
 module.exports = GarerUnVehiculeALEmplacement;