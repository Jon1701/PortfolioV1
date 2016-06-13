// Animate section jump.
$('.navbar-custom .navbar-nav > li > a').click(function(){
	$('html, body').animate({
		scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	}, 700);
	return false;
});



// Get all sections.
var sections = $("section");

// Get nav elements.
var nav = $("nav");
var navHeight = nav.outerHeight();

// Run function when scrolling through the page.
$(window).on("scroll", function() {

	// Get the current position of the screen view.
	var currPos = $(this).scrollTop();
	
	// For each <section> get the position of its top.
	sections.each(function(index, value) {
	
		// Top of this section.
		var top = $(this).offset().top - navHeight;
	
		// Bottom of this section (top + height).
		var bottom = top + $(this).outerHeight();
		
		// If we are currently viewing a particular section,
		if (currPos >= top && currPos <= bottom) {
		
			// Remove existing .active class.
			nav.find("a").removeClass("active");

			// Add the .active class to the corresponding nav item.
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

			
			// If we are at the Home panel, remove the .navbar-bg-section class
			// and add the .navbar-bg-home class to <nav>
			//
			// If we are at a Section panel (index > 0), remove .navbar-bg-home class
			// and add the .navbar-section class to <nav>
			if (index === 0) {
				
				nav.removeClass("navbar-bg-section");
				nav.addClass("navbar-bg-home");
				
			} else {
				
				nav.removeClass("navbar-bg-home");
				nav.addClass("navbar-bg-section");
				
			}
			
		}
	});

} );
