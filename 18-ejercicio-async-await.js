const $btnDog = document.querySelector('#btnDog')
const $divDogs = document.querySelector('#Dogs')

$btnDog.addEventListener('click', () => {
    const resp = await fetch ('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();

    const imgDog = document.createElement('img');
    imgDog.src = data[0].url;
    imgDog.width = '300';
    $divDogs.appendChild(imgDog);
});
