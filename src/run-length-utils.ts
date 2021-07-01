import { existsSync } from 'fs';
import { resolve } from 'path';

// Expression to check if into input-file are some number, space or symbol
const encExp = RegExp(/([0-9]|\s|[^a-zA-Z\d])/, 'g');

// Expression to check if input-file has some non decodable pattern
// must end with letter +[a-zA-Z]$
// almost done ^((\d{0})(\w))*[A-Z]$
const decExp = RegExp(/(\d[a-zA-Z])/, 'g');

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
export const hasCodableFormat = (data: string): boolean => !encExp.test(data);

/**
 * Check if the given file data has the right format to encode.
 * @param data  Text result from read the input file.
 */
export const hasDecodableFormat = (data: string): boolean => {
  console.log(decExp.exec(data));
  return true;
};
