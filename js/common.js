function menu_click()
	{
		var navigation = $(".header__navigation");
		if (navigation.css("display") == "none")
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
	}

$(document).ready(function()
{
	function fullsizewindow()
	{
		$(".parallax-window").css("height", $(window).height());
	}

	fullsizewindow();
	$(window).resize(function()
	{
		fullsizewindow();
	});

});
