var contextMenuItem = {
	"id": "unit",
	"title": "Converter",
	"contexts": ["selection"],
}

chrome.contextMenus.create(contextMenuItem)

console.log('waefawfwf')

chrome.contextMenus.onClicked.addListener(function(clickedData) {
	console.log('whatever')
})

// chrome.contextMenus.onClicked.addListener(function(clickData) {
// 	console.log('hi')
// 	console.log(clickData)
// 	if (clickData.menuItemId == "unit" && clickData.selectionText) {

// 	}
// })