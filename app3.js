/*
    contar cuantas veses se repide la palabra react
 */

const fs = require('fs');
const data = fs.readFileSync('README.MD', 'utf8');

const wordCount = data.match(/react/gi ?? []).length;
console.log('palabras', wordCount);