function currentTime() {
  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let torontoElement = document.querySelector("#toronto");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTime = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

currentTime();
setInterval(currentTime, 1000);
