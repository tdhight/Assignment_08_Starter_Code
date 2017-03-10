// define cities in dropdown menu
// // user inputs city via a dropdown menu
// // after city is chosen, new image is displayed for that city

$(document).ready(function(){

	var city = ["NYC", "SF", "LA", "ATX", "SYD"];

	function newCity() {
		console.log('this is working');
		var city = $("#city-type").val();

		if (city === "0") {
			$("body").attr("class", "nyc");
		} else if (city === "1") {
			console.log('working2')
			$("body").attr("class", "sf");
		} else if (city === "2") {
			$("body").attr("class", "la");
		} else if (city === "3") {
			$("body").attr("class", "austin");
		} else if (city === "4") {
			$("body").attr("class", "sydney");	
		}
	}

    $.each(city, function(val, text) {
        $("#city-type").append( $("<option></option>").val(val).html(text) )
        }); 

	$("#city-type").change(newCity);


});