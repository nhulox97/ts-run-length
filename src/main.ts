#!/usr/bin/env node
// main.ts
/**
 * This is a cli encodr app (based on run-len) which use yargs to read and parse, cli options
 * and arguments. So basically the user decides which action to execute by send the -e (encode)
 * or -d (decode) flag. Whatever action the user takes, the app will evaluate if receives a valid
 * filepath, and if that file has the required format depending on user selection
 * @module ts-run-length
 */
import yargs from 'yargs';
import { RunLen } from './run-length';
import { isValidFilePath } from './run-length-utils';

interface Arguments {
  [x: string]: unknown;
  d?: boolean;
  e?: boolean;
  o?: boolean;
  h?: boolean;
  v?: boolean;
  _: (string | number)[];
  $0: string;
}

const args: Arguments = yargs(process.argv.slice(2))
  .scriptName('run-length')
  .usage('$0 [input-file] ...[options]')
  .options({
    // Here I define every option as a property to parse into args object
    e: { type: 'boolean', alias: 'encode', desc: 'Encode the given file', conflicts: 'd' },
    d: {
      type: 'boolean',
      alias: 'decode',
      desc: 'Decode the given file',
      conflicts: 'e',
    },
    o: {
      type: 'boolean',
      alias: 'override',
      desc: 'Override the input file whatever be result would get',
    },
    h: { type: 'boolean', alias: 'help' },
    v: { type: 'boolean', alias: 'version' },
  })
  .check((argv) => {
    if (!argv._[0]) throw 'Please provide a input file';
    if (!isValidFilePath(argv._[0] as string)) throw 'Please provide a valid file path';
    if (!argv.e && !argv.d) throw 'You need to provide at least option -e or -d';
    return true;
  })
  .example('$0 [input-file] -e', 'Encode the file if it format is supported')
  .example('$0 [input-file] -d', 'Decode the file if it format is supported')
  .help('h')
  .version('0.0.1')
  .epilogue('@nhulox97 node-trainee-program 2021')
  .parseSync();

(async () => {
  const inputFilePath: string = args._[0] as string;

  try {
    // instantiate RunLen class and send inputFilePath
    const rl = new RunLen(inputFilePath);
    await rl.fecthFileData();
    console.log(rl.data);
  } catch (e: unknown) {
    throw new Error(e as string);
  }
})();
