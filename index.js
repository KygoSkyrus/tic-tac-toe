var currentplayer;

const choice = document.querySelector('.choice');
const ree = document.getElementById('restart');
const begin = document.getElementById('begin');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

var result = document.getElementById('status');

//restart
ree.addEventListener('click', restart);
function restart() {
    choice.style.display = "flex";
    one.innerHTML = "";
    two.innerHTML = "";
    three.innerHTML = "";
    four.innerHTML = "";
    five.innerHTML = "";
    six.innerHTML = "";
    seven.innerHTML = "";
    eight.innerHTML = "";
    nine.innerHTML = "";
    xoro();
}

//begin aka PLAY button
begin.addEventListener('click', function () {
    choice.style.display = "none";
});

function xoro() {
    var arr = [];
    //choosing players from switch buttons
    if (document.getElementById('x').checked) {
        currentplayer = "X";
        result.innerHTML = "X will play first move";
    } else {
        currentplayer = "O";
        result.innerHTML = "O will play first move";
    }

    //eventlistener when square is clicked
    const sec = document.querySelectorAll('.cell');
    sec.forEach(cell => cell.addEventListener('click', run));

    //to remove eventlistener when clicked on the clicked celll/square
    function rmvEVENTlistener() {
        sec.forEach(cell => cell.removeEventListener('click', run));
    }

    //main function which runs when a cell is clicked
    function run(c) {
        const atttrvalue = c.target.getAttribute('id');

        if (currentplayer == "X") {
            //add values only if the cell is empty
            if (document.getElementById(atttrvalue).innerHTML == '') {
                document.getElementById(atttrvalue).innerHTML = "X";
                currentplayer = "O";
                result.innerHTML = "its O's turn";
            }
            arr.push(atttrvalue);
            checkifwon();
        } else {
            if (document.getElementById(atttrvalue).innerHTML == '') {
                document.getElementById(atttrvalue).innerHTML = "O";
                currentplayer = "X";
                result.innerHTML = "its X's turn";
            }
            arr.push(atttrvalue);
            checkifwon();
        }
    }

    function checkifwon() {
        if ((one.innerHTML === "X" && two.innerHTML === "X" && three.innerHTML === "X") ||
            (four.innerHTML === "X" && five.innerHTML === "X" && six.innerHTML === "X") ||
            (seven.innerHTML === "X" && eight.innerHTML === "X" && nine.innerHTML === "X") ||
            (one.innerHTML === "X" && four.innerHTML === "X" && seven.innerHTML === "X") ||
            (two.innerHTML === "X" && five.innerHTML === "X" && eight.innerHTML === "X") ||
            (three.innerHTML === "X" && six.innerHTML === "X" && nine.innerHTML === "X") ||
            (one.innerHTML === "X" && five.innerHTML === "X" && nine.innerHTML === "X") ||
            (three.innerHTML === "X" && five.innerHTML === "X" && seven.innerHTML === "X")) {
            rmvEVENTlistener();
            result.innerHTML = "X has won";
        } else if ((one.innerHTML === "O" && two.innerHTML === "O" && three.innerHTML === "O") ||
            (four.innerHTML === "O" && five.innerHTML === "O" && six.innerHTML === "O") ||
            (seven.innerHTML === "O" && eight.innerHTML === "O" && nine.innerHTML === "O") ||
            (one.innerHTML === "O" && four.innerHTML === "O" && seven.innerHTML === "O") ||
            (two.innerHTML === "O" && five.innerHTML === "O" && eight.innerHTML === "O") ||
            (three.innerHTML === "O" && six.innerHTML === "O" && nine.innerHTML === "O") ||
            (one.innerHTML === "O" && five.innerHTML === "O" && nine.innerHTML === "O") ||
            (three.innerHTML === "O" && five.innerHTML === "O" && seven.innerHTML === "O")) {
            rmvEVENTlistener();
            result.innerHTML = "O has won";
        } else if (arr.length == 9) {
            result.innerHTML = "Draw";
        }
    }
}