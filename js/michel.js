function tacoDanceFunction(taco) {

	var tacoDance = document.getElementById(taco);
	if(tacoDance.style.display == 'block') {
		tacoDance.style.display = 'none';
	} else {
		tacoDance.style.display = 'block'
	}
}
