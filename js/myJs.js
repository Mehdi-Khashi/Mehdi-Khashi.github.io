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
    document.getElementById('skillSc').style.cssText = 'width: 0%;';
    document.getElementById('blackSc').style.cssText = 'width: 100%;';
    setTimeout(() => {
        document.getElementById('hideAll').style.cssText = 'width: 0%;';
    }
        , 900);

}

function blackScreenHide() {
    document.getElementById('blackSc').style.cssText = 'width: 0%;';
    document.getElementById('skillSc').style.cssText = 'width: 0%;';
    document.getElementById('hideAll').style.cssText = 'width: 100%;';
    document.getElementById('hideAll2').style.cssText = 'width: 100%;';
}

function skillScreen() {
    document.getElementById('blackSc').style.cssText = 'width: 0%;';
    document.getElementById('skillSc').style.cssText = 'width: 100%;';
    setTimeout(() => {
        document.getElementById('hideAll2').style.cssText = 'width: 0%;';
    }
        , 900);
    setTimeout(() => {
        document.getElementById('react').style.cssText = 'width: 85%;';
        document.getElementById('vue').style.cssText = 'width: 75%;';
        document.getElementById('java').style.cssText = 'width: 80%;';
    }
        , 1100);
}

var sec = 0;

function nextSecClick() {

    // if(false){

    // }else{
    //     sec = sec + 1;
    //     handleSec();
    // }
    // console.log("nex "+sec);
    sec++;
    // console.log("n clicked "+sec);
    handleSec();

}

function prevSecClick() {

    // if(false){

    // }else{
    //     sec = sec - 1;
    //     handleSec();
    // }
    // console.log("pre "+sec);
    sec--;
    // console.log("p clicked "+sec);
    handleSec();

}

function handleSec() {

    console.log("h " + sec);
    if (sec <= 0) {
        sec = 0;
        document.getElementById('leftar').style.cssText = 'display: none;';
    } else if (sec >= 2) {
        sec = 2;
        document.getElementById('rightar').style.cssText = 'display: none;';
    } else {
        document.getElementById('leftar').style.cssText = 'display: block;';
        document.getElementById('rightar').style.cssText = 'display: block;';
    }


    if (sec == 0) {

        document.getElementById('js').style.cssText = 'width: 0%;';
        document.getElementById('nodejs').style.cssText = 'width: 0%;';
        document.getElementById('htmlcss').style.cssText = 'width: 0%;';

        document.getElementById('secOne').style.cssText = 'display: block;';
        document.getElementById('secTwo').style.cssText = 'display: none;';
        document.getElementById('secThree').style.cssText = 'display: none;';

        setTimeout(() => {
            document.getElementById('react').style.cssText = 'width: 85%;';
            document.getElementById('vue').style.cssText = 'width: 75%;';
            document.getElementById('java').style.cssText = 'width: 80%;';
        }
            , 200);


    } else if (sec == 1) {

        document.getElementById('react').style.cssText = 'width: 0%;';
        document.getElementById('vue').style.cssText = 'width: 0%;';
        document.getElementById('java').style.cssText = 'width: 0%;';

        document.getElementById('mongodb').style.cssText = 'width: 0%;';
        document.getElementById('mysql').style.cssText = 'width: 0%;';
        document.getElementById('android').style.cssText = 'width: 0%;';

        document.getElementById('secOne').style.cssText = 'display: none;';
        document.getElementById('secTwo').style.cssText = 'display: block;';
        document.getElementById('secThree').style.cssText = 'display: none;';

        setTimeout(() => {
            document.getElementById('js').style.cssText = 'width: 80%;';
            document.getElementById('nodejs').style.cssText = 'width: 80%;';
            document.getElementById('htmlcss').style.cssText = 'width: 90%;';
        }
            , 200);

    } else {

        document.getElementById('js').style.cssText = 'width: 0%;';
        document.getElementById('nodejs').style.cssText = 'width: 0%;';
        document.getElementById('htmlcss').style.cssText = 'width: 0%;';

        document.getElementById('secOne').style.cssText = 'display: none;';
        document.getElementById('secTwo').style.cssText = 'display: none;';
        document.getElementById('secThree').style.cssText = 'display: block;';

        setTimeout(() => {
            document.getElementById('mongodb').style.cssText = 'width: 80%;';
            document.getElementById('mysql').style.cssText = 'width: 90%;';
            document.getElementById('android').style.cssText = 'width: 50%;';
        }
            , 200);

    }

}


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        // document.querySelector("body").style.visibility = "hidden";
        // document.querySelector("body").style.cssText = "background-color: #0B0B0B; visibility: hidden;";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.cssText = "background-color: #f2eee8; visibility: visible;";
    }
};