console.log('hi');

function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if(text !== '') {
        // we've got a highlight, now do your stuff here
        doStuff(text.toString());
    }
}


document.onmouseup = highlightHandler;


function doStuff(text) {
    // do something cool
    console.log(text)
}