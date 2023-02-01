

function activeWheel(which) {
    document.getElementById("wb0").classList.remove('activeWheel');
    document.getElementById("wb1").classList.remove('activeWheel');
    document.getElementById("wb2").classList.remove('activeWheel');
    document.getElementById("wb3").classList.remove('activeWheel');
    document.getElementById("wheelB").classList.remove('rotateAnimation');
    document.getElementById("wheelF").classList.remove('rotateAnimation');
    document.getElementById("wheelB").classList.remove('WBOut');
    document.getElementById("wheelF").classList.remove('WFOut');

    if (which == 0) {
        document.getElementById("wb0").classList.add('activeWheel');
    } else if (which == 1) {
        document.getElementById("wb1").classList.add('activeWheel');
    } else if (which == 2) {
        document.getElementById("wb2").classList.add('activeWheel');
    } else if (which == 3) {
        document.getElementById("wb3").classList.add('activeWheel');
    }

    setTimeout(() => {
        document.getElementById("wheelB").classList.add('rotateAnimation');
        document.getElementById("wheelF").classList.add('rotateAnimation');
    }
        , 100);

    setTimeout(() => {
        document.getElementById("bikeContainer").classList.add('bikeJump');
        document.getElementById("wheelB").classList.add('WBOut');
        document.getElementById("wheelF").classList.add('WFOut');
    }
        , 800);

    setTimeout(() => {
        document.getElementById("wheelB").style.cssText = 'display: none;';
        document.getElementById("wheelF").style.cssText = 'display: none;';
        document.getElementById("wheelB").classList.remove('WBOut');
        document.getElementById("wheelF").classList.remove('WFOut');
        document.getElementById("wheelB").classList.remove('rotateAnimation');
        document.getElementById("wheelF").classList.remove('rotateAnimation');
    }
        , 1300);

    setTimeout(() => {
        document.getElementById("wheelB").classList.add('WBIn');
        document.getElementById("wheelF").classList.add('WFIn');
        
       
        if (which == 0) {
            document.getElementById("wheelB").src="img/wheel1.png";
            document.getElementById("wheelF").src="img/wheel1.png";
        } else if (which == 1) {
            document.getElementById("wheelB").src="img/wheel2.png";
            document.getElementById("wheelF").src="img/wheel2.png";
        } else if (which == 2) {
            document.getElementById("wheelB").src="img/wheel3.png";
            document.getElementById("wheelF").src="img/wheel3.png";
        } else if (which == 3) {
            document.getElementById("wheelB").src="img/wheel4.png";
            document.getElementById("wheelF").src="img/wheel4.png";
        }
        document.getElementById("wheelB").style.cssText = 'display: block;';
        document.getElementById("wheelF").style.cssText = 'display: block;';
    }
        , 1400);

    setTimeout(() => {
        document.getElementById("wheelB").classList.remove('WBIn');
        document.getElementById("wheelF").classList.remove('WFIn');
        document.getElementById("bikeContainer").classList.remove('bikeJump');
    }
        , 2600);

}

function checkBtClick(){
    document.getElementById("leftOne").style.cssText = 'width: 0%;';
    document.getElementById("rightrightOne").style.cssText = 'width: 35%;';
    document.getElementById("bikeContainer").classList.add('goRight');
    document.getElementById("wheelContainer2").classList.add('goRight');
    document.getElementById("wheelContainer22").classList.add('goRight');
    document.getElementById("wheelContainer").style.cssText = 'display: none;';
    document.getElementById("text1").style.cssText = 'display: none;';
    document.getElementById("text1").style.cssText = 'display: none;';
    document.getElementById("buyBt").style.cssText = 'display: none;';
    document.getElementById("backBt").style.cssText = 'display: block;';
    document.getElementById("wheelB").classList.add('rotateAnimation');
    document.getElementById("wheelF").classList.add('rotateAnimation');
    setTimeout(() => {
        document.getElementById("wheelB").classList.remove('rotateAnimation');
        document.getElementById("wheelF").classList.remove('rotateAnimation');
    }
        , 1000);
}

function backClick(){
    document.getElementById("bikeContainer").classList.remove('goRight');
    document.getElementById("wheelContainer2").classList.remove('goRight');
    document.getElementById("wheelContainer22").classList.remove('goRight');
    document.getElementById("leftOne").style.cssText = 'width: 35%;';
    document.getElementById("rightrightOne").style.cssText = 'width: 0%;';
    document.getElementById("bikeContainer").style.cssText = 'left: 60%;';
    document.getElementById("wheelContainer2").style.cssText = 'left: 60%;';
    document.getElementById("wheelContainer22").style.cssText = 'left: 60%;';
    
    document.getElementById("backBt").style.cssText = 'display: none;';
    document.getElementById("wheelB").classList.add('rotateAnimation');
    document.getElementById("wheelF").classList.add('rotateAnimation');
    setTimeout(() => {
        document.getElementById("wheelB").classList.remove('rotateAnimation');
        document.getElementById("wheelF").classList.remove('rotateAnimation');
        document.getElementById("wheelContainer").style.cssText = 'display: block;';
        document.getElementById("text1").style.cssText = 'display: block;';
        document.getElementById("buyBt").style.cssText = 'display: block;';
    }
        , 400);
    setTimeout(() => {
        document.getElementById("wheelB").classList.remove('rotateAnimation');
        document.getElementById("wheelF").classList.remove('rotateAnimation');
    }
        , 1000);
}