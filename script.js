const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

const m = new Date();
const d = new Day();
document.write(dayNames[d.getDay()] + monthNames[m.getMonth()]);

var space = ' '

document.write(space)

var today = new Date();
var dd = String(today.getDate()).padStart(2,'0');
var yyyy = today.getFullYear();

today = '' + dd + ' ' + yyyy
document.write(today);
