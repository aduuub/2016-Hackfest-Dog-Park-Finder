

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
	getReviews();

});

function postReview(){
	var dogSize = $("#dog-size").val();
	var safety = $("#safety").val();
	var overallRating = $("#overall-rating").val();
	var comment = $("#comment-box").val();

	$.post("http://localhost:8080/api/parkReview", {name:"name",dogSize: dogSize, 
		rating: overallRating, safety: safety, description: comment})
	.done(function(){
		$("#comment-box").val("");
		getReviews();
	});
}

function getReviews(){
	$.get("http://localhost:8080/api/parkReview", function(data){
		var dataCopy = data.slice(data.length - 5, data.length);
		$("#review1").html(data[data.length-1].description);
		$("#review2").html(data[data.length-2].description);
		$("#review3").html(data[data.length-3].description);
		$("#review4").html(data[data.length-4].description);
		$("#review5").html(data[data.length-5].description);
	});






}