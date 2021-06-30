import { readFile, writeFile } from 'fs';

interface IFSRunLen {
  readFileData(): Promise<string>;
  writeFileData(data: string): Promise<boolean>;
}

export class FSRunLen implements IFSRunLen {
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  writeFileData = (data: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  };

  readFileData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve('data');
    });
  };
}
