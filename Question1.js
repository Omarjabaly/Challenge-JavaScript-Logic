//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
//make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) 
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; //example 
answer = (array) => {
	let sortedArray = array.sort((a, b) => a-b);
	let sortedArrayFinal = [];
	for (x of sortedArray) {
		let filteredArray = array.filter(item => item === x)
		let contains = (smallArray) => {
			for (y of sortedArrayFinal) {
				if (JSON.stringify(y)==JSON.stringify(smallArray)) { return true }
			}
			return false;
		}
		if (filteredArray.length>1 && !contains(filteredArray)) {
			sortedArrayFinal.push(filteredArray);
		} else if (filteredArray.length === 1) {
			sortedArrayFinal.push(filteredArray[0])
		}
	} console.log(sortedArrayFinal);
}

//Bonus: Make it so it organizes strings differently from number types. 
//i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1, "2", "3", 2]; // example 
answer = (array) => {
	let sortedArray = [array.filter(item => typeof(item) === "number"), array.filter(item => typeof(item) === "string")];
	console.log(sortedArray);
	}



