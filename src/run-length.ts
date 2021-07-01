import { FSRunLen } from './run-lenght-fs';

interface IRunLen {
  encode(): void;
  decode(): void;
  //eslint-disable-next-line no-unused-vars
  setData(data: string): void;
  fecthFileData(): Promise<void>;
}

/**
 * RunLen is an algorithm that enables you to encode an decode text by a patter defined on itself.
 * This class provides you the methods to deal with encode anr decode functionality. Also it
 * implements `FSRunLen` which give us the needed stuf to read and write files when it would
 * be required. In the order to everything goes ok, you must execute `fecthFileData` in an
 * async/await or Promise way, so make sure to execute before anthing else.
 * @see fecthFileData {@link fecthFileData}
 * @extends FSRunLen {@link FSRunLen}
 * @implements IRunLen {@link IRunLen}
 */
export class RunLen extends FSRunLen implements IRunLen {
  data: string;

  constructor(path: string) {
    super(path);
    this.data = '';
  }

  /**
   * Read files from given filepath
   */
  async fecthFileData(): Promise<void> {
    this.setData(await this.readFileData());
  }

  decode(): void {
    console.log(this.data);
  }

  encode(): void {
    console.log(this.data);
  }

  /**
   * Set the value of data property.
   * @param d  The value to save in data.
   */
  setData(d: string): void {
    this.data = d;
  }
}
