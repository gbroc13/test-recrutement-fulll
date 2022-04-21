class GarerUnVehiculeALEmplacementResponse {
	
	constructor(error) {
		this._error = error;
	}
	
	get error() {
		return this._error;
	}
	
}

module.exports = GarerUnVehiculeALEmplacementResponse;