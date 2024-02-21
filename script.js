
// global variables
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const guessContainer = document.getElementById('guess-container')
const playerImage = document.getElementById('player-image');
const messageText = document.getElementById('instruction-id')
const playerImageContainer = document.getElementById('player-img-container')
const resetBtn = document.getElementById('resetBtn');
const resetBtnReload = document.getElementById('resetBtnReload')
const giveUpBtn = document.getElementById('giveUpBtn')
var divCounter = 1;

// list of suns players
const players = [
    { name: 'Devin Booker', position: 'G', number: '1', debut: '2015', height: "6'6", college: 'Kentucky', image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png", draftedBy:'PHX', yearsOnSuns: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], teamsPlayedFor: ['PHX'] },
    { name: 'Kevin Durant', position: 'F', number: '35', debut: '2007', height: "6'11", college: 'Texas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png', draftedBy:'SEA', yearsOnSuns: ['2023', '2024'], teamsPlayedFor: ['SEA', 'OKC', 'GSW', 'BKN'] },
    { name: 'Bradley Beal', position: 'G', number: '3', debut: '2012', height: "6'4", college: 'Florida', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png', draftedBy:'WAS', yearsOnSuns: ['2023', '2024'], teamsPlayedFor: ['WAS'] },
    { name: 'Grayson Allen', position: 'G', number: '8', debut: '2018', height: "6'4", college: 'Duke', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628960.png', draftedBy:'UTA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jusuf Nurkic', position: 'C', number: '20', debut: '2014', height: "7'0", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203994.png', draftedBy:'CHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: "Royce O'Neale", position: 'F', number: '00', debut: '2017', height: "6'4", college: 'Denver, Baylor', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png', draftedBy:'UTA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'David Roddy', position: 'F', number: '21', debut: '2022', height: "6'4", college: 'Colorado State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631223.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Josh Okogie', position: 'G', number: '2', debut: '2018', height: "6'4", college: 'Georgia Tech', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629006.png', draftedBy:'MIN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Theo Maledon', position: 'G', number: '12', debut: '2020', height: "6'4", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630177.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Damion Lee', position: 'G-F', number: '10', debut: '2018', height: "6'5", college: 'Drexel, Louisville', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627814.png', draftedBy:'BOS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Bol Bol', position: 'C-F', number: '11', debut: '2019', height: "7'3", college: 'Oregon', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629626.png', draftedBy:'MIA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Drew Eubanks', position: 'F-C', number: '14', debut: '2018', height: "6'9", college: 'Oregon State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629234.png', draftedBy:'SAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Eric Gordon', position: 'G', number: '23', debut: '2008', height: "6'3", college: 'Indiana', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201569.png', draftedBy:'LAC', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Nassir Little', position: 'F-G', number: '25', debut: '2019', height: "6'5", college: 'UNC', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629642.png', draftedBy:'POR', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Udoka Azubuike', position: 'C-F', number: '27', debut: '2020', height: "6'10", college: 'Kansas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628962.png', draftedBy:'UTA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Saben Lee', position: 'G', number: '38', debut: '2020', height: "6'2", college: 'Vanderbilt', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630240.png', draftedBy:'UTA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Keita Bates-Diop', position: 'F', number: '21', debut: '2018', height: "6'8", college: 'Ohio State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628966.png', draftedBy:'MIN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jordan Goodwin', position: 'G', number: '0', debut: '2021', height: "6'3", college: 'Saint Louis', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630692.png', draftedBy:'WAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Yuta Wantanabe', position: 'G-F', number: '18', debut: '2018', height: "6'9", college: 'George Washington', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png', draftedBy:'MEM', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Chimezie Metu', position: 'C-F', number: '4', debut: '2018', height: "6'10", college: 'Southern California', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629002.png', draftedBy:'SAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Deandre Ayton', position: 'C', number: '22', debut: '2018', height: "7'0", college: 'Arizona', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629028.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Darius Bazley', position: 'F', number: '55', debut: '2019', height: "6'9", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629647.png', draftedBy:'UTA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Bismack Biyombo', position: 'C', number: '18', debut: '2011', height: "6'8", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202687.png', draftedBy:'SAC', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Mikal Bridges', position: 'G-F', number: '25', debut: '2018', height: "6'6", college: 'Villanova', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Torrey Craig', position: 'F', number: '0', debut: '2017', height: "6'7", college: 'USC Upstate', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628470.png', draftedBy:'DEN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Cameron Johnson', position: 'F', number: '23', debut: '2019', height: "6'8", college: 'North Carolina', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629661.png', draftedBy:'MIN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jock Landale', position: 'C', number: '11', debut: '2021', height: "6'11", college: "St. Mary's", image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629111.png', draftedBy:'SAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Chris Paul', position: 'G', number: '3', debut: '2005', height: "6'0", college: 'Wake Forest', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png', draftedBy:'NOH', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Cameron Payne', position: 'G', number: '15', debut: '2015', height: "6'3", college: 'Murray State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626166.png', draftedBy:'OKC', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Terrence Ross', position: 'G-F', number: '8', debut: '2012', height: "6'6", college: 'Washington', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203082.png', draftedBy:'TOR', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Dario Saric', position: 'F-C', number: '20', debut: '2016', height: "6'10", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203967.png', draftedBy:'ORL', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Landry Shamet', position: 'G', number: '14', debut: '2018', height: "6'4", college: 'Wichita State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629013.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Ish Wainright', position: 'F', number: '12', debut: '2021', height: "6'6", college: 'Baylor', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630688.png', draftedBy:'TOR', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'T.J. Warren', position: 'F', number: '12, 21', debut: '2014', height: "6'8", college: 'NC State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203933.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Duane Washington Jr.', position: 'G', number: '4', debut: '2021', height: "6'3", college: 'Ohio State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630613.png', draftedBy:'IND', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'M.J. Walker', position: 'G', number: '21', debut: '2021', height: "6'5", college: 'Florida State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630640.png', draftedBy:'NYK', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Paris Bass', position: 'F', number: '30', debut: '2022', height: "6'8", college: 'Detroit Mercy', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jae Crowder', position: 'F', number: '99', debut: '2012', height: "6'6", college: 'Marquette', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203109.png', draftedBy:'CLE', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Aaron Holiday', position: 'G', number: '4', debut: '2018', height: "6'0", college: 'UCLA', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628988.png', draftedBy:'IND', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Chandler Hutchison', position: 'F', number: '35', debut: '2018', height: "6'6", college: 'Boise State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628990.png', draftedBy:'CHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Justin Jackson', position: 'F', number: '45', debut: '2017', height: "6'8", college: 'UNC', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628382.png', draftedBy:'POR', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Frank Kaminsky', position: 'F-C', number: '8', debut: '2015', height: "7'0", college: 'Wisconsin', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626163.png', draftedBy:'CHA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Gabriel Lundberg', position: 'F', number: '19', debut: '2022', height: "6'4", college: 'N/A', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4981257.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Javale McGee', position: 'C', number: '00', debut: '2008', height: "7'0", college: 'Nevada', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201580.png', draftedBy:'WAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Abdel Nader', position: 'F', number: '11', debut: '2017', height: "6'5", college: 'Iowa State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627846.png', draftedBy:'BOS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Elfrid Payton', position: 'G', number: '2', debut: '2014', height: "6'3", college: 'Louisiana', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203901.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jalen Smith', position: 'F-C', number: '10', debut: '2020', height: "6'10", college: 'Maryland', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630188.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Emanuel Terry', position: 'F', number: '10, 26', debut: '2019', height: "6'9", college: 'Lincoln Memorial', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629150.png', draftedBy:'DEN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Ty-Shon Alexander', position: 'G', number: '0', debut: '2020', height: "6'3", college: 'Creighton', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630234.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jevon Carter', position: 'G', number: '4', debut: '2018', height: "6'1", college: 'West Virginia', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628975.png', draftedBy:'MEM', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Langston Galloway', position: 'G', number: '2', debut: '2015', height: "6'1", college: "Saint Joseph's", image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204038.png', draftedBy:'NYK', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Damian Jones', position: 'C', number: '30', debut: '2016', height: "6'11", college: 'Vanderbilt', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627745.png', draftedBy:'GSW', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: "E'Twaun Moore", position: 'G', number: '55', debut: '2011', height: "6'3", college: 'Purdue', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202734.png', draftedBy:'BOS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Aron Baynes', position: 'C-F', number: '46', debut: '2013', height: "6'10", college: 'Washington State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203382.png', draftedBy:'SAS', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jonah Bolden', position: 'C', number: '43', debut: '2018', height: "6'8", college: 'UCLA', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628413.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Cheick Diallo', position: 'C-F', number: '14', debut: '2016', height: "6'8", college: 'Kansas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627767.png', draftedBy:'LAC', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jared Harper', position: 'G', number: '12', debut: '2019', height: "5'10", college: 'Auburn', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629607.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Ty Jerome', position: 'G-F', number: '10', debut: '2019', height: "6'5", college: 'Virginia', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629660.png', draftedBy:'PHI', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Tyler Johnson', position: 'G', number: '16', debut: '2015', height: "6'3", college: 'Fresno State', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/204020.png', draftedBy:'MIA', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Jalen Lecque', position: 'G', number: '0', debut: '2020', height: "6'4", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629665.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Elie Okobo', position: 'F-G', number: '2', debut: '2018', height: "6'3", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629059.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Kelly Oubre Jr.', position: 'F-G', number: '3', debut: '2015', height: "6'7", college: 'Kansas', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626162.png', draftedBy:'ATL', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Tariq Owens', position: 'F', number: '41', debut: '2020', height: "6'10", college: 'Tennessee, St. Johns, Texas Tech', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629745.png', draftedBy:'PHX', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Ricky Rubio', position: 'G', number: '11', debut: '2011', height: "6'2", college: 'N/A', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201937.png', draftedBy:'MIN', yearsOnSuns: [], teamsPlayedFor: [] },
    { name: 'Thaddeus Young', position: 'F-C', number: '30', debut: '2007', height: "6'8", college: 'Georgia Tech', image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201152.png', draftedBy: 'PHI', yearsOnSuns: ['2024'], teamsPlayedFor: [] },
    // { name: '', position: '', number: '', debut: '', height: "", college: '', image: '', draftedBy: '', yearsOnSuns: [] },
];

// function to get a random player from the array
function getRandomPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
}

function pageReload() {

    location.reload();
}

// setting the correct guess, player image, and attempts on page load
let correctGuess = getRandomPlayer();
playerImage.src = correctGuess.image;
let attempts = 7;

// function for reset button
document.getElementById('resetBtn').addEventListener('click', function () {
    correctGuess = getRandomPlayer();
    playerImage.src = correctGuess.image;

    console.clear();
    console.log('Correct Guess: ', correctGuess.name)

    attempts = 7;
});

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

        const guessedName = nameInput.value.trim().toLowerCase().replace(/'/g, '');
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
                playerImageContainer.classList.add('correct');
                resetBtn.style.display = 'none';
                resetBtnReload.style.display = 'block';

                // creating the correct guess clues container
                const newGuessDiv = document.createElement('div');
                newGuessDiv.classList.add('categories-container', 'correct', 'unveil');
                newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.draftedBy}</div> <div class='category' id='draft-year'>${correctGuess.debut}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
                guessContainer.appendChild(newGuessDiv);
                giveUpBtn.style.display = 'none';

            }

            // else statement for incorrect answer
            else {

                // subtracting 1 from attempts + HTML / styles changes
                attempts--;
                const newGuessDiv = document.createElement('div');
                messageText.innerHTML = `Guesses left: ${attempts}...`;
                resetBtn.style.display = 'none';
                resetBtnReload.style.display = 'block';

                // creating clues container for the guess
                newGuessDiv.classList.add('categories-container', 'incorrect');
                newGuessDiv.innerHTML = `<div class='category' id='college${divCounter}'>${guessedPlayer.draftedBy}</div> <div class='category' id='draft-year${divCounter}'>${guessedPlayer.debut}</div> <div class='category' id='height${divCounter}'>${guessedPlayer.height}</div> <div class='category' id='number${divCounter}'>${guessedPlayer.number}</div> <div class='category' id='position${divCounter}'>${guessedPlayer.position}</div> </p>`;
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
                if (guessedPlayer.draftedBy === correctGuess.draftedBy) {
                    const draftedBy = document.getElementById(`college${divCounter}`);
                    draftedBy.classList.add('correct');
                }

                // DRAFT YEAR IF STATEMENTS
                if (guessedPlayer.debut === correctGuess.debut) {
                    const draftYear = document.getElementById(`draft-year${divCounter}`);
                    draftYear.classList.add('correct');
                }

                if (Math.abs(correctGuess.debut - guessedPlayer.debut) <= 2 && correctGuess.debut !== guessedPlayer.debut) {
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
        submitBtn.value = correctGuess.name;
        submitBtn.disabled = true;
        submitBtn.style.marginTop = '0';
        nameInput.style.display = 'none';
        nameInput.disabled = true;
        submitBtn.disabled = true;
        playerImageContainer.classList.add('loss')
        resetBtn.style.display = 'none';
        resetBtnReload.style.display = 'block';
        giveUpBtn.style.display = 'none';

        // adding the final clues div with incorrect styling
        const newGuessDiv = document.createElement('div');
        newGuessDiv.classList.add('categories-container', 'loss', 'unveil');
        newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.college}</div> <div class='category' id='draft-year'>${correctGuess.debut}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
        guessContainer.appendChild(newGuessDiv);
    }

    // reseting the name value after guess to null
    nameInput.value = '';

});

