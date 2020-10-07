const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let btnText = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let copyBtnText = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function copyOfBtnText() {
    for(let i=0; i<3; i++)
        for(let j=0; j<3; j++)
            copyBtnText[i][j] = btnText[i][j];
}

let rotate = [[0,1], [0,2], [1,2], [0,0], [2,2], [1,0], [2,0], [2,1]];

let buttonContainer = document.getElementById('btns');

function createButtons() {
    let index = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            let btn = document.createElement('button');
            btn.id = `btn${range[index++]}`;
            btn.innerHTML = btnText[i][j];
            buttonContainer.appendChild(btn);
        }
    }
}

createButtons();

document.querySelector('#btn5').addEventListener('click', rotateButtons);

function rotateButtons() {
    rotateRange();
    
    let index = 0;
    for(let i=0; i<3; i++)
        for(let j=0; j<3; j++)
            document.querySelector(`#btn${range[index++]}`).innerHTML = btnText[i][j];
}

function rotateRange() {
    let curr = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(i===1 && j===1)
                continue;
            btnText[rotate[curr][0]][rotate[curr][1]] = copyBtnText[i][j];
            curr++;
        }
    }
    copyOfBtnText();
}
