const INCREMENT = 1;
const BASE_10 = 10;

/*
 * Classe CustomNumberTypeIncrement
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class CustomNumberTypeIncrement {
	
	compute(arrayNumber) {
		let arrayToString = this.convertArrayIntoString(arrayNumber);
		
		// Incrémentation du nombre
		const number = +arrayToString;
		const incrementedNumber = number + INCREMENT;
		
		return this.convertNumberIntoArray(incrementedNumber);
	}
	
	convertArrayIntoString(array) {
		let arrayToString = "";
		for (let item of array) {
			arrayToString += item;
		}
		
		return arrayToString;
	}
	
	convertNumberIntoArray(number) {
		let array = [];
		const newString = number.toString();
		for (let item of newString) {
			array.push(parseInt(item, BASE_10));
		}
		
		return array;
	}
	
}

module.exports = CustomNumberTypeIncrement;