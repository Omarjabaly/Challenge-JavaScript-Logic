//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]///


let array1 = [1,2,3];
let target1 = 4;
answer = (array, target) => {
	for (let i=0; i<array.length; i++) {
		for (let t=i+1; t<array.length; t++) {
			if (array[i] + array[t] === target) {
				return [array[i], array[t]]
			}
		}
	}
	console.log("the operation is not possible");
}
