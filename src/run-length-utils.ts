import { existsSync } from 'fs';
import { resolve } from 'path';

// Expression to check if into input-file are some number, space or symbol
const nonMatchEncExp = RegExp("[\\[\\]$&+,:;=¿¡?@#|'<>.^*()%!-]|\\ |\\d");
// Expression to check if input-file has some non decodable pattern
const nonMatchDecExp = RegExp("[a-zA-Z][a-zA-Z]|^[A-Za-z]|[\\[\\]$&+,:;=¿¡?@#|'<>.^*()%!-]|\\ ");

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
 * Check if the given file data has the right format to encode.
 * @param data  Text result from read the input file.
 */
export const hasCodableFormat = (data: string): boolean => !nonMatchEncExp.test(data);

/**
 * Check if the given file data has the right format to decode.
 * @param data  Text result from read the input file.
 */
export const hasDecodableFormat = (data: string): boolean => !nonMatchDecExp.test(data);

export const splitDataByLineBreak = (data: string): string[] => data.split(/\r?\n/);

export const joinDataByLineBreak = (data: string[]): string => data.join('\r\n');
