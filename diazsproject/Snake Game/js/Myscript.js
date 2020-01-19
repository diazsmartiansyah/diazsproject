

//Function Loading ->
/* function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('#container', true);
  setVisible('.loader', false);
});
//<- */


	$(window).on("load",function(){
		$('.loader').show();

		$('li').click(function(){
			$('li').filter(this).hide();
		});
		$('#btn1').click(function(){
			$('#tulisan').fadeIn(1000);
		});

		$('#btn2').click(function(){
			$('#tulisan').fadeOut(1000);
		});

		$('#btn3').click(function(){
			$('#tulisan').fadeToggle(1000);
		});

		$('#btn4').click(function(){
			$('#tulisan').fadeTo(1000,0.5);
		});

		if ($('textarea').val()=='') {
			$('textarea').val('Input sesuatu');
		}
		$('#textarea').css({
			'marginTop' : '10px',
			'resize' : 'none',
			'color'  : 'red',
			'width'  : '165px',
			'height' : '100px'
		});

		

		$('form').css('marginTop','20px');
		$('form').submit(function(){
			var tulisan = $('#inputanText').val();
			$('#textarea').val(tulisan);
			event.preventDefault();
		});

		$('.boxes').click(function(){
			$(this).hide();
		});

		setInterval(function(){
			$('.boxes').
			animate({
				'marginTop' : '-=100'
			},1000).
			animate({
				'marginBottom' : '-=100'
			},1000).
			animate({'marginLeft' : '-=100'
			},1000)
		},500);



	});