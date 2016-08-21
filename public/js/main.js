jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	$("#submit-review").click(postReview);

});

function postReview(){
	var dogSize = $("#dog-size").val();
	console.log(dogSize);
	var safety = $("#safety").val();
	console.log(safety);
	var overallRating = $("#overall-rating").val();
	console.log(overallRating);
	var comment = $("#comment-box").val();
	console.log(comment);

	$.post("http://localhost:8080/api/parkReview", {name:"name",dogSize: dogSize, 
		rating: overallRating, safety: safety, description: comment});


}