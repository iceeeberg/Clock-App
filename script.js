const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September",
"October", "November", "December"];

const M = new Date();

var today = new Date(); 
var dd = String(today.getDate()).slice(-2);
var yyyy = today.getFullYear();
var ordinal;
  if (dd > 3 && dd < 21) 
  ordinal = dd +'th';
  switch (dd % 10) {
    case 1: ordinal = dd + "st";
    case 2: ordinal = dd + "nd";
    case 3: ordinal = dd + "rd";
    default: ordinal = dd + "th";
};


const currentDate = document.getElementById('date');
currentDate.textContent = (dayNames[M.getDay()] + ',' + ' ' + monthNames[M.getMonth()]) + ' ' + ordinal + ' ' + 
yyyy; 

var space = ' '
document.write(space)

function increment() {
var time = new Date();
var hour = time.getHours()
var min = ('0' + time.getMinutes()).slice(-2);
var sec = ('0' + time.getSeconds()).slice(-2);
var amPM;

if (hour > 12) {
  amPM = 'PM';
  hour = hour - 12 
} else {
    amPM = 'AM';
}
var leadingZero;

if (hour < 10) {
  leadingZero = '0' 
 } else {
    delete leadingZero
  }

const currentTime = document.getElementById('time');
currentTime.textContent = leadingZero + hour + ':' + min + ':' + sec + ' ' + amPM
}
setInterval(increment, 1000);

