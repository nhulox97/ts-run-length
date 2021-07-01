import { existsSync } from 'fs';
import { resolve } from 'path';

// Expression to check if into input-file are some number, space or symbol
const decExp = RegExp(/([0-9]|\s.|[^a-zA-Z\d])/g);

// Expression to check if input-file has some non decodable pattern
// must end with letter +[a-zA-Z]$
// almost done ^((\d{0})(\w))*[A-Z]$
const encExp = RegExp(/\w/);

/**
 * Check if a file exists, by using resolve and existsSync methods, from path and fs modules
 * respectively.
 * @param filepath
 * @returns The value by evaluate if the file exists.
 * @see resolve {@link resolve}
 * @see existsSync {@link existsSync}
 */
export const isValidFilePath = (filepath: string): boolean => existsSync(resolve(filepath));

/**
 * Check if the given file data has the right format to decode.
 * @param data  Text result from read the input file.
 */
export const hasDecodableFormat = (data: string): boolean => !decExp.test(data);

/**
 * Check if the given file data has the right format to encode.
 * @param data  Text result from read the input file.
 */
export const hasCodableFormat = (data: string): boolean => {
  return true;
};
