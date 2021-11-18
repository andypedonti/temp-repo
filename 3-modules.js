// Modules
//every file in node is a module


const names = require('./4-Names');
const sayHi = require('./5-Utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');


 sayHi('susie')
 sayHi(names.john)
 sayHi(names.peter)