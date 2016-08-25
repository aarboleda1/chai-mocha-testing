var expect = require('chai').expect;
var chai = require('chai');
var should = chai.should();
var assert = chai.assert;

//use describe to group everything together

//using BDD - behavior driven development
//a derivative of TDD
//it is a higher order function
//takes two arguments - a message and a callback function
var a = true;
describe("basic test case practice", function(){
	it("should pass when everything is true", function(){
		expect(a).to.be.true;
	});
	it('should pass if the target is false', function(){
		expect(numLessThanTwo(5)).to.be.false;
	})
});



var numLessThanTwo = function(n){
	return n < 2
}

//equal asserts that the target is strictly equal to a value
//eql asserts tha the target is deeply equal to the value //aka an object equal to an object 

var hi = 'hello'
//testing values
describe('should throw an error if the values are not equal', function(){
	it('can expect this to return true', function(){
		expect(hi).to.equal('hello')
	})
	it('can expect to be true if object keys/values are the same', function(){
		expect(obj).to.eql(otherObj)
	})
	
})

var obj = {name: 'anton'};
var otherObj = {name: 'anton'}
var testFn = function(){}


//assert takes two parameters- an expression and a message
describe('using throw, you can predict your errors', function(){
	
	it('should return true', function(){
	
	assert(1<2, 'one is less than two')

	})

	it('throws a reference error', function(){
		assert.throws(function(){}, 'function throws a reference error')
	})
	


})




//using assert 
//The assert style is very similar to node.js’ included assert module, with a 
//bit of extra sugar. Of the three style options, assert is the only one that 
//is not chainable. Check out the Style Guide for a comparison.
