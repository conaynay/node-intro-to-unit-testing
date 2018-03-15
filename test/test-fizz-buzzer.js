const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe ('fizzBuzzer', function() {
	it('should return fizz for 3 buzz for 5 and fizzbuzz for 15', function(){
		const correctCases = [
			{num: 3, expected: "fizz"},
			{num: 5, expected: "buzz"},
			{num: 15, expected: "fizz-buzz"},
			{num: 2, expected: 2},
			{num: 11, expected: 11}
		];
		
		correctCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badResponses = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badResponses.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});
