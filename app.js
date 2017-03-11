

var buttons = ['Acura NSX', 'Lexus LFA', 'Toyota Supra', 'Nissan Skyline'];

var addButtons = function (){

	buttons.map(function(e) {


		var button = $("<button>");
			button.html(e);
			button.attr('data-name', e);


	$('.buttonContainer').append(button);		

			});
};


addButtons();

// function renderButtons(){

//$("#car-view").empty();

//for (var i = 0; i < buttons.length; i++) {

	//var a =$("<button");

	//a.addClass("car");

	//a.attr("data-name", buttons[i]);

	//$("#car-view").append(a);
//}
//}
	//$("#add-car").on("click", function(event){

		//event.preventDefault();

		//var car = $("car-input").val().trim();

		//buttons.push(car):

		//renderButtons();
	//});


var runAjax = function(link){

	$('.images').empty();

	$.ajax({ url: link, method: "GET"})
	.done(function(response){

		var results = response.data;


		for(var i = 0; i < 10; i++){
			var image = $("<img>");

			image.attr({
				src:response.data[i].images.fixed_height.url,
				"data-animate":response.data[i].images.fixed_height.url,
				"data-still":response.data[i].images.fixed_height_still.url,
				"data-name": 'still'
			});

			 if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

			 	var gifDiv = $("<div class='item'>");

			 	var rating = results[i].rating;

			 	var p = $("<p>").text("Rating: " + rating);

}
	$('.images').append(image);

		}
	});
};


	$('#search').on('click', function(){
	$(".buttonContainer").empty();

	var userVal = $("#car-value").val().replace(' ', '+');

	if(userVal !== ''){
		button.push(userVal);
		var link = "https://api.giphy.com/v1/gifs/search?q=" + userVal + "&api_key=dc6zaTOxFJmzC";

runAjax(link);

}


	$("#car-value").val('');


	addButtons();

});

	$('.buttonContainer').on('click', 'button', function(){

		var buttonVal = $(this).attr('data-name');
		link = "https://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&api_key=dc6zaTOxFJmzC";

runAjax(link);
	});

	$('.images').on('click', 'img', function(){


		if($(this).attr('data-name') === 'still'){
			$(this).attr('src', $(this).attr('data-still'));
			$(this).attr('data-name', 'animate');
		}
		else{
			$(this).attr('src', $(this).attr('data-animate'));
			$(this).attr('data-name', 'still');
		}
	});


