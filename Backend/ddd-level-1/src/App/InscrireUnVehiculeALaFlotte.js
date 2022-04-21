const InscrireUnVehiculeALaFlotteRequest = require('./InscrireUnVehiculeALaFlotteRequest.js');
const InscrireUnVehiculeALaFlotteResponse = require('./InscrireUnVehiculeALaFlotteResponse.js');

class InscrireUnVehiculeALaFlotte {
	
	execute(request) {
		try {
			request.fleet.register(request.vehicle);
			return new InscrireUnVehiculeALaFlotteResponse(undefined);
		} catch (error) {
			return new InscrireUnVehiculeALaFlotteResponse(error.message);
		}
	}
	
}

module.exports = InscrireUnVehiculeALaFlotte;