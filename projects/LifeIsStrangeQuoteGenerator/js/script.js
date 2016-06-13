// Move element to middle of screen.
var moveMiddle = function(tag) {
	tag.css("position", "fixed");
	tag.css("top", "60%");
	tag.css("left", "50%");
	tag.css("transform", "translate(-50%, -50%)");
}

var modifyHtml = function(quote, source) {
	
	// Combine quote and source into one string.
	var quoteString = "\"" + quote + "\"" + " -" + source;
	
	// Add quote and source to DOM.
	$("#quote-content").html("<q>" + quote + "</q>");
	$("#quote-source").html("&ndash;" + source);
	
	// Add quote to Twitter share button.
	$("#btn-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURI(quoteString));
	
	// Add quote to copy button as a data-quote property.
	//$("#btn-copy").data("quote", quoteString);
	
	// Show social media buttons.
	$("#btnarray-social-media").removeClass("hidden");
	
	// Move quote container to middle.
	moveMiddle($("#quote-container"));
}

$(document).ready(function() {

	// List of videos to play in the background.
	var videoArray = [
						"hcZ8277KbRY", 
						"thKJpZZ4U8o", 
						"t9Ndsg7uOjI", 
						"XLNuSeOuxlQ", 
						"6VEtOhEX_fE", 
						"5sE2_FxcF1Q", 
						"dQocgeg81sY"
					]; 
	
	// Randomly choose a video.
	var videoId = videoArray[Math.floor(Math.random()*videoArray.length)]; 
	
	// Video URL.
	var embedUrl = "https://youtube.com/embed/" + videoId + "?autoplay=1&controls=0&showinfo=0&autohide=1";
	
	// Add video to background.
	$("#bg-video > iframe").attr("src", embedUrl);
	
	// Move initial quote container to center. 
	// This is initially the "click to generate" message.
	moveMiddle($("#quote-container"));

	// Audio click sound.
	var audioClick = $("#diary-sms-open");
	
	// Generate new quote on click.
	$("#quote-content, #quote-source").on("click", function() {
		
		// Generate quote and source.
		var q = generateQuote();
		
		// Add quote and source to DOM, create Twitter RT button.
		modifyHtml(q[0], q[1]);
		
		// Play audio click.
		audioClick.trigger("play");
		
	});
	
	// Generate new quote on keypress.
	$("body").on("keyup", function() {
		
		// Generate quote and source.
		var q = generateQuote();
		
		// Add quote and source to DOM, create Twitter RT button.
		modifyHtml(q[0], q[1]);
		
		// Play audio click.
		audioClick.trigger("play");

	});
	
	// Mobile browser check.
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		// If the user is on a mobile device, the YouTube video playing in the 
		// background will not autoplay.
		//
		// Remove the video, and fall back to static image background.
		$("#bg-video").remove();
	}
	
});