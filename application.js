$(document).ready(function() {
	$('#left_arrow, #middle_arrow, #right_arrow').hide();

	$('#left_titles').hide();
	$('#middle_titles').hide();
	$('#right_titles').hide();

	var bigButtons = $('.big_buttons');

	bigButtons.mouseenter(function (){
		var parentDiv = $(this).parent();
		var accompaniedImg = parentDiv.children('.arrow');
		accompaniedImg.show();
		if (parentDiv.is('#left_button'))
			$('#left_titles').show();
		if (parentDiv.is('#middle_button'))
			$('#middle_titles').show();
		if (parentDiv.is('#right_button'))
			$('#right_titles').show();
		$('#main_titles').hide();

		parentDiv.mouseleave(function (){
			accompaniedImg.hide();
			if (parentDiv.is('#left_button'))
				$('#left_titles').hide();
			if (parentDiv.is('#middle_button'))
				$('#middle_titles').hide();
			if (parentDiv.is('#right_button'))
				$('#right_titles').hide();
			$('#main_titles').show();
		});

	});
	var d=new Date();
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	var today = weekday[d.getDay()];
	$('#happy_day').html('Happy ' + today + '.');

});