import { existsSync } from 'fs';
import { resolve } from 'path';

/**
 * Check if a file exists, by using resolve and existsSync methods, from path and fs modules
 * respectively
 * @param filepath
 * @returns The value by evaluate if the file exists
 * @see resolve {@link resolve}
 * @see existsSync {@link existsSync}
 */
export const isValidFilePath = (filepath: string): boolean => existsSync(resolve(filepath));
