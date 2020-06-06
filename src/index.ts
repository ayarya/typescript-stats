import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// // const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
