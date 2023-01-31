const person = document.querySelector('.person')
const personTwo = document.querySelector('.person-2')
const personThree = document.querySelector('.person-3')
const body = document.querySelector('body')
const container = document.querySelector('.mountain-container');
const header = document.querySelector('h1')
const sun = document.querySelector('.sun')
const mountainContainer = document.querySelector('.mountain-container');
const stars = document.querySelectorAll('.star');
let done = false

container.addEventListener('mousemove', (e) => {
    person.style.left = `${e.screenX}px`;
    personTwo.style.left = `${e.screenX - 10}px`;
    personThree.style.left = `${e.screenX + 8}px`;
    header.style.top = '10px';
    if (done == false) {
        sun.style.bottom = '180px';
        done = true;
    }


    let firstPos = 0;
    let sunPos = 180; 
    document.addEventListener('scroll', () => {
        if (scrollY > firstPos){
            sunPos += 1;
        }
        else {
            sunPos -= 1;
        }
        if (sunPos > 190){
            sun.style.bottom = `${sunPos}px`;
        }
        sunPos=scrollY;

        if (scrollY > 470) {
            mountainContainer.style.backgroundColor = 'rgb(12, 21, 74)'
            mountainContainer.style.color = 'white';
            stars.forEach(star => star.style.visibility = 'visible');

        } else {
            mountainContainer.style.backgroundColor = 'rgb(199, 235, 255)'
            mountainContainer.style.color = 'rgb(12, 21, 74)';
            stars.forEach(star => star.style.visibility = 'hidden');
        }

    })

})



