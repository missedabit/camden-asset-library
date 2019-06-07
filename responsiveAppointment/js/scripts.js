$(document).ready( function() {

	$('.navbar-nav li').click(function() {

	    $('.navbar-nav li.active').removeClass('active');
	    $(this).addClass('active');
	});

	$("input[type='checkbox']").change(function(){
	    if($(this).is(":checked")){
	        $(this).closest(".check-input").addClass("focusBorder").removeClass('labelfocus');
	    }else{
	        $(this).closest(".check-input").removeClass("focusBorder").removeClass('labelfocus'); 
	    }
	});
	
	$("input[type='checkbox']").focus(function() {
	    $(this).closest(".check-input").addClass('labelfocus');
	}).blur(function() { 
	   $(this).closest(".check-input").removeClass('labelfocus');
	});

	$("input[type='radio']").change(function() {
	    $('input:radio[name='+$(this).attr('name')+']').closest(".check-radio").removeClass('active');
	    $(this).closest(".check-radio").addClass('active').removeClass('labelfocus');
	});

	$("input[type='radio']").focus(function() {
	    $(this).closest(".check-radio").addClass('labelfocus');
	}).blur(function() { 
	   $(this).closest(".check-radio").removeClass('labelfocus');
	});

	$(".reset-clear").click(function() {
	    $(this).closest('form').find("input[type='checkbox'], input[type='radio'], select").val("");
	});

 	 $('#navbar').on('shown.bs.collapse', function () {
       $(".glyphicon").removeClass("arrow-down").addClass("arrow-up");
    });

    $('#navbar').on('hidden.bs.collapse', function () {
       $(".glyphicon").removeClass("arrow-up").addClass("arrow-down"); 
    });

	if ($(window).width() < 480) {

	    $('.row').each(function() {  
	        
	        var highestBox = 0;
	        $('.thumb-content', this).each(function(){
	        
	            if($(this).height() > highestBox) 
	               highestBox = $(this).css("height","100%"); 
	        });  
	        $('.thumb-content',this).height(highestBox);
		});

	}

	else {

	    $('.row').each(function() {  
	        
	        var highestBox = 0;
	        $('.thumb-content', this).each(function(){
	        
	            if($(this).height() > highestBox) 
	               highestBox = $(this).height(); 
	        }); 
	        $('.thumb-content',this).height(highestBox);
	        
		});

	};


})