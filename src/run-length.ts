import { FSRunLen } from './run-lenght-fs';

interface IRunLen {
  encode(): void;
  decode(): void;
  //eslint-disable-next-line no-unused-vars
  setData(data: string): void;
}

export class RunLen extends FSRunLen implements IRunLen {
  data?: string;

  constructor(path: string) {
    super(path);
    this.data = '';
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
