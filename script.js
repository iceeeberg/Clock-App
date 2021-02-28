function displayClock() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = addLeadingZero(time.getMinutes());
  const seconds = addLeadingZero(time.getSeconds());
  const isAm = hours < 12 || hours === 0;

  const displayAmPm = isAm ? 'AM' : 'PM';
  hours = hours >= 13 ? hours - 12 : hours;
  hours = hours === 0 ? hours + 12 : hours;

  const currentTime = document.getElementById('time');
  currentTime.textContent = `${hours}:${minutes}:${seconds} ${displayAmPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

const dayNames = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

const monthNames = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August",
  "September",
  "October", 
  "November", 
  "December"
];


function displayDate() {
  const today = new Date(); 
  const date = today.getDate();
  const year = today.getFullYear();
 
  const currentDate = document.getElementById('date');
  
  currentDate.textContent = `${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]} ${convertToOrdinal(date)} ${year}`;
}

function convertToOrdinal(number) {
  if (number < 10 || number > 20) {
    switch(number % 10) {
      case 1: 
        return number + 'st';
      case 2: 
        return number + 'nd';
      case 3: 
        return number + 'rd';
    }
   
    return number + 'th';
  }
}

displayDate();
displayClock();
setInterval(displayClock, 1000);


