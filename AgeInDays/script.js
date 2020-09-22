function getAgeInDays() {
    var year = prompt('Which year were you born');
    var ageInDays = (2020 - year) * 365;

    var text = document.createTextNode('You are ' + ageInDays + ' days old!');

    var h3 = document.createElement('h3');
    h3.setAttribute('id', 'age');
    h3.appendChild(text);
    document.getElementById('result').appendChild(h3);

}

function reset() {
    document.getElementById('age').remove();
}