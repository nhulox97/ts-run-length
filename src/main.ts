#!/usr/bin/env node
import yargs from 'yargs';

const args = yargs(process.argv.slice(2))
  .scriptName('run-length')
  .usage('$0 [input-file] ...[options]')
  .options({
    e: { type: 'string', alias: 'encode', desc: 'Encode the given file' },
    d: {
      type: 'array',
      alias: 'decode',
      desc: "Decode the given file, if it's correctly encoded",
    },
    h: { type: 'boolean', alias: 'help' },
    v: { type: 'boolean', alias: 'version' },
  })
  .example('$0 [input-file] -e', 'Encode the file if it format is supported')
  .example('$0 [input-file] -d', 'Decode the file if it format is supported')
  .help('h')
  .version('0.0.1')
  .epilogue('@nhulox97 node-trainee-program 2021').argv;

console.log(args);
