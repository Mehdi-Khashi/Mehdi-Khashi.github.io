var i = 0;

document.getElementById('product-img').style.cssText += ' top: 35vh; right: 25vw; filter: blur(0px); scale: 2.38; transition: all 4s; ';

setTimeout(() => {
    animation();
}
    , 2000);


function animation() {
    if (i == 0) {

        document.getElementById('product-img').style.cssText += 'top: 70vh; right: 5vw; filter: blur(3px); scale: 1;';
        document.getElementById('next-img').style.cssText += ' top: 35vh; right: 25vw; filter: blur(0px); scale: 2.38;';
        document.getElementById('greenBg').style.cssText += 'width: 0;';
        document.getElementById('pinkBg').style.cssText += 'width: 100vw;';
        document.getElementById('prev-img').style.cssText += 'top: 8vh; ';
        setTimeout(() => {

            document.getElementById('product-img').style.cssText += 'z-index: 4;';
            document.getElementById('next-img').style.cssText += 'z-index: 5;';
            document.getElementById('prev-img').style.cssText += ' z-index: 6;';
        }
            , 2000);

        i = 1;
        setTimeout(() => {
            animation();
        }
            , 6000);

    } else if (i == 1) {

        document.getElementById('product-img').style.cssText += 'top: 8vh;';
        document.getElementById('next-img').style.cssText += 'top: 70vh; right: 5vw; filter: blur(3px); scale: 1;';
        document.getElementById('prev-img').style.cssText += ' top: 40vh; right: 30vw; filter: blur(0px); scale: 2.38;';
        document.getElementById('pinkBg').style.cssText += 'width: 0;';
        document.getElementById('whiteBg').style.cssText += 'width: 100vw;';
        setTimeout(() => {

            document.getElementById('product-img').style.cssText += 'z-index: 6;';
            document.getElementById('next-img').style.cssText += 'z-index: 4;';
            document.getElementById('prev-img').style.cssText += ' z-index: 5;';
            
        }
            , 2000);

        i = 2;
        setTimeout(() => {
            document.getElementById('whiteBg').style.cssText += 'right:0; left:unset;';
            animation();
        }
            , 6000);

    } else if (i == 2) {

        document.getElementById('product-img').style.cssText += ' top: 35vh; right: 25vw; filter: blur(0px); scale: 2.38;  transition: all 4s; ';
        document.getElementById('next-img').style.cssText += 'top: 8vh; ';
        document.getElementById('prev-img').style.cssText += 'top: 70vh; right: 5vw; filter: blur(3px); scale: 1;  ';
        document.getElementById('whiteBg').style.cssText += 'width: 0;';
            document.getElementById('greenBg').style.cssText += 'width: 100vw;';
        setTimeout(() => {
            
            document.getElementById('product-img').style.cssText += 'z-index: 5;';
            document.getElementById('next-img').style.cssText += 'z-index: 6;';
            document.getElementById('prev-img').style.cssText += ' z-index: 4;';
           
        }
            , 2000);

        i = 0;
        setTimeout(() => {
            document.getElementById('whiteBg').style.cssText += 'left:0; right:unset;';
            animation();
        }
            , 6000);

    }

}