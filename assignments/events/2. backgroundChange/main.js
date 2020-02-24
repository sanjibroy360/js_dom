// Add Event
document.addEventListener("click",randomColor);

// Manupulate

function randomColor() {
    let firstVal = Math.floor( Math.random() * 255 );
    let secondVal = Math.floor( Math.random() * 255 );
    let thirdVal = Math.floor( Math.random() * 255 );
    let alpha = Math.random();

    document.body.style.backgroundColor = `rgb(${firstVal}, ${secondVal}, ${thirdVal}, ${alpha})`;
}