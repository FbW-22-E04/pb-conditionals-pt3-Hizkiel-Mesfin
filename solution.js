//#1a

const aleezaTeamAvg = (89 + 120 + 103) / 3;
const lisTeamAvg = (116 + 94 + 123) / 3;
const maryTeamAvg = (97, 134, 105) / 3;

if (aleezaTeamAvg > lisTeamAvg && aleezaTeamAvg > maryTeamAvg) {
  console.log(`Aleeyza's team wins with an average score of ${aleezaTeamAvg} `);
} else if (lisTeamAvg > aleezaTeamAvg && lisTeamAvg > maryTeamAvg) {
  console.log(`Lis's team wins with an average score of ${lisTeamAvg} `);
} else if (maryTeamAvg > aleezaTeamAvg && maryTeamAvg > lisTeamAvg) {
  console.log(`Mary's team wins with an average score of ${maryTeamAvg} `);
} else {
  console.log(`It's a draw`);
}
