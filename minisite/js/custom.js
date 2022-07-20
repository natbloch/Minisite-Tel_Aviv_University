$(window).load(function() {
	$('#slider').nivoSlider();
});

$(document).ready(function() {
	switchBg()
	activateBtns();
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

function activateBtns() {
	$('#info-btn').on('click', function () {
		toggleBox(true, '14', '2');
	});
	$('#info-box .close_btn').on('click', function() {
		toggleBox(false, '0', '0');
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

// Box
function toggleBox(active, h, pd) {
	if(active) {
		$('#info-box').css({ 'display':'block', 'opacity':1 });
	}
	$('#info-box').animate({ 'height':h+'vw', 'padding-top':pd+'vw', 'padding-bottom':pd+'vw' }, 666, 'easeOutQuart', function() {
		if(!active) {
			$('#info-box').animate({ 'opacity':0 }, 222, 'easeOutQuad', function() {
				$('#info-box').css({ 'display':'none' });
			});
		}
	});
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
