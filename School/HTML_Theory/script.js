function inputChange(e) {
    console.log("This is an input", this)
    console.log("This is event change", e)
}


// this here is my input
document.getElementById('myText').addEventListener("change", inputChange) 