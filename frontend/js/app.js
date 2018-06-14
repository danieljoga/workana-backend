/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





$(window).ready(function () {



    $('.select2').select2();




    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            var anim = $element.data('animate') + ' animated';

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {

                $element.addClass(anim).removeClass('animation-element');
            } else {
                //$element.removeClass(anim);
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});



