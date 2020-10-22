import css from '../css/main.css'
import files from './newScript'
let elem = document.createElement('p')
elem.attachShadow({mode : 'open' })
elem.id = '1'
elem.style = `
    border : 1px solid black;
    height : 100px;
    width : 100px;
`
var z = document.createElement('p'); // is a node
z.innerHTML = 'test satu dua tiga';

document.body.appendChild(z)
