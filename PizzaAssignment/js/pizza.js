
function getReceipt() {
	var text1 = "";
	var text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1,text2); 
};	

//----------------------------------------------------------------------------------//
	//Meat//
function getMeat(runningTotal,text1,text2) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("Meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVegetables(runningTotal,text1,text2);
};
	//Vegetables//
function getVegetables(runningTotal,text1,text2) {
	var vegetablesTotal = 0;
	var selectedVegetables = [];
	var vegetablesArray = document.getElementsByClassName("Vegetables");
	for (var j = 0; j < vegetablesArray.length; j++) {
		if (vegetablesArray[j].checked) {
			selectedVegetables.push(vegetablesArray[j].value);
		}
	}
	var vegetablesCount = selectedVegetables.length;
	if (vegetablesCount >= 2) {
		vegetablesTotal = (vegetablesCount - 1);
	} else {
		vegetablesTotal = 0;
	}
	runningTotal = (runningTotal + vegetablesTotal);
	for (var j = 0; j < selectedVegetables.length; j++) {
			text1 = text1+selectedVegetables[j]+"<br>";
			if (vegetablesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				vegetablesCount = vegetablesCount - 1;
			} else if (vegetablesCount == 2) {
				text2 = text2 + 1 + "<br>";
				vegetablesCount = vegetablesCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				vegetablesCount = vegetablesCount - 1;
			}
	}
	getSauce(runningTotal,text1,text2);
};

//-----------------------------------------------------------------------------------------------------//
	//Sauce//
function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByClassName("Sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce +"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";
	getCheese(runningTotal,text1,text2)
};

	//Cheese//
function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("Cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra Cheese (+$3)") {
			cheeseTotal = 3;
		}
	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	getCrust(runningTotal,text1,text2);
};

	//Crust//
function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust (+$3)") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + crustTotal + "<br>";
	document.getElementById("cart");
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};