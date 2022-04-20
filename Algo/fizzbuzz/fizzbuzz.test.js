const Fizzbuzz = require('./fizzbuzz.js');

/*
 * Tests unitaires de la classe FizzBuzz
 * Auteur du code : Guillaume Broc
 * 04/2022
 */
describe('Tests unitaires de la classe Fizzbuzz', () => {
	
	let fizzbuzz;
	
	beforeAll(() => {
		fizzbuzz = new Fizzbuzz();
	});
	
	it('Vérifier que la suite de nombres demandée est celle obtenue', () => {
		// Given
		const maxNumber = 12;
		
		// When
		const result = fizzbuzz.generateUntil(maxNumber);
		
		// Then
		expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	});
	
	it('Vérifier que la suite des nombres de 1 à 10 donne 12Fizz4BuzzFizz78FizzBuzz', () => {
		// Given
		const maxNumber = 10;
		
		// When
		const result = fizzbuzz.generate(maxNumber);
		
		// Then
		expect(result).toBe('12Fizz4BuzzFizz78FizzBuzz');
	});
	
	it('Vérifier que la suite des nombres de 1 à 17 donne 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuz1617', () => {
		// Given
		const maxNumber = 17;
		
		// When
		const result = fizzbuzz.generate(maxNumber);
		
		// Then
		expect(result).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617');
	});
	
	it('Vérifier que la suite des nombres de 1 à 25 donne 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz', () => {
		// Given
		const maxNumber = 25;
		
		// When
		const result = fizzbuzz.generate(maxNumber);
		
		// Then
		expect(result).toBe('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz');
	});
	
});