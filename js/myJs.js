function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    // console.log(coor);
    // document.getElementById("movethis").style.top = document.getElementById("movethis").getBoundingClientRect().top - 15 + 'px';
    if (y < 400) {
        document.getElementById("movethis").style.top = 24 + '%';
    } else if (y < 560) {
        document.getElementById("movethis").style.top = 30 + '%';
    } else if (y > 570) {
        document.getElementById("movethis").style.top = 34 + '%';
    }


    if (x < 660) {
        document.getElementById("movethis").style.left = 30 + '%';
    } else if (x < 900) {
        document.getElementById("movethis").style.left = 34 + '%';
    } else if (x > 900) {
        document.getElementById("movethis").style.left = 38 + '%';
    }

}

function clearCoor() {
    document.getElementById("movethis").style.top = 30 + '%';
    document.getElementById("movethis").style.left = 34 + '%';
}


function blackScreen() {
    document.getElementById('blackSc').style.cssText = 'width: 100%;';
    setTimeout(()=> {
        document.getElementById('hideAll').style.cssText = 'width: 0%;';
     }
     ,900);
    
}

function blackScreenHide() {
    document.getElementById('blackSc').style.cssText = 'width: 0%;';
    document.getElementById('hideAll').style.cssText = 'width: 100%;';
}

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        // document.querySelector("body").style.visibility = "hidden";
        // document.querySelector("body").style.cssText = "background-color: #0B0B0B; visibility: hidden;";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.cssText = "background-color: #f2eee8; visibility: visible;";
    }
};