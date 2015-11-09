$(document).ready(function(){
    $.get("https://raw.githubusercontent.com/artkostm/test/master/README.md", 
				function(data)
				{
					$("#container_text").html(data);
				}
			);
}); 