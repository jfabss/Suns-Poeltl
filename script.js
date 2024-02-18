
// global variables
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const guessContainer = document.getElementById('guess-container')
const playerImage = document.getElementById('player-image');
const messageText = document.getElementById('instruction-id')
var divCounter = 1;

// list of suns players
const players = [
    { name: 'Devin Booker', position: 'G', number: '1', drafted: '2015', height: "6'6", college: 'Kentucky', image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png" },
    { name: 'Kevin Durant', position: 'F', number: '35', drafted: '2007', height: "6'11", college: 'Texas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png' },
    { name: 'Bradley Beal', position: 'G', number: '3', drafted: '2012', height: "6'4", college: 'Florida', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png' },
    { name: 'Grayson Allen', position: 'G', number: '8', drafted: '2018', height: "6'4", college: 'Duke', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png' },
    { name: 'Jusuf Nurkic', position: 'C', number: '20', drafted: '2014', height: "7'0", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png' },
    { name: "Royce O'Neale", position: 'F', number: '00', drafted: '2017', height: "6'4", college: 'Denver, Baylor', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png' },
    { name: 'David Roddy', position: 'F', number: '21', drafted: '2022', height: "6'4", college: 'Colorado State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631223.png' },
    { name: 'Josh Okogie', position: 'G', number: '2', drafted: '2018', height: "6'4", college: 'Georgia Tech', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png' },
    { name: 'Theo Maledon', position: 'G', number: '12', drafted: '2020', height: "6'4", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630177.png' },
    { name: 'Damion Lee', position: 'G-F', number: '10', drafted: '2018', height: "6'5", college: 'Drexel, Louisville', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627814.png' },
    { name: 'Bol Bol', position: 'C-F', number: '11', drafted: '2019', height: "7'3", college: 'Oregon', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629626.png' },
    { name: 'Drew Eubanks', position: 'F-C', number: '14', drafted: '2018', height: "6'9", college: 'Oregon State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png' },
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

// event listener for when user presses submit
submitBtn.addEventListener('click', function () {

    // if statement that runs while user has attempts
    if (attempts > 0) {

        // variables
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

        // if user guesses a valid player
        if (validPlayer) {

            // if statement for correct answer
            if (guessedName === (correctGuess.name).toLowerCase().replace(/'/g, '')) {

                // changes to HTML / styles
                playerImage.classList.add('unveil')
                messageText.innerHTML = 'BANGGG!!!!'
                submitBtn.value = correctGuess.name;
                submitBtn.disabled = true;
                submitBtn.style.marginTop = '0';
                nameInput.style.display = 'none';

                // creating the correct guess clues container
                const newGuessDiv = document.createElement('div');
                newGuessDiv.classList.add('categories-container', 'correct', 'unveil');
                newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.college}</div> <div class='category' id='draft-year'>${correctGuess.drafted}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
                guessContainer.appendChild(newGuessDiv);
            }

            // else statement for incorrect answer
            else {

                // subtracting 1 from attempts + HTML / styles changes
                attempts--;
                const newGuessDiv = document.createElement('div');
                messageText.innerHTML = `Guesses left: ${attempts}...`;

                // creating clues container for the guess
                newGuessDiv.classList.add('categories-container', 'incorrect');
                newGuessDiv.innerHTML = `<div class='category' id='college${divCounter}'>${guessedPlayer.college}</div> <div class='category' id='draft-year${divCounter}'>${guessedPlayer.drafted}</div> <div class='category' id='height${divCounter}'>${guessedPlayer.height}</div> <div class='category' id='number${divCounter}'>${guessedPlayer.number}</div> <div class='category' id='position${divCounter}'>${guessedPlayer.position}</div> </p>`;
                guessContainer.appendChild(newGuessDiv);

                // creating height + position variables for comparison 
                const [guessedFeet, guessedInches] = guessedPlayer.height.split("'");
                const [correctFeet, correctInches] = correctGuess.height.split("'");
                const guessedFeetInt = parseInt(guessedFeet, 10) || 0;
                const guessedInchesInt = parseInt(guessedInches, 10) || 0;
                const correctFeetInt = parseInt(correctFeet, 10) || 0;
                const correctInchesInt = parseInt(correctInches, 10) || 0;
                const guessedTotalHeightInInches = guessedFeetInt * 12 + guessedInchesInt;
                const correctTotalHeightInInches = correctFeetInt * 12 + correctInchesInt;
                const positionWeights = {
                    "G": 1,
                    "G-F": 12,
                    "F-G": 21,
                    "F": 2,
                    "F-C": 23,
                    "C-F": 32,
                    "C": 3
                };
                const guessedPlayerPositionNumber = positionWeights[guessedPlayer.position];
                const correctPlayerPositionNumber = positionWeights[correctGuess.position];
                const guessedPlayerPositionString = guessedPlayerPositionNumber.toString();
                const correctPlayerPositionString = correctPlayerPositionNumber.toString();

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

                if (Math.abs(correctGuess.drafted - guessedPlayer.drafted) <= 2 && correctGuess.drafted !== guessedPlayer.drafted) {
                    const draftYear = document.getElementById(`draft-year${divCounter}`);
                    draftYear.classList.add('close');
                }

                // HEIGHT IF STATEMENTS
                if (guessedPlayer.height === correctGuess.height) {
                    const height = document.getElementById(`height${divCounter}`);
                    height.classList.add('correct');
                }

                if (Math.abs(correctTotalHeightInInches - guessedTotalHeightInInches) <= 2 && correctTotalHeightInInches !== guessedTotalHeightInInches) {
                    const height = document.getElementById(`height${divCounter}`);
                    height.classList.add('close');
                }

                // NUMBER IF STATEMENTS
                if (guessedPlayer.number === correctGuess.number) {
                    const number = document.getElementById(`number${divCounter}`);
                    number.classList.add('correct');
                }

                if (Math.abs(correctGuess.number - guessedPlayer.number) <= 2 && correctGuess.number !== guessedPlayer.number) {
                    const number = document.getElementById(`number${divCounter}`);
                    number.classList.add('close');
                }

                // POSITION IF STATEMENTS
                let containsPosition = false;

                for (let i = 0; i < correctPlayerPositionString.length; i++) {
                    const digit = correctPlayerPositionString[i];

                    if (guessedPlayerPositionString.includes(digit)) {
                        containsPosition = true;
                        break;
                    }
                }

                if (guessedPlayer.position === correctGuess.position) {
                    const position = document.getElementById(`position${divCounter}`);
                    position.classList.add('correct');
                }

                if (containsPosition && guessedPlayer.position !== correctGuess.position) {
                    const position = document.getElementById(`position${divCounter}`);
                    position.classList.add('close');
                }

                // adding 1 to guess counter
                divCounter++;
            }
        }

        // alerting user if invalid player is entered
        else {
            alert('Player not found. Please try again.')
        }
    }

    // if the user runs out of attempts
    if (attempts === 0) {

        // changes to HTML and styles
        messageText.innerHTML = `It was ${correctGuess.name}! Better luck next time!`;
        playerImage.classList.add('unveil')
        nameInput.disabled = true;
        submitBtn.disabled = true;

        // adding the final clues div with incorrect styling
        const newGuessDiv = document.createElement('div');
        newGuessDiv.classList.add('categories-container', 'incorrect', 'unveil');
        newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.college}</div> <div class='category' id='draft-year'>${correctGuess.drafted}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
        guessContainer.appendChild(newGuessDiv);
    }

    // reseting the name value after guess to null
    nameInput.value = '';

});

// logging correct answer
console.log('Correct Guess:', correctGuess.name);

// function for reset button
document.getElementById('resetBtn').addEventListener('click', function () {
    location.reload();
});

// suggestions list statements
const suggestionsList = document.getElementById('suggestions');

// event listener for when user types guess
nameInput.addEventListener('input', function () {
    const inputText = nameInput.value.trim().toLowerCase();
    const matchingPlayers = players.filter(player => {
        const fullName = player.name.toLowerCase();
        return fullName.includes(inputText);
    });
    displaySuggestions(matchingPlayers);
});

// function for displaying suggestions
function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = '';

    if (suggestions.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }

    // creating list item for each suggestion with match
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion.name;
        li.addEventListener('click', () => {
            nameInput.value = suggestion.name;
            suggestionsList.style.display = 'none';
        });
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
}