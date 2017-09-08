
function move() {
  var elem = document.getElementById("bar1");   
  var width = 1;
  var id = setInterval(frame, 8);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
move();

/*
setTimeout(function() {
var element = document.getElementById("bar1");
element.outerHTML = "";
delete element;
}, 720);


setTimeout(function() {
var element = document.getElementById("bar2");
element.outerHTML = "";
delete element;
}, 800);

setTimeout(function() {
var element = document.getElementById("bar3");
element.outerHTML = "";
delete element;
}, 800);

setTimeout(function() {
var element = document.getElementById("bar4");
element.outerHTML = "";
delete element;
}, 880);

setTimeout(function() {
var element = document.getElementById("bar5");
element.outerHTML = "";
delete element;
}, 880);

setTimeout(function() {
var element = document.getElementById("bar6");
element.outerHTML = "";
delete element;
}, 960);

setTimeout(function() {
var element = document.getElementById("bar7");
element.outerHTML = "";
delete element;
}, 1040);

setTimeout(function() {
var element = document.getElementById("bar8");
element.outerHTML = "";
delete element;
}, 1040);

setTimeout(function() {
var element = document.getElementById("bar9");
element.outerHTML = "";
delete element;
}, 1220);

setTimeout(function() {
var element = document.getElementById("bar10");
element.outerHTML = "";
delete element;
}, 1220);

setTimeout(function() {
var element = document.getElementById("bar11");
element.outerHTML = "";
delete element;
}, 1300);

setTimeout(function() {
var element = document.getElementById("bar12");
element.outerHTML = "";
delete element;
}, 1300);

setTimeout(function() {
var element = document.getElementById("bar13");
element.outerHTML = "";
delete element;
}, 1380);

setTimeout(function() {
var element = document.getElementById("bar14");
element.outerHTML = "";
delete element;
}, 1460);

setTimeout(function() {
var element = document.getElementById("bar15");
element.outerHTML = "";
delete element;
}, 1460);

setTimeout(function() {
var element = document.getElementById("bar16");
element.outerHTML = "";
delete element;
}, 1460);

setTimeout(function() {
var element = document.getElementById("bar17");
element.outerHTML = "";
delete element;
}, 1540);

setTimeout(function() {
var element = document.getElementById("bar18");
element.outerHTML = "";
delete element;
}, 1540);

setTimeout(function() {
var element = document.getElementById("bar19");
element.outerHTML = "";
delete element;
}, 1620);

setTimeout(function() {
var element = document.getElementById("bar20");
element.outerHTML = "";
delete element;
}, 1620);

setTimeout(function() {
var element = document.getElementById("bar21");
element.outerHTML = "";
delete element;
}, 1620);

setTimeout(function() {
var element = document.getElementById("bar22");
element.outerHTML = "";
delete element;
}, 1700);

setTimeout(function() {
var element = document.getElementById("bar23");
element.outerHTML = "";
delete element;
}, 1700);

setTimeout(function() {
var element = document.getElementById("bar24");
element.outerHTML = "";
delete element;
}, 1780);

setTimeout(function() {
var element = document.getElementById("bar25");
element.outerHTML = "";
delete element;
}, 1860);

setTimeout(function() {
var element = document.getElementById("bar26");
element.outerHTML = "";
delete element;
}, 1940);

setTimeout(function() {
var element = document.getElementById("bar27");
element.outerHTML = "";
delete element;
}, 1020);

setTimeout(function() {
var element = document.getElementById("bar28");
element.outerHTML = "";
delete element;
}, 1020);

setTimeout(function() {
var element = document.getElementById("bar29");
element.outerHTML = "";
delete element;
}, 1100);


*/

/*
setTimeout(function() {
var element = document.getElementById("bar30");
element.outerHTML = "";
delete element;
}, 1250);

setTimeout(function() {
var element = document.getElementById("bar31");
element.outerHTML = "";
delete element;
}, 1250);

setTimeout(function() {
var element = document.getElementById("bar32");
element.outerHTML = "";
delete element;
}, 1250);

setTimeout(function() {
var element = document.getElementById("bar33");
element.outerHTML = "";
delete element;
}, 1260);

setTimeout(function() {
var element = document.getElementById("bar34");
element.outerHTML = "";
delete element;
}, 1260);


setTimeout(function() {
var element = document.getElementById("bar35");
element.outerHTML = "";
delete element;
}, 1340);

setTimeout(function() {
var element = document.getElementById("bar36");
element.outerHTML = "";
delete element;
}, 1340);

setTimeout(function() {
var element = document.getElementById("bar37");
element.outerHTML = "";
delete element;
}, 1420);

setTimeout(function() {
var element = document.getElementById("bar38");
element.outerHTML = "";
delete element;
}, 1420);

setTimeout(function() {
var element = document.getElementById("bar39");
element.outerHTML = "";
delete element;
}, 1420);

setTimeout(function() {
var element = document.getElementById("bar40");
element.outerHTML = "";
delete element;
}, 1500);

setTimeout(function() {
var element = document.getElementById("bar41");
element.outerHTML = "";
delete element;
}, 1580);
*/

function move2() {
  var elem = document.getElementById("bar2");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move2();
},120);

