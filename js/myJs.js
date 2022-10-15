function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    // console.log(coor);
    // document.getElementById("movethis").style.top = document.getElementById("movethis").getBoundingClientRect().top - 15 + 'px';
    if(y < 400){
        document.getElementById("movethis").style.top = 24 +'%';
    }else if(y < 560 ){
        document.getElementById("movethis").style.top = 30 +'%';
    }else if(y > 570 ){
        document.getElementById("movethis").style.top = 34 +'%';
    }


    if(x < 660 ){
        document.getElementById("movethis").style.left = 30 +'%';
    }else if(x < 900){
        document.getElementById("movethis").style.left = 34 +'%';
    }else if(x > 900){
        document.getElementById("movethis").style.left = 38 +'%';
    }
   
  }
  
  function clearCoor() {
    document.getElementById("movethis").style.top = 30 +'%';
    document.getElementById("movethis").style.left = 34 +'%';
  }