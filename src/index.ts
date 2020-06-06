import {MatchReader} from './MatchReader'
import {MatchResults} from './MatchResult'

const reader = new MatchReader('football.csv');

reader.read();
console.log(reader.data[0][0]);


let manUnitedWins=0;
 
for(let match of reader.data){
    if(match[1]==='Man United' && match[5]===MatchResults.HomeWin){
        manUnitedWins++;
    }
    if(match[2]==='Man United' && match[5]===MatchResults.AwayWin){
        manUnitedWins++;
    }
}

console.log(manUnitedWins);