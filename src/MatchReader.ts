import {CsvFileReader} from './CsvFileReader';
import {dateStringtoDate} from './utils'
import {MatchResults} from './MatchResult'

type MatchData =[Date,string,string,number,number,MatchResults,string];

export class MatchReader extends CsvFileReader<MatchData>{
    mapRow(row:string[]): MatchData{
        return[
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults,
            row[6]
        ]
    }
}