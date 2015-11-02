#!/usr/bin/env node

var program = require('commander');

var fs = require('fs');
var bb = require('blue-button');

program
    .version('1.8.0')
    .usage('[options] [command] <file>')

program
    .command('info <file>')
    .description('get info about file (e.g. format, sections/entries present, etc)')
    .action(function(file) {
        //console.log('info file "%s"', file);

        var data;
        try {
            data = fs.readFileSync(file).toString();
        } catch (er) {
            console.log('');
            console.log('file \'%s\' not found or can\'t be read', file);
            console.log(er.toString());
        }

        var json;
        try {
            json=bb.senseString(data);
            delete json.xml;
            console.log(JSON.stringify(json, null, 4));
        } catch (er) {
            console.log('');
            console.log('can\'t parse file \'%s\'', file);
            console.log('Error: ', er);
        }
    })

program
    .command('parse <file>')
    .description('parse file into Blue Button JSON format')
    .action(function(file) {
        //console.log('parse file "%s"', file);

        var data;
        try {
            data = fs.readFileSync(file).toString();
        } catch (er) {
            console.log('');
            console.log('file \'%s\' not found or can\'t be read', file);
            console.log(er.toString());
        }

        var json;
        try {
            json=bb.parse(data);
            delete json.errors;
            console.log(JSON.stringify(json, null, 4));
        } catch (er) {
            console.log('');
            console.log('can\'t parse file \'%s\'', file);
            console.log('Error: ', er);
        }
    })

program.parse(process.argv);

if (!program.args.length) program.help();

