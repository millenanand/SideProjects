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
    //git push -u origin millen
    // do something cool
    console.log(text)

    //split array

    //

}