$(document).ready(function() {
	var counter = 0;
	function updateCounter(){
		if(counter == 0){
			clearInterval(foo);
			$('.loadingpage').addClass("pageisloaded");
		}
		else{
			$('.counter h1').html(counter);
			counter++;
		}
	}
	
	var foo = setInterval(updateCounter , 0);
	
});