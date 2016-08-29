$(document).ready(function(){
	// Remember clicked btn start
	$('.buttons_btn a').on('click', function(ev){
		ev.preventDefault();

		$('.buttons_btn a').removeClass('pressed');
		$(this).addClass('pressed');

		var btnVal = $(this).text();

		switch(btnVal){
			case 'день':
				$('#buttons_btn12').addClass('pressed')
				break;
			case 'неделя':
				$('#buttons_btn22').addClass('pressed')
				break;
			case 'месяц':
				$('#buttons_btn32').addClass('pressed')
				break;
		};
	});
	// Remember clicked btn end

});