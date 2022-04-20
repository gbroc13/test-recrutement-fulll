const CustomNumberTypeIncrement = require('./custom-number-type-increment.js');

/*
 * Tests unitaires de la classe CustomNumberTypeIncrement
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
describe('Tests unitaires de la classe CustomNumberTypeIncrement', () => {
	
	let customNumberTypeIncrement;
	
	beforeAll(() => {
		customNumberTypeIncrement = new CustomNumberTypeIncrement();
	});
	
	it('Vérifier que [1, 2, 3] en entrée donne [1, 2, 4] en sortie', () => {
		// Given
		const myArray = [1, 2, 3];
		
		// When
		const result = customNumberTypeIncrement.compute(myArray);
		
		// Then
		expect(result).toStrictEqual([1, 2, 4]);
	});
	
	it('Vérifier que [7, 9] en entrée donne [8, 0] en sortie', () => {
		// Given
		const myArray = [7, 9];
		
		// When
		const result = customNumberTypeIncrement.compute(myArray);
		
		// Then
		expect(result).toStrictEqual([8, 0]);
	});
	
	it('Vérifier que [9, 9] en entrée donne [1, 0, 0] en sortie', () => {
		// Given
		const myArray = [9, 9];
		
		// When
		const result = customNumberTypeIncrement.compute(myArray);
		
		// Then
		expect(result).toStrictEqual([1, 0, 0]);
	});
	
});