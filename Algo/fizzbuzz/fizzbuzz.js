const MIN_NUMBER_FOR_SEQUENCE = 1;
const EMPTY_SEPARATOR = '';
const NUMBER_THREE = 3;
const NUMBER_ZERO = 0;
const NUMBER_FIVE = 5;
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZBUZZ = 'FizzBuzz';

/*
 * Classe FizzBuzz
 * Test de recrutement pour Fulll
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
class Fizzbuzz {
	
	generate(maxNumber) {
		const arrayOfNumbers = this.generateUntil(maxNumber);
		
		// Copie du tableau
		let newArray = arrayOfNumbers.slice();
		
		newArray.forEach((number, index) => {
			if (this.isNumberDivisibleByThreeAndFive(number)) {
				newArray[index] = FIZZBUZZ;
			} else if ((number % NUMBER_THREE) === NUMBER_ZERO) {
				newArray[index] = FIZZ;
			} else if ((number % NUMBER_FIVE) === NUMBER_ZERO) {
				newArray[index] = BUZZ;
			}
		});
		
		return newArray.join(EMPTY_SEPARATOR);
	}
	
	generateUntil(number) {
		let arrayOfNumbers = [];
		for (let currentNumber = MIN_NUMBER_FOR_SEQUENCE; currentNumber <= number; ++currentNumber) {
			arrayOfNumbers.push(currentNumber);
		}
		
		return arrayOfNumbers;
	}
	
	isNumberDivisibleByThreeAndFive(number) {
		return ((number % NUMBER_THREE) === NUMBER_ZERO) && ((number % NUMBER_FIVE) === NUMBER_ZERO);
	}
	
}

module.exports = Fizzbuzz;