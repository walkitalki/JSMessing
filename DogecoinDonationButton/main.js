$(document).ready(function(){
 
	//displays the popup
    function showPopup(){
        var docHeight = $(document).height();
        var scrollTop = $(window).scrollTop();
        $('.overlay-bg').show().css({'height' : docHeight});
        $('.popupdoge').show().css({'top': scrollTop+20+'px'});
    }
 
	//function to close popup
    function closePopup(){
        $('.overlay-bg, .overlay-content').hide(); //hide the overlay
    }
 
	//shows the popup when the button to donate is clicked
    $('#dogebutton').click(function(event){
        event.preventDefault();
        var selectedPopup = $(this).data('showpopup');
        showPopup();
    });
   
   //function to close popup when someone clicks out of the popup or the popup button
    $('#cloBut, .overlay-bg').click(function(){
        closePopup();
    });
     
	 //hide popup when user presses esc
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closePopup();
        }
    });
});
$(document).ready(function(){
	$("#donBut").click(function(){
		//make sure the amount is filled in, and a number
		if($("#amt").val() != "" && !(isNaN($("#amt").val()))){
			var donateHandler = "dogecoin:DRMDfXyG88JQKK3pqT8mbpGf1h5db2uZ8F?amount=" + $("#amt").val();
			if($("#msg").val() != "" && $("#msg").val() != null){
				var msgv = $("#msg").val();
				var msgr = msgv.replace(" ","%20");
				donateHandler = donateHandler + "&message=" + $("#msg").val();
			}
			if($("#lbl").val() != "" && $("#msg").val() != null){
				donateHandler = donateHandler + "&label=" + $("#lbl").val();
			}
			window.open(donateHandler,"_blank");
		}
	});
});