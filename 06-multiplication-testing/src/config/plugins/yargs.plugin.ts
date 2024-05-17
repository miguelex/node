
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'limite de la multiplicacion'
    }).
    option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'nombre del archivo'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'file destination'
    })
    .check((argv, options) => {
        if (argv.b < 1) throw 'Error: La base tiene que ser mayor de 0';
        return true;
    })
    .parseSync()