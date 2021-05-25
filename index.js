// disable scrolling 
document.body.style.overflow = 'hidden';

////////////////////
//
// setInterval helper 
//
////////////////////

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {
        callback();
        if (++x === repetitions) {
            window.clearInterval(intervalID);
        }
    }, delay);
}

////////////////////
//
// codeblock generating function 
//
////////////////////

var outer = document.getElementsByClassName('outer-animation')[0];
var animationContainer = document.getElementsByClassName('inner-animation')[0];

function codeBlocks(int, count) {
    var div = document.createElement('div');
    div.className = 'line';
    for (var i = 0; i < int; i++) {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'bar';
        if (i < 1) {
            if (count % 1 === 0) {
                innerDiv.className += ' margin-small';
            }
            if (count % 2 === 0) {
                innerDiv.className += ' margin-medium';
            }
            if (count % 3 === 0) {
                innerDiv.className += ' margin-large';
            }
        }
        div.append(innerDiv);
    }
    animationContainer.append(div);
}

// # of blocks in each row of 'code'  
var blockMap = [1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 3, 2, 1];
for (var i = 0; i < blockMap.length; i++) {
    codeBlocks(blockMap[i], i);
}

// animate code bars into visibility 
var barCount = 0
var speed = 80;
var bars = document.getElementsByClassName('bar');
var prev = 100;
var random;
setIntervalX(function () {
    random = Math.floor(Math.random() * 26) + 16;
    if (random > prev) { random = (random - 3); }
    bars[barCount].style.width = (random + 'px');
    prev = random;
    barCount++;
}, speed, bars.length);

////////////////////
//
// animation removal
//
////////////////////

// minimize height of block container 
setTimeout(function () {
    document.getElementsByClassName('animated-block')[0].style.height = 0;
}, 250);

setTimeout(function () {
    outer.style.opacity = 0;
}, 2500);

setTimeout(function () {
    outer.style.display = 'none';
    document.body.style.overflow = 'visible';
}, 4500);
