$(document).ready(function() {

  var projectData = {
    "projects": [

      {
        "projectTitle": "Life Is Strange Quote Generator",
        "projectDescription": "Relive the horror here with quotes from the game",
        "linkUrl" : "../projects/LifeIsStrangeQuoteGenerator",
        "thumbnailUrl" : "../projects/LifeIsStrangeQuoteGenerator/thumbnail.jpg",
        "demoUrl": "../projects/LifeIsStrangeQuoteGenerator",
        "githubUrl": "https://github.com/Jon1701/lifeisstrange-quote-generator"
      },

      {
        "projectTitle": "Wikipedia Viewer",
        "projectDescription": "Search for Wikipedia articles using their REST API",
        "linkUrl" : "../projects/WikiViewer",
        "thumbnailUrl" : "../projects/WikiViewer/thumbnail.jpg",
        "demoUrl": "../projects/WikiViewer",
        "githubUrl": "https://github.com/Jon1701/wiki-viewer"
      },

      {
        "projectTitle": "Twitch Stream Viewer",
        "projectDescription": "Twitch JSON API Demo",
        "linkUrl" : "../projects/TwitchViewer",
        "thumbnailUrl" : "../projects/TwitchViewer/thumbnail.jpg",
        "demoUrl": "../projects/TwitchViewer",
        "githubUrl": "https://github.com/Jon1701/twitch-viewer"
      },

      {
        "projectTitle": "Roman Numeral Converter",
        "projectDescription": "Et convertam inter numeris romanis numeros",
        "linkUrl" : "../projects/RomanNumeralConverter",
        "thumbnailUrl" : "../projects/RomanNumeralConverter/thumbnail.jpg",
        "demoUrl": "../projects/RomanNumeralConverter",
        "githubUrl": "#"
      },

      {
        "projectTitle": "Local Weather App",
        "projectDescription": "Detects the User's location and displays the local weather",
        "linkUrl" : "../projects/WeatherApp",
        "thumbnailUrl" : "../projects/WeatherApp/thumbnail.jpg",
        "demoUrl": "../projects/WeatherApp",
        "githubUrl": "https://github.com/Jon1701/weather-app"
      },

    ]
  };


  // Get template HTML.
  var projectTemplate = $("#template-project").html();

  // Render template.
  var result = Mustache.render(projectTemplate, projectData);

  // Add Template to DOM.
  $("#project-template-result").html(result);





});
