/*
	Matthew Barry
	http://mbarry.greenriverdev.com/328/JSR/JS-Review.html
 */

/*TODO
	Write a function objEquals that takes two objects and returns true only if they have the same properties and property values. The Object.keys function might be useful!
 */

	function objEquals(object1, object2)
	{
		var message = true;
		if(object1 !== object2)
		{
			message = false;
		}
		console.log(message);

		var obj1 = Object.keys(object1);
		var obj2 = Object.keys(object2);

		console.log(obj1);
		console.log(obj2);
	}

/*
Write a method flatten() can take an array of arrays and return a single array that has all the elements of the original arrays. You should utilize the reduce() method and the concat() method.


Resources used:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

	function flatten(array)
	{
		return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
	}


/*
 * this is for testing the flatten function
 */
var arr = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arr));

// → [1, 2, 3, 4, 5, 6]



/*
 *this is for testing the objEquals function
 */
var obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));// → true
console.log(objEquals(obj, {here: 1, object: 2}));// → false
console.log(objEquals(obj, {here: {is: "an"}, object: 2}));// → true
/*

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));// → false
console.log(objEquals(obj, {here: {is: "another"}, object: 2}));// → false
console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));// → false
console.log(objEquals(obj, {here:
				{is: "an", deep: {poop: null, value: -1}}, object: 2}));// → false





*/