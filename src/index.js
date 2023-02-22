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

function updateCityTimezone(event) {
  let timezone = event.target.value;
  if (timezone === "current") {
    timezone = moment.tz.guess();
  }
  let cityName = timezone.replace("_", " ").split("/")[1];
  let cityTimezone = moment().tz(timezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimezone.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTimezone.format(
            "h:mm:ss"
          )} <small>${cityTimezone.format("A")}</small></div>
        </div>
    `;
}

currentTime();
setInterval(currentTime, 1000);

let selectElement = document.querySelector("#world-time");

selectElement.addEventListener("change", updateCityTimezone);
