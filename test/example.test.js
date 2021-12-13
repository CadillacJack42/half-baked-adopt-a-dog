// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return a dom element that contains an anchor tag, a div, a p and an img', (expect) => {
    const dog = { id: 1, created_at: '2021-11-18T22:50:00+00:00', name: 'Bennie', age: 2, breed: 'beagle', description: 'Puggo big ol extremely cuuuuuute noodle horse shoober, porgo doge woofer. Snoot maximum borkdrive pupperino very jealous pupper woofer you are doin me a concern pupperino shibe heckin, corgo aqua doggo doggo long doggo bork puggo. H*ck long doggo adorable doggo super chub fat boi, waggy wags thicc. Doggo shooberino such treat, lotsa pats.' };

    const expected = `<a href="./dogs/?id=1"><div class="dog-card"><p>Bennie</p><img src="./assets/beagle.jpeg"></div></a>`;

    const actual = renderDogCard(dog);

    expect.equal(actual.outerHTML, expected);
});

test('should return a dom element that contains ', (expect) => {
    const dog = { id: 1, created_at: '2021-11-18T22:50:00+00:00', name: 'Bennie', age: 2, breed: 'beagle', description: 'Puggo big ol extremely cuuuuuute noodle horse shoober, porgo doge woofer. Snoot maximum borkdrive pupperino very jealous pupper woofer you are doin me a concern pupperino shibe heckin, corgo aqua doggo doggo long doggo bork puggo. H*ck long doggo adorable doggo super chub fat boi, waggy wags thicc. Doggo shooberino such treat, lotsa pats.' };

    const expected = `<div class="dog-detail"><p class="name">${dog.name}</p><img src="../assets/${dog.breed}.jpeg"><div class="age-and-breed"><p class="age">${dog.age} years old</p><p class="breed">${dog.breed}</p></div><p class="description">${dog.description}</p></div>` ;

    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected);
});
