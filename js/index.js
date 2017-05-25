/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
	
    $(".chocolat-parent").Chocolat({
        enableZoom: false
     });
	
   $("#searchInput").keyup(function () {
       var findPhoto = $("#searchInput").val().toLowerCase();
	     
        if(findPhoto !== "") {
          $(".chocolat-parent a").hide();
		    
	   $(".chocolat-parent a").each(function () {
                var keyword = $(this).attr("title");
		   
		   if(keyword.indexOf(findPhoto) >= 0) {
			   $(this).show();
		   }    
	   });
		   
	   } else {
		   $(".chocolat-parent a").show();
	   }	   
   });							  	  
});
	
	
