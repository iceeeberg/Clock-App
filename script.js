const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September",
"October", "November", "December"];

const M = new Date();

document.write(dayNames[M.getDay()] + ',' + ' ' + monthNames[M.getMonth()]);

var space = ' '
document.write(space)

var today = new Date(); 
var dd = String(today.getDate()).padStart(2,'0');
var yyyy = today.getFullYear();

today = '' + dd + ' ' +  yyyy;
document.write(today);

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var milli = time.getMilliseconds();

var space = ' '
document.write(space)

time = hour + ':' + min + ':' + sec + ':' + milli
document.write(time);

function increment() {
  time ++;
  console.log(i);
}
setInterval(increment, 1000);





















