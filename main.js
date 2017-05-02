var person = require ('./object/Person');
//person.setName('herwin');
//var nama = person.getName();
var herwin = new person();
herwin.setName('Herwin Prasetya');
var nama = herwin.getName();
console.log('My Name is : '+nama);