// logging correct answer
console.log('Correct Guess:', correctGuess.name);

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

    if (suggestions.length === 0 || nameInput.value === "") {
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

// popup function
function togglePopup() {
    document.getElementById("help-popup").classList.toggle('active');
}

function giveUp() {

    // changes to HTML and styles
    messageText.innerHTML = `It was ${correctGuess.name}! Better luck next time!`;
    playerImage.classList.add('unveil')
    submitBtn.value = correctGuess.name;
    submitBtn.disabled = true;
    submitBtn.style.marginTop = '0';
    nameInput.style.display = 'none';
    nameInput.disabled = true;
    submitBtn.disabled = true;
    playerImageContainer.classList.add('loss')
    resetBtn.style.display = 'none';
    resetBtnReload.style.display = 'block';

    // adding the final clues div with incorrect styling
    const newGuessDiv = document.createElement('div');
    newGuessDiv.classList.add('categories-container', 'loss', 'unveil');
    newGuessDiv.innerHTML = `<div class='category' id='college'>${correctGuess.draftedBy}</div> <div class='category' id='draft-year'>${correctGuess.debut}</div> <div class='category' id='height'>${correctGuess.height}</div> <div class='category' id='number'>${correctGuess.number}</div> <div class='category' id='position'>${correctGuess.position}</div> </p>`;
    guessContainer.appendChild(newGuessDiv);
    giveUpBtn.style.display = 'none';

}

// functions for tool tips under categories
function toggleCollegeToolTip() {
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
    tooltipContainers.forEach(function (container) {
        container.style.display = 'none';
    });
    document.getElementById("tool-tip-container-college").classList.toggle('visible');
}

function toggleDebutToolTip() {
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
    tooltipContainers.forEach(function (container) {
        container.style.display = 'none';
    });
    document.getElementById("tool-tip-container-debut").classList.toggle('visible');
}

function toggleHeightToolTip() {
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
    tooltipContainers.forEach(function (container) {
        container.style.display = 'none';
    });
    document.getElementById("tool-tip-container-height").classList.toggle('visible');
}

function toggleNumberToolTip() {
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
    tooltipContainers.forEach(function (container) {
        container.style.display = 'none';
    });
    document.getElementById("tool-tip-container-number").classList.toggle('visible');
}

function togglePositionToolTip() {
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
    tooltipContainers.forEach(function (container) {
        container.style.display = 'none';
    });
    document.getElementById("tool-tip-container-position").classList.toggle('visible');
}

// function for iPhone that gets rid of tip after tap
document.body.addEventListener('click', function (event) {
    var target = event.target;
    var tooltipContainers = document.querySelectorAll('[class^="tooltip-container"]');
});