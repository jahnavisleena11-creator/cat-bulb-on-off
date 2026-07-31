
function on() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("textt").textContent = "Switched on";
    document.getElementById("butto").style.backgroundColor = " #cbd2d9";
    document.getElementById("butt").style.backgroundColor = " red";
}

function off() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("textt").textContent = "Switched off";
    document.getElementById("butt").style.backgroundColor = " #cbd2d9";
    document.getElementById("butto").style.backgroundColor = "green";
}