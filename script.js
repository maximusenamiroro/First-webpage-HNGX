let Dayoftheweek = document.getElementById("currentDayofTheWeek");
let currentUTCTime = document.getElementById("currentUTCTime");
let myTrack = document.getElementById("myTrack");

let d = new Date();

let day = d.getDay();

let time = d.getTime();

console.log(time)

switch (day) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

const mystack = "(Frontend)";

Dayoftheweek.innerHTML = day;
currentUTCTime.innerHTML = time;
myTrack.innerHTML = mystack