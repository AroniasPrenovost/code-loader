
var codeBars = [
            "bar1", "bar2", "bar3", 
            "bar4", "bar5", "bar6", 
            "bar7", "bar8", "bar9", 
            "bar10", "bar11", "bar12", 
            "bar13", "bar14", "bar15", 
            "bar16", "bar17", "bar18", 
            "bar19", "bar20", "bar21", 
            "bar22", "bar23", "bar24", 
            "bar25", "bar26", "bar27", 
            "bar28", "bar29", "bar30", 
            "bar31", "bar32", "bar33", 
            "bar34", "bar35", "bar36", 
            "bar37", "bar38", "bar39", 
            "bar40", "bar41"
            ];



var barLengths = [
                6, 3, 6, 
                3, 7, 3, 
                2, 6, 4, 
                2, 4, 5, 
                4, 4, 2, 
                5, 5, 7, 
                6, 5, 1,
                4, 3, 2,
                1, 6, 2, 
                2, 5, 5, 
                2, 4, 3, 
                6, 4, 2, 
                4, 2, 5, 
                4, 6
                ];

var timeLengths = [
                720, 800, 800, 
                880, 880, 960, 
                1040, 1040, 1220, 
                1220, 1300, 1300, 
                1380, 1460, 1460, 
                1460, 1540, 1540, 
                1620, 1620, 1620,
                1700, 1700, 1780,
                1860, 1940, 2020, 
                2020, 2100, 2180, 
                2180, 2180, 2260, 
                2260, 2340, 2340, 
                2420, 2420, 2500, 
                2580, 2660
                ];

// removes div elements
setTimeout(function() {     
  setInterval(function() {
    var element = document.getElementById(codeBars[0]);
    element.outerHTML = "";
    delete element;
    codeBars.shift();
  }, 50); // runs every 50 milliseconds
}, 720);  // delays start time

// create pattern
function move() {
  var element = document.getElementById("bar1");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
move();

function move2() {
  var element = document.getElementById("bar2");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move2();
},120);


function move3() {
  var element = document.getElementById("bar3");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move3();
}, 180); //450);


function move4() {
  var element = document.getElementById("bar4");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move4();

}, 240);

function move5() {
  var element = document.getElementById("bar5");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move5();
}, 300);

function move6() {
  var element = document.getElementById("bar6");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 12) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move6();
}, 360);

function move7() {
  var element = document.getElementById("bar7");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move7();
}, 420);

function move8() {
  var element = document.getElementById("bar8");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move8();
}, 480);

function move9() {
  var element = document.getElementById("bar9");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move9();
}, 540);

function move10() {
  var element = document.getElementById("bar10");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move10();
}, 600);

function move11() {
  var element = document.getElementById("bar11");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move11();
}, 660);

function move12() {
  var element = document.getElementById("bar12");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move12();
}, 720);

function move13() {
  var element = document.getElementById("bar13");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 10) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move13();
}, 780);

function move14() {
  var element = document.getElementById("bar14");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move14();
}, 840);

function move15() {
  var element = document.getElementById("bar15");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move15();
}, 900);

function move16() {
  var element = document.getElementById("bar16");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move16();
}, 960);

function move17() {
  var element = document.getElementById("bar17");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move17();
}, 1020);

function move18() {
  var element = document.getElementById("bar18");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8  ) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move18();
}, 1080);

function move19() {
  var element = document.getElementById("bar19");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move19();
}, 1140);

function move20() {
  var element = document.getElementById("bar20");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move20();
}, 1200);

function move21() {
  var element = document.getElementById("bar21");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move21();
}, 1260);


function move22() {
  var element = document.getElementById("bar22");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move22();
}, 1320);

function move23() {
  var element = document.getElementById("bar23");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move23();
}, 1380);

function move24() {
  var element = document.getElementById("bar24");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move24();
}, 1440);

function move25() {
  var element = document.getElementById("bar25");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 9) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move25();
}, 1500);

function move26() {
  var element = document.getElementById("bar26");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move26();
}, 1560);

function move27() {
  var element = document.getElementById("bar27");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move27();
}, 1640);

function move28() {
  var element = document.getElementById("bar28");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move28();
}, 1640);

function move29() {
  var element = document.getElementById("bar29");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 10) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move29();
}, 1700);

function move30() {
  var element = document.getElementById("bar30");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move30();
}, 1700);

function move31() {
  var element = document.getElementById("bar31");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move31();
}, 1760);

function move32() {
  var element = document.getElementById("bar32");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move32();
}, 1760);

function move33() {
  var element = document.getElementById("bar33");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move33();
}, 1820);

function move34() {
  var element = document.getElementById("bar34");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 11) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move34();
}, 1820);

function move35() {
  var element = document.getElementById("bar35");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move35();
}, 1880);

function move36() {
  var element = document.getElementById("bar36");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move36();
}, 1880);

function move37() {
  var element = document.getElementById("bar37");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move37();
}, 1940);


function move38() {
  var element = document.getElementById("bar38");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move38();
}, 2000);


function move39() {
  var element = document.getElementById("bar39");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move39();
}, 2060);


function move40() {
  var element = document.getElementById("bar40");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move40();
}, 2120);

function move41() {
  var element = document.getElementById("bar41");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move41();
}, 2180);




var s = document.getElementById('code-loader').style;
s.opacity = 1;
(function fade(){
  (s.opacity-=.1)<0?s.display="none":setTimeout(fade,500)
}
)();

// remove the entire thing
setTimeout(function() {
var element = document.getElementById("code-container");
element.outerHTML = "";
delete element;
}, 2850); //2640);
