import { FSRunLen } from './run-lenght-fs';

interface IRunLen {
  encode(): void;
  decode(): void;
}

export class RunLen extends FSRunLen implements IRunLen {
  data?: string;

  constructor(path: string) {
    super(path);
    this.data = '';
  }

  decode = (): void => {
    console.log('Im decoding');
  };

  encode = (): void => {
    console.log('Im encoding');
  };
}
