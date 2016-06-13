// Helper function to get Weather info from OpenWeatherMap.org
// using the given longitude and latitude.
var getWeatherByCoordinates = function(lon, lat) {

	// API Access key and url.
	var apiKey = "061f24cf3cde2f60644a8240302983f2";
	var apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

	// GET request.
	// Get weather data.
	var response;
	$.ajax({
		url: apiUrl,
		dataType: "json",
		async: false,
		success: function(data) {
			response = data;
		}
	});

	return response;
}

// Mapping between OpenWeatherMap weather status codes to
// weather icons provided by erikflowers.github.io.
var loadWeatherIcons = function() {
	var response;

	// GET request.
	// Get mapping.
	$.ajax({
		"url": "data/mapping-weathercode-icons.json",
		"async": false,
		"dataType": "json",
		"success": function(data) {
			response = data;
		}
	});

	return response
}

// Geolocation options.
var geolocationOptions = {
	maximumAge:Infinity,
	timeout:5000
};

var getDate = function(unixTimestamp) {

		// Mapping between 1-12 and the month name.
		var mapMonthNumToMonth = {
			"1": "January",
			"2": "February",
			"3": "March",
			"4": "April",
			"5": "May",
			"6": "June",
			"7": "July",
			"8": "August",
			"9": "September",
			"10": "October",
			"11": "November",
			"12": "December"
		}

		// Mapping between 0-7 and name of the day of the week.
		var mapDayNumToDayOfWeek = {
			"1": "Sunday",
			"2": "Monday",
			"3": "Tuesday",
			"4": "Wednesday",
			"5": "Thursday",
			"6": "Friday",
			"7": "Saturday"
		}

		// Create Date object.
		// Convert unix timestamp to milliseconds.
		var dt = new Date(unixTimestamp * 1000);

		// Get month, but add 1 to get a number between 1 and 12.
		var monthNum = dt.getMonth() + 1;
		var monthName = mapMonthNumToMonth[String(monthNum)];

		// Get day as number from 1 to 31, and the name.
		var dayNum = dt.getDate();
		var dayName = mapDayNumToDayOfWeek[String(dt.getDay() + 1)];

		// Get full year.
		var year = dt.getFullYear();

		// Create new object containing:
		// * Month Name and number
		// * Day Name and number
		// * year
		return {
			"monthNum": monthNum,
			"monthName": monthName,
			"dayNum": dayNum,
			"dayName": dayName,
			"year": year
		}
}

// Callback Success function for getCurrentPosition().
var geolocationSuccessCallback = function(position) {

	// Hide autodetection section.
	$("#section-location-autodetect").addClass("hidden");

	// Show main section.
	$("#section-weather-main").removeClass("hidden");

	// Get longitude and latitude.
	var lat = position["coords"]["latitude"];
	var lon = position["coords"]["longitude"];

	// Get weather info from GET request.
	var weatherInfo = getWeatherByCoordinates(lon, lat);

	// Get date info.
	var dateInfo = getDate(weatherInfo["dt"])

	// Date String: January 1, 1970
	var dateStr = dateInfo["monthName"] + " " + dateInfo["dayNum"] + ", " + dateInfo["year"];

	// Weather status: cloudy, sunny, mist, etc.
	var weatherStatus = weatherInfo["weather"][0]["description"];

	// Get weather icon.
	var weatherIcons = loadWeatherIcons();
	var weatherIconClassName = weatherIcons[weatherInfo["weather"][0]["icon"]];

	// Get temperatures.
	var tempK = weatherInfo["main"]["temp"];
	var tempC = parseInt(tempK - 273.15) + "&deg;C";
	var tempF = parseInt(tempK * (9/5) - 459.67) + "&deg;F";

	// Modify HTML
	$("#location-name").html(weatherInfo["name"] + "<br/>" + weatherInfo["sys"]["country"]);
	$("#location-weather-icon").addClass(weatherIconClassName);
	$("#location-weather-icon").addClass("wi-fw");
	$("#location-weather-text").html(weatherStatus);
	$("#location-temperature").html(tempC);

	// Toggle switch between Fahrenheit and Celcius.
	$("#location-temperature").on("click", function() {

		// Get the unit of the current temperature.
		var unit = $("#location-temperature").text().slice(-1);

		// Toggle between units.
		if (unit === "C") {
			$("#location-temperature").html(tempF);
		} else {
			$("#location-temperature").html(tempC);
		}
	});

}

// Callback Error function for getCurrentPosition().
var geolocationErrorCallback = function(error) {

	// Hide autodetection section.
	$("#section-location-autodetect").addClass("hidden");

	// Show error section.
	$("#section-weather-error").removeClass("hidden");

	// Display error message.
	$("#error-msg").html(error["message"]);
}

// When the document is done loading, check for location.
$(document).ready(function() {

	// Determine if location services are enabled.
	if (navigator.geolocation) {

		// Get the current position of the user.
		navigator.geolocation.getCurrentPosition(geolocationSuccessCallback, geolocationErrorCallback, geolocationOptions);
	}

});
