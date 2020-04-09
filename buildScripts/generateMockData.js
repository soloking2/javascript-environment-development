/*

This script contains mock data generated for local development.
this Way you don't have to point to an actual API,
but you can enjoy realistics, but randomized data and
rapid page loads due to loca, static data

*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, (err) => {
  if(err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green("Mock data generated"));
  }
})
