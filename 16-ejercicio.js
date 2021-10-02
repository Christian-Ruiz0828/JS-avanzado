const $btnDog = document.querySelector('#btnDog')
const $divDogs = document.querySelector('#Dogs')

$btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data =>{
            console.log(data);
            const img = document.createElement('img');
            img.src = data.message;
            $divDogs.appendChild(img);
        });
});