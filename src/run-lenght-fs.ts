import { readFile, writeFile } from 'fs';

interface IFSRunLen {
  readFileData(): Promise<string>;
  // eslint-disable-next-line no-unused-vars
  writeFileData(data: string): Promise<boolean>;
}

export class FSRunLen implements IFSRunLen {
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  writeFileData = (data: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      writeFile(this.path, data, (err) => (!err ? resolve(true) : reject(err)));
    });
  };

  readFileData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      readFile(this.path, 'utf-8', (err, data) => (!err ? resolve(data) : reject(err)));
    });
  };
}
