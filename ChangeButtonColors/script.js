let allButtons = document.getElementsByTagName('button');

let copyAllButtons = [];
for(let i=0; i<allButtons.length; i++)
    copyAllButtons.push(allButtons[i].classList[1]); 

let buttonColors = {
    'Blue': 'btn-primary',
    'Red': 'btn-danger',
    'Green': 'btn-success',
    'Yellow': 'btn-warning'
};

function onColorChange(color) {
    if(color.value === 'Reset') 
        return buttonsReset();
    else if(color.value === 'Random')
        return buttonsRandom();
    
    return buttonsColor(color.value);
}

function buttonsColor(color) {
    for(let i=0; i<allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(buttonColors[color]);
    }
}

function buttonsReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for(let i=0; i<allButtons.length; i++) {
        let randomNumber = choices[Math.floor(Math.random() * 4)];
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(randomNumber);
    }
}