function move3() {
  var elem = document.getElementById("bar3");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move3();

}, 180); //450);


function move4() {
  var elem = document.getElementById("bar4");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move4();

}, 240);

function move5() {
  var elem = document.getElementById("bar5");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move5();
}, 300);

function move6() {
  var elem = document.getElementById("bar6");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move6();
}, 360);

function move7() {
  var elem = document.getElementById("bar7");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move7();
}, 420);

function move8() {
  var elem = document.getElementById("bar8");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move8();
}, 480);

function move9() {
  var elem = document.getElementById("bar9");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move9();
}, 540);

function move10() {
  var elem = document.getElementById("bar10");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move10();
}, 600);

function move11() {
  var elem = document.getElementById("bar11");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move11();
}, 660);

function move12() {
  var elem = document.getElementById("bar12");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move12();
}, 720);

function move13() {
  var elem = document.getElementById("bar13");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move13();
}, 780);

function move14() {
  var elem = document.getElementById("bar14");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move14();
}, 840);

function move15() {
  var elem = document.getElementById("bar15");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move15();
}, 900);




function move16() {
  var elem = document.getElementById("bar16");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move16();
}, 960);


function move17() {
  var elem = document.getElementById("bar17");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move17();
}, 1020);


function move18() {
  var elem = document.getElementById("bar18");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 7) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move18();
}, 1080);

function move19() {
  var elem = document.getElementById("bar19");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move19();
}, 1140);

function move20() {
  var elem = document.getElementById("bar20");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move20();
}, 1200);

function move21() {
  var elem = document.getElementById("bar21");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move21();
}, 1260);


function move22() {
  var elem = document.getElementById("bar22");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 8) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move22();
}, 1320);

function move23() {
  var elem = document.getElementById("bar23");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move23();
}, 1380);

function move24() {
  var elem = document.getElementById("bar24");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move24();
}, 1440);

function move25() {
  var elem = document.getElementById("bar25");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move25();
}, 1500);

function move26() {
  var elem = document.getElementById("bar26");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move26();
}, 1560);

function move27() {
  var elem = document.getElementById("bar27");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move27();
}, 1640);


function move28() {
  var elem = document.getElementById("bar28");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move28();
}, 1640);

function move29() {
  var elem = document.getElementById("bar29");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move29();
}, 1700);

function move30() {
  var elem = document.getElementById("bar30");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move30();
}, 1700);

function move31() {
  var elem = document.getElementById("bar31");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move31();
}, 1760);

function move32() {
  var elem = document.getElementById("bar32");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move32();
}, 1760);

function move33() {
  var elem = document.getElementById("bar33");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move33();
}, 1820);

function move34() {
  var elem = document.getElementById("bar34");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 6) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move34();
}, 1820);

function move35() {
  var elem = document.getElementById("bar35");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 3) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move35();
}, 1880);

function move36() {
  var elem = document.getElementById("bar36");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move36();
}, 1880);

function move37() {
  var elem = document.getElementById("bar37");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move37();
}, 1940);


function move38() {
  var elem = document.getElementById("bar38");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 2) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move38();
}, 2000);


function move39() {
  var elem = document.getElementById("bar39");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move39();
}, 2060);


function move40() {
  var elem = document.getElementById("bar40");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 5) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move40();
}, 2120);

function move41() {
  var elem = document.getElementById("bar41");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 4) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
setTimeout(function() {
  move41();
}, 2180);

// remove the entire thing
setTimeout(function() {
var element = document.getElementById("container");
element.outerHTML = "";
delete element;
}, 2500);
