const gameObject = () => {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 21,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
};

console.log(gameObject());

const game = gameObject();
const teams = Object.values(game);
const players = playersObject(game);

function playersObject(gameObj) {
  return { ...game.home.players, ...game.away.players };
}

function numPointsScored(playerName) {
  return playerStats(playerName).points;
}

function shoeSize(playerName) {
  return playerStats(playerName).shoe;
}

function teamColors(teamName) {
  return findByTeamName(teamName).colors;
}

function findByTeamName(teamName) {
  return teams.find((team) => team.teamName === teamName);
}

function teamNames() {
  return teams.map((team) => team.teamName);
}

function playerNumbers(teamName) {
  console.log(findByTeamName(teamName).players);
  const playersObj = findByTeamName(teamName).players;
  const statsArr = Object.values(playersObj);
  console.log("🚀 ~ playerNumbers ~ statsArr:", statsArr);
  return statsArr.map((stat) => stat.number);
}

function playerStats(playerName) {
  // const players = playersObject(game)
  // return players[playerName]
  return playersObject()[playerName];
}

function bigShoeRebounds() {
  let sortedPlayers = Object.values(playersObject());
  //   debugger;
  sortedPlayers.sort((statsA, statsB) => {
    //   if (statsA.shoe < statsB.shoe) return 1
    //   if (statsA.shoe > statsB.shoe) return -1;
    //   return 0
    return statsB.shoe - statsA.shoe;
  });
  console.log("🚀 ~ bigShoeRebounds ~ sortedPlayers:", sortedPlayers);
  return sortedPlayers[0].rebounds;
}
// bigShoeRebounds()

function mostPointsScored() {
  let sortedPlayers = Object.entries(playersObject());
  sortedPlayers.sort((a, b) => b[1].points - a[1].points);
  console.log("🚀 ~ mostPointsScored ~ sortedPlayer:", sortedPlayers);
  return sortedPlayers[0][0];
}

function winningTeam() {
  // I want to create an array of team objs. I want arr so I can sort it by team scores
  // I'll create my own objects, with just the team name and total score
  // I can use Object.values and reduce()
  // let teamsWithScores = [  // too much hard coding!
  //   {
  //     teamName: game.home.teamName,
  //     score: Object.values(game.home.players).reduce((sum, playerStats) => sum + playerStats.points, 0)
  //   },
  //   {
  //     teamName: game.away.teamName,
  //     score: Object.values(game.away.players).reduce((sum, playerStats) => sum + playerStats.points, 0)
  //   }
  // ]
  let teamsWithScores = teams.map((teamObj) => {
    // ah, better! will work no matter how many teams, and
    return {
      // I'm not repeating myself
      teamName: teamObj.teamName,
      score: Object.values(teamObj.players).reduce(
        (sum, playerStats) => sum + playerStats.points,
        0
      ),
    };
  });
  // debugger
  // I'll sort my custom array by the score and then take the first element from the array
  const winner = teamsWithScores.sort((a, b) => b.score - a.score)[0];
  return winner.teamName; // use .dotnotation to return the name of the winning team
}

// this question is faulty in that there are two players
// with equally long names for the longest criteron
function playerWithLongestName(gameObj) {
  // Object.keys returns an array of strings-the player names
  // Then we sort those strings in the array by their length property
  let sortedNames = Object.keys(players).sort((a, b) => b.length - a.length);
  // We can grab the first element from the sorted array with [] index notation
  return sortedNames[0];
}

function doesLongestNameStealATon(gameObj) {
  let sortedPlayers = Object.entries(players);
  // console.log('sortedPlayers: ', sortedPlayers);
  sortedPlayers.sort((a, b) => {
    if (a[1].steals < b[1].steals) return -1;
    if (a[1].steals > b[1].steals) return 1;
    return 0;
  });
  const mostStealsPlayer = sortedPlayers[0][0];
  return playerWithLongestName() == mostStealsPlayer;
}

// here's one I made up to use .filter()
// returns an array of the player names who have shoe sizes bigger than 15
function bigFeetPlayers() {
  // Object.entries keeps player names associated with their stats
  const playerArr = Object.entries(players);
  // debugger
  // .filter will return a new array of player arrays only with shoe > 15, then .map will transform that into an array of just the name strings
  return playerArr
    .filter((player) => player[1].shoe > 15)
    .map((pArr) => pArr[0]);
}

// Object.keys: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Object.values: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Object.entries: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// for...in loop: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
