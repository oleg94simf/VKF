


$(document).ready(function () {
	$("#phone").mask("+38 (999) 999-99-99", {
		completed: function () {
			$("#phone ").addClass('valid');

		}
	});
	let poreerwe = document.querySelector('#phone');
	poreerwe.addEventListener('keydown', function (event) {
		if (event.code == 'Backspace' || event.code == 'Escape') {
			$("#phone").removeClass('valid');

		}
		console.log(event.code);
	});

})