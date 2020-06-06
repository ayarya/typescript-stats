import {dateStringtoDate} from './utils'
import {MatchResults} from './MatchResult'
import {MatchData} from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader{
    read(): void;
    data: string[][];
}


export class MatchReader{
    matches : MatchData[]=[];

    static fromCsv(filename:string): MatchReader{
        return new MatchReader(new CsvFileReader(filename));
    }

    constructor(public reader : DataReader){} 

    load():void{
        this.reader.read();
        this.matches=this.reader.data.map((row:string[]): MatchData=>{
            return[
                dateStringtoDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResults,
                row[6]
            ]
        });
    }  
}