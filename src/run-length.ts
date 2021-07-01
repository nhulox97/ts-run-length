import { FSRunLen } from './run-lenght-fs';
import { hasCodableFormat, hasDecodableFormat } from './run-length-utils';

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

  constructor(path: string) {
    super(path);
    this.data = this.fecthFileData();
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
    console.log(hasDecodableFormat(this.data));
  }

  encode(): void {
    console.log(hasCodableFormat(this.data));
  }

  showData(): void {
    console.log(this.data);
  }
}
