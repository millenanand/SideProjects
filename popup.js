import Qty from './node_modules/js-quantities/src/quantities.js'

//var qty = new Qty('23 ft');

console.log("yooooo")
chrome.storage.sync.get('value', function(unitValue) {
	console.log(unitValue);

	var qty = new Qty(unitValue.value);
	console.log(qty.toString());
	console.log(Qty.parse(unitValue.value));

	console.log(qty.to('ft'));
	console.log(Qty.getUnits('length'));


	var unitTag = document.createElement('h2');
	var unitText = document.createTextNode(unitValue.value);
	unitTag.appendChild(unitText);
	document.body.appendChild(unitTag);
});



