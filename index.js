import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

//(a) Home Team name for 2014 world cup final

fifaData.forEach( function(game) {
    if (game.Year === 2014 && game.Stage === 'Final') {
        console.log( `(a) Home Team name for 2014 world cup final: ${game["Home Team Name"]}` )
    }
});

//(b) Away Team name for 2014 world cup final

fifaData.forEach( function(game) {
    if (game.Year === 2014 && game.Stage === 'Final') {
        console.log( `(b) Away Team name for 2014 world cup final: ${game["Away Team Name"]}` )
    }
});

//(c) Home Team goals for 2014 world cup final

fifaData.forEach( function(game) {
    if (game.Year === 2014 && game.Stage === 'Final') {
        console.log( `(c) Home Team goals for 2014 world cup final ${game["Home Team Goals"]}` )
    }
});

//(d) Away Team goals for 2014 world cup final

fifaData.forEach( function(game) {
    if (game.Year === 2014 && game.Stage === 'Final') {
        console.log( `(d) Away Team goals for 2014 world cup final ${game["Away Team Goals"]}` )
    }
});

//(e) Winner of 2014 world cup final

fifaData.forEach( function(game) {
    if (game.Year === 2014 && game.Stage === 'Final') {
        if ( game['Home Team Goals'] > game['Away Team Goals'] ) {
            console.log( `(e) Winner of 2014 world cup final: ${game["Home Team Name"]}` )
        } else if ( game['Home Team Goals'] < game['Away Team Goals'] ) {
            console.log( `(e) Winner of 2014 world cup final: ${game["Away Team Name"]}` )
        } else {
            console.log( `(e) Winner of 2014 world cup final: Tie`)
        }
    }
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log('--------Task 2---------');
function getFinals(data) {
    const finalsData = data.filter(function(game){
        return game.Stage === 'Final';
    });
    return finalsData;
}

console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that 
accepts the callback function `getFinals`, and returns an array 
called `years` containing all of the years in the dataset */
console.log('--------Task 3---------');
function getYears( callback, data) {
    const finalYears = callback(data).map(function(game) {
        return game.Year;
    });
    return finalYears;
};

const finalYears = getYears(getFinals, fifaData); 
console.log(finalYears);

/* Task 4: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the 
winner (home or away) of each `finals` game. Return the name of all 
winning countries in an array called `winners` */ 

console.log('--------Task 4---------');
function getWinners(callback, data) {

    const winners = callback(data).map( function(game) {
        if ( game['Home Team Goals'] > game['Away Team Goals'] ) {
            return game["Home Team Name"]
        } else if ( game['Home Team Goals'] < game['Away Team Goals'] ) {
            return game["Away Team Name"]
        } else {
            return 'Tie'
        }
    });
    return winners;

};

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called 
`getWinnersByYear` that accepts the following parameters and returns 
a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log('--------Task 5---------');
function getWinnersByYear(winnerCallback, yearsCallback) {
    const winningCountry = winnerCallback(getFinals, fifaData);
    const years = yearsCallback(getFinals, fifaData);
    let yearWinner = []
    for ( let i = 0; i < years.length; i++ ) {
        yearWinner.push(`In ${years[i]}, ${winningCountry[i]} won the world cup!`);
    }
    return yearWinner;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and 
returns the the average number of home team goals and away team goals scored per match (Hint:
 use .reduce and do this in 2 steps) */
console.log('--------Task 6---------');
function getAverageGoals(data) {
    //get total home goals
    const totalHomeGoals = data.reduce(function(accumulator, game){
        return accumulator += game['Home Team Goals']
    }, 0)
    //get average home goals
    const averageHomeGoals = (totalHomeGoals / data.length);
    console.log(`Average number of goals scored per match by the home team: ${averageHomeGoals}`);
    //get total away goals
    const totalAwayGoals = data.reduce(function(accumulator, game){
        return accumulator += game['Away Team Goals']
    }, 0)
    //get average away goals
    const averageAwayGoals = (totalAwayGoals / data.length);
    console.log(`Average number of goals scored per match by the away team: ${averageAwayGoals}`);
    return {
        'Average Home Goals': averageHomeGoals,
        'Average Away Goals': averageAwayGoals
    }
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
