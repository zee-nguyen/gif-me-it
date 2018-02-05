$(function(){
	$('.search-btn').on('click', function(e) {
		e.preventDefault();
		$('.content').empty();
		let param = {
			search: $('.search-input').val()
		}
		$.ajax({
			url: '/search',
			data: param,
			contentType: 'application/json',
			success: function(data) {
				let string = '';
				data.forEach(function(item) {
					string += '<div class="thumbnail"> ';
					string += '<img src="' + item.images.downsized.url + '">';
					string += '</div>';
				});
				$('.content').append('<section class="search-result"> <h2>' + $('.search-input').val() + '</h2> <div class="search-result-items">' + string + '</div></section>');
			}
		});
	});
})
