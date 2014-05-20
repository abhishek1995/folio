$(document).ready(function() {
	
	//if submit button is clicked
	$('#formsubmit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=inputName]');
		var email = $('input[name=inputEmail]');
		var message = $('textarea[name=inputMessage]');
		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			return false;}
		
		if (email.val()=='') {
			return false;}
		
		if (message.val()=='') {
			return false;
		}
		//organize the data properly
		var dataString = 'name=' + name.val() + '&email=' + email.val() +  '&message='  + encodeURIComponent(message.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
			alert(dataString);
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "process.php",	
			
			//GET method is used
			type: "POST",

			//pass the data			
			data: dataString,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				alert("returned data = " + html);
				//if process.php returned 1/true (send mail success)
				// if (html==1) {					
					//hide the form
					$('#theform').fadeOut('slow');					
					
					//show the success message
					$('.done').fadeIn('slow');
					
				//if process.php returned 0/false (send mail failed)
				// } else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});	
});	
