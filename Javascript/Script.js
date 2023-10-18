
const nameElement = document.getElementById("name");
const eyecolorElement = document.getElementById("eyecolor"); 
const bornElement = document.getElementById("born");
const imageElement = document.getElementById("image").querySelector("img"); // Targeting the img element

const button = document.querySelector(".getRandomCharacter");
button.addEventListener('click', (e) => {
    e.preventDefault();

    fetch("https://akabab.github.io/starwars-api/api/all.json")
        .then(response => response.json())
        .then(characters => {
            const randomCharacter = getRandomElement(characters);

            nameElement.innerHTML = randomCharacter['name'];
            eyecolorElement.innerHTML = randomCharacter['eyeColor'];
            bornElement.innerHTML = randomCharacter['born'];
            imageElement.src = randomCharacter['image']; // Set the src attribute of the img element

        })
        .catch(error => console.error('Error fetching data:', error));

    function getRandomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
});
