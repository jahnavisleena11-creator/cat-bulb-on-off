
function on() {
    document.getElementById("bulb").src = "images/bulb-on.png";
    document.getElementById("cat").src = "images/cat.png";
    document.getElementById("textt").textContent = "Switched on";
    document.getElementById("butto").style.backgroundColor = "#cbd2d9";
    document.getElementById("butt").style.backgroundColor = "red";
}

function off() {
    document.getElementById("bulb").src = "images/bulb-off.png";
    document.getElementById("cat").src = "images/cat-eyes.png";
    document.getElementById("textt").textContent = "Switched off";
    document.getElementById("butt").style.backgroundColor = "#cbd2d9";
    document.getElementById("butto").style.backgroundColor = "green";
}