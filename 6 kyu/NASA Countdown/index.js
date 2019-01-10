// You have the job to implement a countdown function that will be used for the next NASA spatial mission. The function takes a duration in milliseconds and return a string in countdown format.

// If it's counting down, the first character should be '-', if it's counting up it should be '+'. Then it should return the number of: hours (min 2 units), minutes (2 units) and seconds (2 units).

// countdown(-154800000)  // return  '-43:00:00'
// countdown(0)           // return  '+00:00:00'
// countdown(61000)       // return  '+00:01:01'
// countdown(360000000)   // return '+100:00:00'
// FUNDAMENTALSDATES/TIME

//My solution

const countdown = millisecs => {
  const secs = millisecs / 1000;
  const hours = Math.floor((secs > 0 ? secs : -secs) / 3600).toString();
  const minutes = Math.floor(
    ((secs > 0 ? secs : -secs) - hours * 3600) / 60
  ).toString();
  const seconds = Math.floor(
    (secs > 0 ? secs : -secs) - (hours * 3600 + minutes * 60)
  ).toString();
  if (millisecs > 0) {
    return `+${hours.length < 2 ? `0${hours}` : `${hours}`}:${
      minutes.length < 2 ? `0${minutes}` : `${minutes}`
    }:${seconds.length < 2 ? `0${seconds}` : `${seconds}`}`;
  } else if (millisecs === 0) {
    return `+00:00:00`;
  } else if (millisecs < 0) {
    return `-${hours.length < 2 ? `0${hours}` : `${hours}`}:${
      minutes.length < 2 ? `0${minutes}` : `${minutes}`
    }:${seconds.length < 2 ? `0${seconds}` : `${seconds}`}`;
  }
};

//Other solutions

function countdown(millisecs) {
  var hours = parseInt(millisecs / 3600000);
  var minutes = parseInt((millisecs % 3600000) / 60000);
  var seconds = parseInt(((millisecs % 360000) % 60000) / 1000);

  return (
    (millisecs < 0 ? '-' : '+') +
    [hours, minutes, seconds]
      .map(v => Math.abs(v))
      .map(v => (v.toString().length < 2 ? '0' + v : v))
      .join(':')
  );
}
