$(document).ready(() => {
	$("#nav-toggle").click(() => {
		$(".mobile-nav-container").toggle();
		if ($(".mobile-nav-container").css("display") == "block") {
			$("body").css("overflow", "hidden");
		} else if ($(".mobile-nav-container").css("display") == "none") {
			$("body").css("overflow", "visible");
		}
	})
	$(".moile-nav-item").click(() => {
		$(".mobile-nav-container").hide();
		$("body").css("overflow", "visible");
	})
})
