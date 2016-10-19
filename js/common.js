function menu_click()
	{
		$(document).ready(function()
		{
			var navigation = $(".header__navigation");
			navigation.css("display");
			if (navigation == "none")
			{
				navigation.css("display", "block");
				navigation.css("position", "static");
				navigation.css("text-align", "center");
				navigation.css("background-color", "#0d0d0d");
			}
			else
			{
				navigation.css("display", "none");
				navigation.css("position", "absolute");
				navigation.css("text-align", "left");
				navigation.css("background-color", "none");
			}
		});
	}

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
