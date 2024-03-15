/*
    leer un archivo, crear un archivo y reemplazar en en nuevo archivo
    la palabra React por Angular
 */


const fs = require('fs');

const data = fs.readFileSync('README.MD', 'utf8');
const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README-Angular.md', newData);


