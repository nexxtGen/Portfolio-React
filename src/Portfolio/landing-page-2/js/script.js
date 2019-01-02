

(function(){
    $('#Form')
        .find('input')
        .each(function(){

            $(this).on('change', function(){
                $this = $(this);
                if (this.value !== "") {
                    $this.addClass('filled');
                }
                else {
                    $this.removeClass('filled');
                }
            });
        });
})();

//Google Map script

  	window.initMap = function() {			
        var cord = {lat: 51.0900, lng: 17.0159};   
        var cordCenter = {lat: 51.0900, lng: 16.9199};        
		var map = new google.maps.Map(document.getElementById('map'), {			
			zoom: 12,
			center: cordCenter
		});		
		var marker = new google.maps.Marker({			
			position: cord,
			map: map
		}); 
    }	
    

	 
 