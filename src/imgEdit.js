(function($) {
	$.fn.imgEdit = function(options) {
		// Default settings
		var settings = $.extend({
			inputName : "profile-picture",
			form : "#profile",
		}, options);

		$(this).click(function(e){
			
			var target = this;
			// Create the file input
			input = document.createElement('input');
			// Add attributes
			input.setAttribute('type', 'file');
			input.setAttribute('name', settings.inputName);
			input.setAttribute('accept', '.jpg, .jpeg, .png');
			input.setAttribute('style', 'display:none;');
			// Trigger a click
			input.click();
			// Wait for change
			input.onchange = function() {
				// Remove any previous input
				$("#imgEditInput").remove();
				// Set ID to the new input
				input.setAttribute('id', 'imgEditInput');
				// Read file if any
				if(input.files && input.files[0]){
					var reader = new FileReader();
					reader.onload = function(e) {
				    	$(target).attr('src', e.target.result);
				    }
					reader.readAsDataURL(input.files[0]);
					
					// Apend input
					$(settings.form).append(input);
				}
				
				
			};
		});

	};

}(jQuery));
