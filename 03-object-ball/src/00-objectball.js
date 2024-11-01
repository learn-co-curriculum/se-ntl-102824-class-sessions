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
        return statsB.shoe - statsA.shoe
    })
    console.log("🚀 ~ bigShoeRebounds ~ sortedPlayers:", sortedPlayers)
    return sortedPlayers[0].rebounds
}
// bigShoeRebounds()

function mostPointsScored(gameObj) {
    let sortedPlayers = Object.entries(playersObject())
    sortedPlayers.sort((a, b) => b[1].points - a[1].points)
    console.log("🚀 ~ mostPointsScored ~ sortedPlayer:", sortedPlayers)
    return sortedPlayers[0][0]
}

function winningTeam(gameObj) {}

function playerWithLongestName(gameObj) {}

function doesLongestNameStealATon(gameObj) {}
