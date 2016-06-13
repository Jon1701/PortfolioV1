var renderResultsTemplate = function(data) {

  // Get the script which contains the template for the search results.
  var template = $("#template-results").html();

  // Render the template with the given data.
  var result = Mustache.render(template, data);

  // Add rendered template to the DOM.
  $("#results").html(result);

}

var renderNoResultsTemplate = function() {
  // Get the script which contains the template for the search results.
  var template = $("#template-noresults").html();

  // Render the template with the given data.
  var result = Mustache.render(template);

  // Add rendered template to the DOM.
  $("#results").html(result);
}

$(document).ready(function() {

  $("#form-search-wiki").submit(function(event) {

    // Get the contents of the search box and perform URI encoding.
    var searchInput = $("#search-input");
    var q = encodeURI(searchInput.val());

    // MediaWiki API Endpoint.
    var apiEndpoint = "https://en.wikipedia.org/w/api.php";
    apiEndpoint += "?action=opensearch";
    apiEndpoint += "&search=" + q;
    apiEndpoint += "&namespace=0";
    apiEndpoint += "&format=json";

    $.ajax({
        url: apiEndpoint,
        async: false,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function (data) {

          // Access results.
          var titles = data[1];
          var synopses = data[2];
          var links = data[3];

          // Combine and restructure results into an array of objects
          // where each object has a title, synopsis, and link.
          var results = [];

          for (var i=0; i<titles.length; i++) {

            // Combine one result.
            var result = {
              "title": titles[i],
              "synopsis": synopses[i],
              "link": links[i]
            }

            // Add result to results array.
            results.push(result);
          }

          // Get the number of results.
          var numResults = results.length;

          // If there are results, render template showing results.
          if (numResults > 0) {

            // Template data.
            var templateData = {"results": results};

            // Render template.
            renderResultsTemplate(templateData);

            // Add Results heading.
            $("#results-heading").html("Results for \"" + searchInput.val() + "\"");

            // Clear search input.
            searchInput.val("");

          } else {

            var templateData = {
              "msg": "No results"
            }

            // Render template.
            renderNoResultsTemplate();

            // Add Results heading.
            $("#results-heading").html("No results for \"" + searchInput.val() + "\"");

          }

        }
    });

    event.preventDefault();

  });


});
