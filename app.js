import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
window.addEventListener('load', async() => {
    // fetch all dogs
    const dogsArray = await getDogs();
    console.log(dogsArray);

    for (const dog of dogsArray) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }

    // render and append all dog cards to the container

});
