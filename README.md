# Blue Button CLI

Command line tool for [Blue Button](https://github.com/amida-tech/blue-button)

[![NPM](https://nodei.co/npm/@amida-tech/blue-button-cli.png)](https://nodei.co/npm/@amida-tech/blue-button-cli/)

## Install

```sh
npm install -g blue-button-cli
```

## Usage

```
  Usage: blue-button [options] [command] <file>


  Commands:

    info <file>   get info about file (e.g. format, sections/entries present, etc)
    parse <file>  parse file into Blue Button JSON format

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Development

To install it from local repo

```sh
npm link
```

To uninstall it

```sh
npm r -g blue-button-cli
```