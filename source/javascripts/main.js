var ww = $(window).width();
var mobile = ww < 481;
var device;

if (mobile) {
    console.log("mobile!");
}

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    device = true;
} else {
    device = false;
}

var leftText = $(".left--wrapper__large");
var rightText = $(".right--wrapper__large");

var hit = false;
var changed = false;
var currentTextArea = leftText 

function checkTextPosition(
	elementOne, 
	elementTwo, 
	leftMinX, 
	leftMaxX, 
	leftMinY, 
	leftMaxY,
	rightMinX, 
	rightMaxX, 
	rightMinY, 
	rightMaxY
	) {
		var posOne = elementOne.offset();
		var posTwo = elementTwo.offset()
    if (
        posOne.left >= leftMaxX ||
        posOne.top >= leftMaxY ||
        posOne.left <= leftMinX ||
				posOne.top <= leftMinY ||
				posTwo.left >= rightMaxX ||
        posTwo.top >= rightMaxY ||
        posTwo.left <= rightMinX ||
				posTwo.top <= rightMinY
    ) {
        if (!hit) {
          changed = true;
        } else {
          changed = false;
        }
        hit = true;
    } else {
        changed = changed;
        hit = false;
    }
}

function invert() {
    if ($('body').css("background-color") == "rgb(255, 255, 255)") {
    	$('body').css({
    		"background-color": 'black',
    		"color": 'white'
        })
        $('a').css({
            "color": 'white'
        })
    	$(".left--wrapper").css({
    		'border-right': '1px solid white'
        })
        $('#logo').css({
            'fill': 'white'
        })
    }
    else {
    	$('body').css({
    		"background-color": 'white',
    		"color": 'black'
        })
        $('a').css({
            "color": 'black'
        })
    	$(".left--wrapper").css({
    		'border-right': '1px solid black'
        })
        $('#logo').css({
            'fill': 'black'
        })
    }
}

function init() {
    // 2px padding
    var padding = 5;
    var leftMinBoundsX = padding;
    var leftMaxBoundsX = $(window).width() / 2 - (leftText.width() + padding);
    var leftMinBoundsY = 0;
    var leftMaxBoundsY = $(window).height() - leftText.height();

    var rightMinBoundsX = $(window).width() / 2 + padding;
    var rightMaxBoundsX = $(window).width() - (rightText.width() + padding);
    var rightMinBoundsY = 0;
    var rightMaxBoundsY = $(window).height() - rightText.height();

    checkTextPosition(
				leftText,
				rightText,
        leftMinBoundsX,
        leftMaxBoundsX,
        leftMinBoundsY,
				leftMaxBoundsY,
				rightMinBoundsX,
        rightMaxBoundsX,
        rightMinBoundsY,
				rightMaxBoundsY
    );

    if (changed) {
        invert();
    }

    requestAnimationFrame(init);
}

$(document).ready(function() {
    requestAnimationFrame(init);
});
