

var buttons = ['Lexus LFA', 'Acura NSX', 'Toyota Supra', 'Nissan Skyline'];

var addButtons = function (){

	buttons.map(function(e) {


		var button = $("<button>");
			button.html(e);
			button.attr('data-name', e);


	$('.buttonContainer').append(button);		

			});
};


addButtons();

var runAjax = function(link){

	$('.images').empty();

	$.ajax({ url: link, method: "GET"})
	.done(function(response){


		for(var i = 0; i < 8; i++){
			var image = $("<img>");

			image.attr({
				src:response.data[i].images.fixed_height.url,
				"data-animate":response.data[i].images.fixed_height.url,
				"data-still":response.data[i].images.fixed_height_still.url,
				"data-name": 'still'
			});

	$('.images').append(image);

		}
	});
};


	$('#search').on('click', function(){
	$(".buttonContainer").empty();

	var userVal = $("#car-value").val().replace(' ', '+');

	if(userVal !== ''){
		button.push(userVal);
		var link = "http://api.giphy.com/v1/gifs/search?q=" + userVal + "&api_key=dc6zaTOxFJmzC";

runAjax(link);

}


	$("#car-value").val('');


	addButtons();

});

	$('.buttonContainer').on('click', 'button', function(){

		var buttonVal = $(this).attr('data-name');
		link = "http://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&api_key=dc6zaTOxFJmzC";

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


