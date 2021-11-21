import fillSquare from './components/2Dfill.js';
import Tview from './components/Tview.js';

const main = document.getElementById('main');
const ctx = main.getContext('2d');
const vwTest = document.getElementById('vwTest');
const vwCtx = vwTest.getContext('2d');

var area = [];
var rows = main.clientWidth;
var columns = main.clientHeight;

main.width = main.clientWidth;//question? fix bug inregular pos, why needed have the same with client
main.height = main.clientHeight;
//console.log(main.clientWidth + " "+ vwTest.clientWidth);//no one difference 

vwTest.width = main.clientWidth;// test receive main
vwTest.height = main.clientWidth;

area = fillSquare({ a: area, r: rows, c: columns });
Tview({ a: area, r: rows, c: columns }, vwCtx);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    // console.log(canvas.width); question? Why is differ from clientW?
    // console.log(canvas.clientWidth);
    return {
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
    };
}

var cntrlIsPressed = false;
document.addEventListener('mousedown', function () {
    cntrlIsPressed = true;
});

document.addEventListener('mouseup', function (event) {
    cntrlIsPressed = false;
});

main.addEventListener('mousemove', event => {

    let pos = getMousePos(main, event);
    console.log(pos);

    console.log( area[pos.x][pos.y]);

    document.getElementById('viewAEL').innerHTML = area[pos.x][pos.y];

    if (cntrlIsPressed == true) {
        let buffer = '■';
        ctx.font = "16px Arial";
        ctx.fillText(buffer, pos.x, pos.y);
        area[pos.x][pos.y] = buffer;
    }
});
