$(document).ready(function() 
{
	function fullsizewindow()
	{
		$(".parallax-window").css("height", $(window).height());
	}

	function skillcalculate(name, count)
	{
		var i = 1;
		$(name).each(function(){
			if (i <= count) $(this).css("background-color", "#20bc99");
			i++;
     	});
	}

	skillcalculate(".csharp td", 7);
	skillcalculate(".javascript td", 5);
	skillcalculate(".unity td", 7);	
	skillcalculate(".htmlcss td", 8);
	skillcalculate(".aspnet td", 1);

	fullsizewindow();
	$(window).resize(function()
	{
		fullsizewindow();
	})

});