$(window).load(function() {
	$('#slider').nivoSlider();
});

$(document).ready(function() {
	$.fn.phVal = function (value) {
        if ($(this).hasClass("on") && $(this).hasClass("placeholder")) {
            if (typeof value != 'undefined' && value != null) {
                $(this).val(value).removeClass("on");
                return $(this);
            } else {
                return "";
            }
        }
        if (typeof value != 'undefined' && value != null) {
            return $(this).val(value);
        } else {
            return $(this).val();
        }
    };

	initPlaceholder();
	initMinisite();
	switchBg()
});

function switchBg() {
	setInterval(function(){
		if($('.slide1').css('opacity') == 1) { switchIt('1', '2'); }
		else if($('.slide2').css('opacity') == 1) { switchIt('2', '3'); }
		else if($('.slide3').css('opacity') == 1) { switchIt('3', '4'); }
		else if($('.slide4').css('opacity') == 1) { switchIt('4', '5'); }
		else if($('.slide5').css('opacity') == 1) { switchIt('5', '6'); }
		else if($('.slide6').css('opacity') == 1) { switchIt('6', '7'); }
		else if($('.slide7').css('opacity') == 1) { switchIt('7', '1'); }
	}, 500);

}

	function switchIt(off, on) {
		var slideOut = 000;
		var slideIn = 000;

		$('.slide' + off).animate({ 'opacity':0 }, slideOut, 'linear', function() {
			$('.slide' + off).css({ 'display':'none'});
		});
		$('.mish' + off).css({ 'display':'none' });
		$('.slide' + on).css({ 'display':'block' }).animate({ 'opacity':1 }, slideIn, 'linear');
		$('.mish' + on).css({ 'display':'block'})
	}

function initMinisite() {
	$('#page').delay(666).animate({ 'margin-top':'0px' }, 1900, 'easeOutExpo', function() {
		activateBtns();
	});
}

function initPlaceholder() {
    $(".placeholder").live("focus", function () {//if there is an error "שם\טלפון\עיר לא תקין"
        if ($(this).hasClass(("errors")) && $(this).hasClass(("errInput"))) {
            $(this).removeClass("errors");
            $(this).val("");
            $(this).removeClass("errInput");
        }
    });

    $(".placeholder.on").live("focus", function () {

		if($(this).attr('id') == "phone" || $(this).attr('id') == "email") {
			$(this).css({ 'direction':'ltr', 'text-align':'left' });
		}

        $(this).val("").removeClass("on");
        if ($(this).hasClass(("errors")) && $(this).hasClass(("errInput"))) {
            $(this).removeClass("errors");
            $(this).removeClass("errInput");
        }
    });

    $(".placeholder").live("blur", function () {
        if ($(this).val() == "") {
			if($(this).attr('id') == "phone" || $(this).attr('id') == "email") {
				$(this).css({ 'direction':'rtl', 'text-align':'right' });
			}
            $(this).addClass("on").val($(this).data("placeholder"));
        }
        if ($(this).hasClass(("errors")) && $(this).hasClass(("errInput"))) {
            $(this).removeClass("errors");
            $(this).removeClass("errInput");
        }
    });

    $(":input[data-placeholder]").each(function () {
        $(this).addClass("placeholder");
        $(this).addClass("on").val($(this).data("placeholder"));
		$(this).css({ 'direction':'rtl', 'text-align':'right' });
    });
}

function activateBtns() {
	// c2c click
	$('#c2c_btn').on('click', function () {
		activateC2C();
	});

	$('#page form input').keypress(function(e){
		if(e.keyCode == 13){
			e.preventDefault();
			$('#submit_btn').trigger('click');
			//alert('ENTER');
		}
		else {
			//alert(e.keyCode);
		}
	});
}

// C2C
function activateC2C() {
	var today = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var startHrs = 9;
	var endHrs = 18;

	var day = weekday[today.getDay()];
	var hrs = today.getHours();

	var c2cRes = document.location.href.split("?");
	var c2cUrl = c2cRes[0] + "?c2c=1&" + c2cRes[1];

	setTimeout(function(){
		window.history.pushState("c2c", meta_title, c2cUrl);
		setTimeout(function(){
			if(hrs < startHrs || hrs >= endHrs || day == "Friday" || day == "Saturday") {
				alert("שעות פעילות המוקד בימים א'-ה' בין השעות "+startHrs+":00-"+endHrs+":00\nאנא השאר פרטים ונציגנו יחזור אליך בשעות הפעילות");
			} else {
				var num = "tel:09-866-3004";
				window.open(num, '_self');
			}
		//	setTimeout(function(){
			//	window.location.reload();
			//},666);
		},1200);
	},300);
}

function activateThanks() {
	var q = document.location.href.split('?');
	var qs = q[1];

	$('#preloader').delay(250).css({ 'display':'block' }).animate({ 'opacity':1 }, 900, 'easeOutQuart');
	$('#theForm').animate({ 'opacity':0 }, 900, 'easeOutQuart', function() {
		$('#theForm').css({ 'display':'none' });
	});
	if(meta_gtm.length > 0) {
		datalayerEvents('submitSuccess');
	}

	var thanksUrl = "thankyou/?"+qs;
	setTimeout(function(){
		window.location = thanksUrl;
		this.form.reset();
	},2500);
}
