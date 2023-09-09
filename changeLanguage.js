function french () {
	if ($("#img-uk").hasClass("current") == true) {
		$("#img-uk").removeClass("current");
		$("#img-france").addClass("current");
		$(".nav-item-1").html("Histoire");
		$(".nav-item-3").html("Télévision");
		$("#history-header").html("Histoire");
		$("#par-1").html('Sherlock Holmes est une franchise littéraire qui a fait ses débuts en 1887, les livres sont écrits par <a href="#author" class="underline">Sir Arthur Conan Doyle.</a>');
		$("#par-2").html('Il est un &laquo; détective consultant &raquo;; il est bien connu pour sa nature observatrice et déductive. Les romans sont généralement racontés par le Dr. John H. Watson.');
		$("#par-3").html('Au total, il y a 4 romans et 56 nouvelles (1887&ndash;1927). Depuis lors, de nombreux <a href="#tv" class="underline">films et émissions de télévision ont été réalisés</a> basés sur les romans.');
		$("#par-4").html('Sir Arthur Conan Doyle est le cerveau derrière la franchise. Il est né à Édimbourg, au Royaume-Uni.');
		$("#par-5").html('Il a été anobli pour avoir rédigé une brochure qui défendait les actions britanniques pendant la guerre des Boers.');
		$("#par-6").html('Sherlock Holmes a été inspiré par Joseph Bell, qui était un chirurgien écossais qu\'Arthur pensait avoir de bonnes méthodes de déduction et d\'observation.');
		$("#view-more").html('Voir plus');
		$("#tv-title").html("Télévision");
	} 
}
function english () {
	if ($("#img-france").hasClass("current") == true) {
		$("#img-france").removeClass("current");
		$("#img-uk").addClass("current");					
		$(".nav-item-1").html("History");
		$(".nav-item-3").html("TV");
		$("#history-header").html("History");
		$("#par-1").html('Sherlock Holmes stands as a book franchise that made its debut in 1887, the books are written by <a href="#author" class="underline">Sir Arthur Conan Doyle.</a>');
		$("#par-2").html('He is a &ldquo;consulting detective&rdquo;; he is well-known for his observant, deductive nature. The novels are usually narrated by Dr. John H. Watson.');
		$("#par-3").html('In total, there are 4 novels &amp; 56 short stories (1887&ndash;1927). Since then, many <a href="#tv" class="underline">movies and TV shows have been made </a> based on the novels.');
		$("#par-4").html('Sir Arthur Conan Doyle is the mastermind behind the franchise. He was born in Edinburgh, United Kingdom.');
		$("#par-5").html('He received knighthood for authoring a pamphlet that defended British actions during the Boer War.');
		$("#par-6").html('Sherlock Holmes was inspired by Joseph Bell, who was a Scottish surgeon who Arthur thought to have good method’s of deductions &amp; observation.');
		$("#view-more").html('View more');
		$("#tv-title").html("TV");
	}
}
