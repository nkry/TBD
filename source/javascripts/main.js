var ww = $(window).width();
var mobile = ww < 481; 
var device;

if (mobile) {
	console.log("mobile!")
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 device = true;
}
else {
	device = false;
}

var leftText = $(".left--wrapper__large");
var rightText = $(".right--wrapper__large");

$(document).ready(function() {

	leftText.bind("oanimationend animationend webkitAnimationEnd", function() {
		console.log("animation finished")
	});

});


// vars
// var x = 0;
// var y = 0;


// var direction = 'right'

// // fn one
// function movePos(element, minX, maxX) {
// 	if (direction === 'left') {
// 		x -= 1;
//     y -= 1;
// 	}
// 	else if (direction === 'right') {
// 		x += 1;
//     y += 1;
// 	}
	
// 	var elementWidth = element.width()
// 	var pos = element.offset();

// 	if (pos.left >= maxX) {
// 		console.log("set dir to left")
// 		direction = "left"; 
// 	}
// 	else if (pos.left <= minX) {
// 		console.log("set dir to right");
// 		direction = "right"; 
// 	}

// 	element.css({
// 		left: x + 'px',
// 		top: y + 'px'
// 	})
// }


// function setAnimation() {
// 	var leftText = $(".left--wrapper__large");
// 	var rightText = $(".right--wrapper__large");
// 	var ww = $(window).width();
// 	var midpoint = ww / 2;
// 	var leftBoundsMax = midpoint - leftText.width();
// 	movePos(leftText, 0, leftBoundsMax);
// 	movePos(rightText, midpoint, ww);
// 	requestAnimationFrame(setAnimation);
// }

// $(document).ready(function() {
// 	requestAnimationFrame(setAnimation);
// });

// var invert = (function() {
// 	var executed = false;
// 	return function() {
// 		if (!executed) {
// 			executed = true;
// 				// do something
// 				console.log("invert colors now")
// 		}
// 	};
// })();


// new 


var hit = false
var count = 0

function checkTextPosition(element) {
	var pos = element.offset(); 

	// needs to be dynamic 
	// 10px is padding ?
	var maxBoundsX = ($(window).width() / 2) - (element.width() + 10);
	var maxBoundsY = $(window).height() - element.height();
	var minBoundsX = 10 
	var minBoundsY = 0

	if (pos.left >= maxBoundsX || pos.top >= maxBoundsY || pos.left <= minBoundsX || pos.top <= minBoundsY) {
		if (!hit) {
			hit = true
		}
		else {
			hit = false
		}
	}
	else {
		hit = hit;
	}
}

function invert() {
//  if ($('body').css("background-color") == "rgb(255, 255, 255)") {
// 	 console.log("make background color black")
// 	 $('body').css({
// 		 "background-color": 'black',
// 		 "color": 'white'
// 	 })
//  } 
//  else {
// 	 	 console.log("make background color black");

// 		$('body').css({
// 		 "background-color": 'white',
// 		 "color": 'black'
// 	 })
//  }
}


function init() {
	checkTextPosition(leftText);

	if (hit) {
		invert()
	}
	else {
		return false 
	}

	requestAnimationFrame(init);
}


$(document).ready(function() {
	requestAnimationFrame(init);
});