$(document).ready(function(){
	var quotes = [];
	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=", function(a) {
		quotes=a;
  	});
		$('#get-quote').on('click',function(){

			var quote=quotes.shift();
			console.log(quotes);
			if(quote)
			$('#quote').html(quote.content + "<p>— " + quote.title + "</p>");
			else
			{ 
				console.log('getting more quotes');
				$('#get-quote').html('<i class="fa fa-spinner fa-spin"></i>Loading');
				$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=", function(a) {
					quotes=a;
					$('#get-quote').html('Get Quote');
					var quote=quotes.shift();
					if(quote)
					$('#quote').html(quote.content + "<p>— " + quote.title + "</p>");
  				});
			}
});
		
});