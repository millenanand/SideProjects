import Qty from './node_modules/js-quantities/src/quantities.js'

var qty = new Qty('23 ft');

console.log("yooooo")
chrome.storage.sync.get('value', function(unitValue) {
	console.log(unitValue)
	var unitTag = document.createElement('h2');
	var unitText = document.createTextNode(unitValue.value);
	unitTag.appendChild(unitText);
	document.body.appendChild(unitTag);
});



