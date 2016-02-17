angular.module('myApp')
.controller('homeController', function($scope) {

	$(document).ready(function(){
    	$('.slider').slider({
    		full_width: true,
    		indicators: false
    	});
    });
        
       	// Pause slider
	$('.slider').slider('pause');
		// Start slider
	$('.slider').slider('start');
		// Next slide
	$('.slider').slider('next');
		// Previous slide
	$('.slider').slider('prev');



});