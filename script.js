
// variables
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const guessContainer = document.getElementById('guess-container')
const playerImage = document.getElementById('player-image');
var divCounter = 1;

// list of suns players
const players = [
    { name: 'Devin Booker', position: 'G', number: '1', drafted: '2015', height: "6'6", college: 'Kentucky', image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png" },
    { name: 'Kevin Durant', position: 'F', number: '35', drafted: '2007', height: "6'11", college: 'Texas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png' },
    { name: 'Bradley Beal', position: 'G', number: '3', drafted: '2012', height: "6'4", college: 'Florida', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png' },
    { name: 'Grayson Allen', position: 'G', number: '8', drafted: '2018', height: "6'4", college: 'Duke', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png' },
    { name: 'Jusuf Nurkic', position: 'C', number: '20', drafted: '2014', height: "7'0", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png' },
    { name: "Royce O'Neale", position: 'F', number: '00', drafted: 'Undrafted', height: "6'4", college: 'Denver, Baylor', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png' },
    { name: 'David Roddy', position: 'F', number: '21', drafted: '2022', height: "6'4", college: 'Colorado State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631223.png' },
    { name: 'Josh Okogie', position: 'G', number: '2', drafted: '2018', height: "6'4", college: 'Georgia Tech', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png' },
    { name: 'Theo Maledon', position: 'G', number: '12', drafted: '2020', height: "6'4", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630177.png' },
    { name: 'Damion Lee', position: 'G-F', number: '10', drafted: '2018', height: "6'5", college: 'Drexel, Louisville', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627814.png' },
    { name: 'Bol Bol', position: 'C-F', number: '11', drafted: '2019', height: "7'3", college: 'Oregon', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629626.png' },
    { name: 'Drew Eubanks', position: 'F-C', number: '14', drafted: 'Undrafted', height: "6'9", college: 'Oregon State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png' },
    { name: 'Eric Gordon', position: 'G', number: '23', drafted: '2008', height: "6'3", college: 'Indiana', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201569.png' },
    { name: 'Nassir Little', position: 'F-G', number: '25', drafted: '2019', height: "6'5", college: 'UNC', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629642.png' },
    { name: 'Udoka Azubuike', position: 'C-F', number: '27', drafted: '2020', height: "6'10", college: 'Kansas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628962.png' },
    { name: 'Saben Lee', position: 'G', number: '38', drafted: '2020', height: "6'2", college: 'Vanderbilt', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630240.png' },
    { name: 'Keita Bates-Diop', position: 'F', number: '21', drafted: '2018', height: "6'8", college: 'Ohio State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628966.png' },
    { name: 'Jordan Goodwin', position: 'G', number: '0', drafted: '2021', height: "6'3", college: 'Saint Louis', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630692.png' },
    { name: 'Yuta Wantanabe', position: 'G-F', number: '18', drafted: '2018', height: "6'9", college: 'George Washington', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png' },
    { name: 'Chimezie Metu', position: 'C-F', number: '4', drafted: '2018', height: "6'10", college: 'Southern California', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629002.png' }
];

// function to get a random player from the array
function getRandomPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
}

// setting the correct guess, player image, and attempts on page load
const correctGuess = getRandomPlayer();
playerImage.src = correctGuess.image;
let attempts = 5;

// event listener that submits guess when user presses "Enter" key
nameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

nameInput.addEventListener('focus', function (event) {
    event.preventDefault();
    // You can also add additional logic here if needed
});

// event listener for when user presses submit
submitBtn.addEventListener('click', function () {

    // if that runs while user has attempts
    if (attempts > 0) {

        //variables
        const guessedName = nameInput.value.trim().toLowerCase().replace(/'/g, '');;
        const index = players.findIndex(player => player.name.trim().toLowerCase().replace(/'/g, '') === guessedName);
        const guessedPlayer = players[index];
        const messageText = document.getElementById('instruction-id')
        const validPlayer = players.find(player => player.name.toLowerCase().replace(/'/g, '') === guessedName);


        // if user enters nothing error handling
        if (guessedName === '') {
            alert('Please enter a name before submitting.');
            return;
        }

        if (validPlayer) {

            // if statement for correct answer
            if (guessedName === (correctGuess.name).toLowerCase().replace(/'/g, '')) {

                playerImage.classList.add('unveil')
                messageText.innerHTML = 'BANGGG!!!!'
                submitBtn.value = correctGuess.name;
                submitBtn.disabled = true;
                submitBtn.style.marginTop = '0';
                nameInput.style.display = 'none';

                const newGuessDiv = document.createElement('div');
                newGuessDiv.classList.add('categories-container', 'correct', 'unveil');
                newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.college}</div> <div class='category' id='draft-year'>${correctGuess.drafted}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
                guessContainer.appendChild(newGuessDiv);

                // else statement for incorrect answer
            } else {


                attempts--;
                const newGuessDiv = document.createElement('div');
                messageText.innerHTML = `Guesses left: ${attempts}...`;
                newGuessDiv.classList.add('categories-container', 'incorrect');
                newGuessDiv.innerHTML = `<div class='category' id='college${divCounter}'>${guessedPlayer.college}</div> <div class='category' id='draft-year${divCounter}'>${guessedPlayer.drafted}</div> <div class='category' id='height${divCounter}'>${guessedPlayer.height}</div> <div class='category' id='number${divCounter}'>${guessedPlayer.number}</div> <div class='category' id='position${divCounter}'>${guessedPlayer.position}</div> </p>`;
                guessContainer.appendChild(newGuessDiv);

                // creating height variables 
                const [guessedFeet, guessedInches] = guessedPlayer.height.split("'");
                const [correctFeet, correctInches] = correctGuess.height.split("'");
                const guessedFeetInt = parseInt(guessedFeet, 10) || 0;
                const guessedInchesInt = parseInt(guessedInches, 10) || 0;
                const correctFeetInt = parseInt(correctFeet, 10) || 0;
                const correctInchesInt = parseInt(correctInches, 10) || 0;
                const guessedTotalHeightInInches = guessedFeetInt * 12 + guessedInchesInt;
                const correctTotalHeightInInches = correctFeetInt * 12 + correctInchesInt;

                // creating position variables
                const positionWeights = {
                    "G": 1,
                    "G-F": 2,
                    "F-G": 3,
                    "F": 4,
                    "F-C": 5,
                    "C-F": 6,
                    "C": 7
                }

                // the hints if statements...
                // COLLEGE IF STATEMENT
                if (guessedPlayer.college === correctGuess.college) {
                    const college = document.getElementById(`college${divCounter}`);
                    college.classList.add('correct');
                }

                // DRAFT YEAR IF STATEMENTS
                if (guessedPlayer.drafted === correctGuess.drafted) {
                    const draftYear = document.getElementById(`draft-year${divCounter}`);
                    draftYear.classList.add('correct');
                }

                if (Math.abs(correctGuess.drafted - guessedPlayer.drafted) <= 3 && correctGuess.drafted !== guessedPlayer.drafted) {
                    const draftYear = document.getElementById(`draft-year${divCounter}`);
                    draftYear.classList.add('close');
                }

                // HEIGHT IF STATEMENTS
                if (guessedPlayer.height === correctGuess.height) {
                    const height = document.getElementById(`height${divCounter}`);
                    height.classList.add('correct');
                }

                if (Math.abs(correctTotalHeightInInches - guessedTotalHeightInInches) <= 3 && correctTotalHeightInInches !== guessedTotalHeightInInches) {
                    const height = document.getElementById(`height${divCounter}`);
                    height.classList.add('close');
                }

                // NUMBER IF STATEMENTS
                if (guessedPlayer.number === correctGuess.number) {
                    const number = document.getElementById(`number${divCounter}`);
                    number.classList.add('correct');
                }

                if (Math.abs(correctGuess.number - guessedPlayer.number) <= 3 && correctGuess.number !== guessedPlayer.number) {
                    const number = document.getElementById(`number${divCounter}`);
                    number.classList.add('close');
                }

                // POSITION IF STATEMENTS
                if (guessedPlayer.position === correctGuess.position) {
                    const position = document.getElementById(`position${divCounter}`);
                    position.classList.add('correct');
                }

                if (Math.abs(positionWeights[correctGuess.position] - positionWeights[guessedPlayer.position]) === 1 && guessedPlayer.position !== correctGuess.position) {
                    const position = document.getElementById(`position${divCounter}`);
                    position.classList.add('close');
                }

                divCounter++;

            }
        }

        else {
            alert('Player not found. Please try again.')
        }

    }

    if (attempts === 0) {

        const messageText = document.getElementById('instruction-id')

        messageText.innerHTML = `It was ${correctGuess.name}! Better luck next time!`;
        playerImage.classList.add('unveil')
        nameInput.disabled = true;
        submitBtn.disabled = true;

        const newGuessDiv = document.createElement('div');
        newGuessDiv.classList.add('categories-container', 'incorrect', 'unveil');
        newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.college}</div> <div class='category' id='draft-year'>${correctGuess.drafted}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
        guessContainer.appendChild(newGuessDiv);

    }

    nameInput.value = '';

});

console.log('Correct Guess:', correctGuess.name);

// function for reset button
document.getElementById('resetBtn').addEventListener('click', function () {
    location.reload();
});

const suggestionsList = document.getElementById('suggestions');
nameInput.addEventListener('input', function () {
    const inputText = nameInput.value.trim().toLowerCase();
    const matchingPlayers = players.filter(player => {
        const fullName = player.name.toLowerCase();
        return fullName.includes(inputText);
    });
    displaySuggestions(matchingPlayers);
});

function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';

    if (suggestions.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }

    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion.name;  // Assuming your player objects have a 'name' property
        li.addEventListener('click', () => {
            nameInput.value = suggestion.name;
            suggestionsList.style.display = 'none';
        });
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.autocomplete')) {
        suggestionsList.style.display = 'none';
    }
});