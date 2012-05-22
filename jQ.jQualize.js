(function ($){
    $.fn.jQualize = function (options){
        options =  $.extend({
              'children' : false
        }, options );
        var tallest = 0,
            $elements = (options.children) ? $(this).children() : $(this);
        return this.each(function (){
            $elements.each(function (i){
                var $element = $(this);
                tallest = ($element.height() > tallest) ? $element.height() : tallest;
            }).height(tallest);
        });
    };
}(jQuery));