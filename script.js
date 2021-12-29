const muscleExercice = {
    'A': '10 push ups',
    'B': '15 Air squat',
    'C': '50m Alligator Walk',
    'D': '20 Box jump',
    'E': '20 Burpees',
    'F': '100 Double-under',
    'G': '200 Single-under',
    'H': '15 Pistol squat',
    'I': '15 Pull ups',
    'J': '15 Bulgarian Split Squat',
    'K': '35 sit-ups',
    'L': '50 Crunch',
    'M': '35 Toes to bar',
    'N': '500m Run',
    'O': '15 Archer push ups',
    'P': '15 Jackknife push-ups',
    'Q': '30 Mountain climbers',
    'R': '20 Jump squat',
    'S': '20 Lunge',
    'T': '15 Diamond Push-Up',
    'U': '20 Speed Lunge',
    'V': '1" Single-Under',
    'W': '2" Double-under',
    'X': "15 Spiderman Crawl",
    'Y': '1" Hollow Rocks',
    'Z': '15 Arch Hold'
}
// Ground sheet, skipping rope, box, drawbar, 
const nameInput = document.querySelector('#name');
const submitBeginner = document.querySelector('#beginner');
const submitInter = document.querySelector('#intermediate');
const submitPro = document.querySelector('#athlete');
const result = document.querySelector('.result');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

let round = 1;
let p = document.createElement("div");
p.className = 'result';
card.appendChild(p);
const regex = /[A-Z]/g;
let numberOfRound = document.createElement("div");
card.appendChild(numberOfRound);

function generateRandomWOD() {
    let splitName = nameInput.value.split('');
    splitName.forEach(element => {
            for (const [key, value] of Object.entries(muscleExercice)) {
                if(element.toUpperCase() === key) {
                    p.innerHTML += `<p>${value}</p>`
                }
            }
    })
    
}

submitBeginner.addEventListener('click', e => {
    addScroll()
    clearHTML();
    generateRandomWOD();
    begginer();
    e.preventDefault();
})

submitInter.addEventListener('click', e => {
    addScroll()
    clearHTML();
    generateRandomWOD();
    inter();
    e.preventDefault();
})

submitPro.addEventListener('click', e => {
    addScroll()
    clearHTML();
    generateRandomWOD();
    pro();
    e.preventDefault();
})


function clearHTML() {
    if(p,numberOfRound) {
        p.innerHTML = ``;
        numberOfRound.innerHTML = ``;
    }    
}

function begginer() {
    if(nameInput.value) {
        let begin = round+1;
        numberOfRound.innerHTML = `<p>Number of round : ${begin}</p>`
    } else {
        clearHTML();
    }  
}

function inter() {
    if(nameInput.value) {
        let begin = Math.floor(Math.random() * (5 - 3) + 3);
        numberOfRound.innerHTML = `<p>Number of round : ${begin}</p>`
    } else {
        clearHTML();
    }  
}

function pro() {
    if(nameInput.value) {
        let begin = Math.floor(Math.random() * (8 - 5) + 5);
        numberOfRound.innerHTML = `<p>Number of round : ${begin}</p>`
    } else {
        clearHTML();
    }  
}

function addScroll() {
    if(nameInput.value.length > 12) {
        container.classList.add('scroll')
    } else {
        container.classList.remove('scroll')
    }
}