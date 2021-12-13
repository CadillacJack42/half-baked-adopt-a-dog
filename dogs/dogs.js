import { renderDogDetail } from '../render-utils.js';
import { getDog } from '../fetch-utils.js';

window.addEventListener('load', async() => {

    const dogContainerEl = document.getElementById('dog-container');

    const id = new URLSearchParams(window.location.search).get('id');
    
    const dog = await getDog(id);
    
    const dogEl = renderDogDetail(dog);

    dogContainerEl.append(dogEl);
});

