;(function ($) {
	var defaults = {
		countItem      : 5,
		widthItem      : 100,
		itemMarginRigth: 25, 
	};

	var methods = {
		init: function (params) {
			 var $item = $('.carousel-element');
			 var $img = $('.carousel-element img');
			 var options = $.extend({}, defaults, params);
			 var widthCarousel = null;
			 widthCarousel = (options.countItem * (options.widthItem + options.itemMarginRigth)-options.itemMarginRigth) + 'px';
			 $img.css('maxWidth', options.widthItem);
			 $item.css({
			 	width: options.widthItem + 'px',
			 	marginRight: options.itemMarginRigth + 'px',
			 });
			 this.css('width', widthCarousel);

			 //Начало, Эта часть выполняется по дефолту сразу и не от чего не невисит
			var leftUIEl = $('.carousel-arrow-left');
			var rightUIEl = $('.carousel-arrow-right');
			var elementsList = $('.carousel-list');

			var pixelsOffset = options.widthItem + options.itemMarginRigth;
			var currentLeftValue = 0;
			var elementsCount = elementsList.find('li').length;
			var minimumOffset = - ((elementsCount - options.countItem) * pixelsOffset);
			var maximumOffset = 0;

			leftUIEl.click(function() {        
				if (currentLeftValue != maximumOffset) {
				    currentLeftValue += pixelsOffset;
				    elementsList.animate({ left : currentLeftValue + "px"}, 400);
				}        
			});

			rightUIEl.click(function() {   
				if (currentLeftValue != minimumOffset) {
				    currentLeftValue -= pixelsOffset;
				    elementsList.animate({ left : currentLeftValue + "px"}, 400);
				}        
			});
			//Конец!!!
			return this.css('width', widthCarousel);
		}
	}

	$.fn.carousel = function (method) {

		if ( typeof method === 'object' || ! method ) {
        	return methods.init.apply( this, arguments );
    	} 


}


$('.carousel-hider').carousel({countItem : 4, widthItem : 100, itemMarginRigth: 10});
})(jQuery);


//Можно настраивать ширины li, margin-right li и число отображаемых li