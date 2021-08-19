const dinoName = document.getElementById('dinoName');

document.getElementById('btnLoad').addEventListener('click', function() {
    getDinoName();
    getDinoImage();
});

async function getDinoName() {
    const response = await fetch('/dinoname')
    const data = await response.json();
    const fullName = data[0].join(' ');
    dinoName.textContent = fullName;
}

async function getDinoImage() {
    const response = await fetch('/dinoimage')
    const data = await response.json() 
    let dinoImage = data;
    let randomImageUrl = dinoImage.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl;
    console.log(randomImageUrl);

    if(document.getElementById('dinoImage') !== null) {
        document.getElementById('dinoImage').remove();
    }

    let img = document.createElement('img')
    img.id = 'dinoImage'
    img.src = randomImageUrl
    img.alt = '';
    document.querySelector('body').appendChild(img)
}