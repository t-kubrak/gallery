var _imgNumber = 8;

function getImages(){
    var images = [];
    for (var i = 1; i <= _imgNumber; i++) {
        images.push('images/img' + i + '.jpg');
    };
    return images;
};

$(document).ready(function(){

    var images = getImages();

	for(var i=0; i< images.length; i++){
		var thumb = $('<div>');
		thumb.addClass('thumb');
		
		var img = $('<img>');	
		img.attr('src', images[i]);
	
		thumb.append(img);
		thumb.appendTo('#thumbs');

		thumb.data("tag", i);
		
		thumb.css('opacity', 0);
		thumb.fadeTo(2000 + i * 500, 0.8, function() {
			$(this).click(showPicture); 
			$(this).css('cursor', 'pointer');
		});
	}
});

function showPicture() {

	var imgSection = $('#imgSection'); 
	var currentImg = imgSection.find('img'); 
	if (imgSection.data("tag") != $(this).data("tag")) {				
		currentImg.animate({ 
			opacity: 0, 
			width: 0,
			height: 0 
			}, 500, function () {
				 $(this).remove(); 
				 });
		
		var img = $(this).find('img'); 
		var imgClone = img.clone(); 
		imgClone.addClass('thumbClone'); 	
		
		imgSection.append(imgClone);
		imgSection.data(("tag"), $(this).data("tag"));
		
		imgClone.animate ({ 
			'max-width': '380px',
			'max-height': '380px', 
			'margin-top': '0px', 
			opacity: 1
		}, 1000);
		
		$('.thumb').removeClass('selected'); 
		$(this).addClass('selected');
	}
}