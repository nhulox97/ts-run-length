import { readFileSync, writeFileSync } from 'fs';

/**
 * RunLenFS provides methos to deal with I/O tasks.
 */
export class FSRunLen {
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

  /**
   * Provides the action to override the file whatever the result is,
   * this method will be executed by user option.
   * @param data  To save into input file.
   */
  protected writeFileData(data: string): void {
    writeFileSync(this.path, data);
  }

  /**
   * Reads the content from current input file.
   * @returns data  From the input-file.
   */
  protected readFileData(): string {
    return readFileSync(this.path, 'utf-8').trim();
  }
}
