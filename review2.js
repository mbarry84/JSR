/*
	Matthew Barry
	http://mbarry.greenriverdev.com/328/JSR/JS-Review.html
 */

/*TODO
	Write a function objEquals that takes two objects and returns true only if they have the same properties and property values. The Object.keys function might be useful!
 */

	function objEquals(object1, object2)
	{
		var obj1 = Object.keys(object1);
		var obj2 = Object.keys(object2);

		if (obj1 === obj2)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

/*TODO
	Write a method flatten() can take an array of arrays and return a single array that has all the elements of the original arrays. You should utilize the reduce() method and the concat() method.
 */




var obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));// → true

console.log(objEquals(obj, {here: 1, object: 2}));// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));// → false