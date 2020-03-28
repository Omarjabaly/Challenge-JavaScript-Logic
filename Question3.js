//Question 3: Write a function that converts HEX to RGB. 

convertRGB = (hexNumber) => {
	if (hexNumber.length !== 6) {
		console.log("This is not a HEX color number")
	} else {
	let num = hexNumber + " ";
	let num1RGB = parseInt(num.substring(0, 2), 16);
	let num2RGB = parseInt(num.substring(2, 4), 16);
	let num3RGB = parseInt(num.substring(4, 6), 16);
	console.log(`The corresponding RGB color is RGB (${num1RGB}, ${num2RGB}, ${num3RGB})`);
	}
}


//Then Make that function auto-dect the formats so that if you enter HEX color format 
//it returns RGB and if you enter RGB color format it returns HEX.

convertColor = (entry) => {
	if (entry.includes("#")) {
		if (entry.length !== 7) {
		console.log("Hex color format incorrect or incomplete")	
		} else {
			let num = entry + " ";
			let num1RGB = parseInt(num.substring(1, 3), 16);
			let num2RGB = parseInt(num.substring(3, 5), 16);
			let num3RGB = parseInt(num.substring(5, 7), 16);
			console.log(`The corresponding RGB color is RGB (${num1RGB}, ${num2RGB}, ${num3RGB})`);
			}
		}

	if (entry.includes(",")) {
			let num1Hex = parseInt(entry.substring(0, entry.indexOf(",")).trim()).toString(16);
			let entry2 = entry.slice(entry.indexOf(",")+1);
			let num2Hex = parseInt(entry2.substring(0, entry2.indexOf(",")).trim()).toString(16);
			let num3Hex = parseInt(entry2.slice(entry2.indexOf(",")+1).trim()).toString(16);
			console.log(`The corresponding Hex color is #${num1Hex}${num2Hex}${num3Hex}`)
	}

}