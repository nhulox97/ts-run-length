import { existsSync } from 'fs';
import { resolve } from 'path';

// Expression to check if into input-file are some number, space or symbol
const encExp = RegExp(/([0-9]|\s|[^a-zA-Z\d])/);

// Expression to check if input-file has some non decodable pattern
const decExp = RegExp(/([a-zA-Z][a-zA-Z]|\W|[^\dA-Z])/);

/**
 * Check if a file exists, by using resolve and existsSync methods, from path and fs modules
 * respectively.
 * @param filepath
 * @returns The value by evaluate if the file exists.
 * @see resolve {@link resolve}
 * @see existsSync {@link existsSync}
 */
export const isValidFilePath = (filepath: unknown): boolean =>
  existsSync(resolve(filepath as string));

/**
 * Check if the given file data has the right format to decode.
 * @param data  Text result from read the input file.
 */
export const hasCodableFormat = (data: string): boolean => {
  return !testRegExpFromArray(data.split(/\r?\n/), encExp);
};

/**
 * Check if the given file data has the right format to encode.
 * @param data  Text result from read the input file.
 */
export const hasDecodableFormat = (data: string): boolean => {
  return !testRegExpFromArray(data.split(/\r?\n/), decExp);
};

const testRegExpFromArray = (lines: string[], exp: RegExp): boolean => {
  const match = lines.reduce((acc, line) => (exp.test(line) && acc === '' ? line : acc), '');
  return match !== '';
};
