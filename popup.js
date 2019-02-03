import Qty from './node_modules/js-quantities/src/quantities.js'

//var qty = new Qty('23 ft');
 

console.log("yooooo")
chrome.storage.sync.get('value', function(unitValue) {
	console.log(unitValue);


	var qty = Qty.parse(unitValue.value);
	var unitTag; 
	var unitText;
	var unitType = qty.kind();
	if (unitType = "length") {
		var numerator = qty.numerator[0];
		var lengthList = ["meter", "foot", "mile", "inch", "yard", "millimeter", "centimeter", "kilometer"];
		for (var i=0; i < lengthList.length; i++) {
			if (numerator != lengthList[i]) {
				unitTag = document.createElement('p');

				unitText = document.createTextNode(qty.to(lengthList[i]));
				unitTag.appendChild(unitText);
				unitTag.style.cssText = "font-size:22px";
				document.body.appendChild(unitTag);

				//make a conversion here

			}
		}
	}
	


	// console.log(qty.numerator);
	// console.log(qty.toString());
	// console.log(Qty.parse(unitValue.value));

	// //console.log(qty.kind());
	// console.log(Qty.getUnits('length'));
	// console.log(Qty.parse("1 m"));
	// console.log(Qty.parse("1 m/s"));
	// //console.log(qty.to('ft'));
	// //console.log(Qty.getUnits('length'));

	// var unitTag = document.createElement('h2');
	// var unitText = document.createTextNode(unitValue.value);
	// unitTag.appendChild(unitText);
	// document.body.appendChild(unitTag);
});

// .kind -> length, pressure etc
// length: meter, feet, mile, inch, yard, mm, cm, km, yard
// come up w order for each kind of unit
// most likely one displayed biggest, followed by 5 more smaller
// dropdown for niche conversions


