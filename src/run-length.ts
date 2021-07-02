import { FSRunLen } from './run-lenght-fs';
import {
  hasCodableFormat,
  hasDecodableFormat,
  joinDataByLineBreak,
  splitDataByLineBreak,
} from './run-length-utils';

/**
 * RunLen is an algorithm that enables you to encode an decode text by a patter defined on itself.
 * This class provides you the methods to deal with encode and decode functionality. Also it
 * extends `FSRunLen` which give us the needed stuf to read and write files when it would
 * be required. In the order to everything goes ok, you must execute `fecthFileData` in an
 * async/await or Promise way, so make sure to execute before anthing else.
 * @see fecthFileData {@link fecthFileData}
 * @extends FSRunLen {@link FSRunLen}
 */
export class RunLen extends FSRunLen {
  private data: string;
  private dataArray: string[];

  constructor(path: string) {
    super(path);
    this.data = this.fecthFileData();
    this.dataArray = splitDataByLineBreak(this.data);
  }

  /**
   * Read files from given filepath
   */
  private fecthFileData(): string {
    return this.readFileData();
  }

  /**
   * Set the value of data property.
   * @param d  The value to save in data.
   */
  private setData(d: string): void {
    this.data = d;
  }

  decode(): void {
    // if input file has not the right format, then throw it
    if (!hasDecodableFormat(this.data)) throw 'The content has not the supported format';

    const dataLines = this.dataArray.map((dataLine) => {
      return dataLine
        .split('')
        .reduce(
          (acc, currChar, idxChar, chars) =>
            idxChar % 2 === 0
              ? acc + chars[idxChar + 1].repeat(currChar as unknown as number)
              : acc,
          ''
        );
    });
    this.setData(joinDataByLineBreak(dataLines));
    this.showData();
  }

  encode(): void {
    // if input file has not the right format, then throw it
    if (!hasCodableFormat(this.data)) throw 'The content has not the supported format';

    let lineIdx = 0;
    let charCount;
    let encodedLine;
    const dataLines = this.dataArray.map((dataLine) => {
      charCount = 1;
      encodedLine = '';
      for (lineIdx = 1; lineIdx <= dataLine.length; lineIdx += 1) {
        if (dataLine[lineIdx] === dataLine[lineIdx - 1]) {
          charCount += 1;
        } else {
          encodedLine += `${charCount}${dataLine[lineIdx - 1]}`;
          charCount = 1;
        }
      }
      return encodedLine;
    });
    this.setData(joinDataByLineBreak(dataLines));
    this.showData();
  }

  showData(): void {
    console.log(this.data);
  }
}
