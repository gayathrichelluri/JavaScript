function generate() {
    var image = document.createElement('img');
    image.setAttribute('id','cat-image');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    
    document.getElementById('result').appendChild(image);
}

