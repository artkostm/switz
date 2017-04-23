$(document).ready(function(){
    $.get("https://raw.githubusercontent.com/artkostm/test/master/README.md", function(data) {
		$("#container_text").html(data.replace(/(\r\n|\n|\r)/gm, "<br>"));
	});
}); 
