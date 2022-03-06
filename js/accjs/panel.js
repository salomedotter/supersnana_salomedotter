window.onload = function() {

}

$(document).ready(function() {
    buttonClick();
});


function buttonClick() {
    const $panel_1 = $('.panel-1');
    const $panel_2 = $('.panel-2');
    const $panel_3 = $('.panel-3');
    
    $('.png-size-bulle').on('click', function() {
       $panel_1.addClass('switch-panel-1');
        
    });
    $('.panel-1').on('click', function() {
        $panel_1.removeClass('switch-panel-1');
    });

    $('.png-size-belle').on('click', function() {
        $panel_2.addClass('switch-panel-2');
         
     });
     $('.panel-2').on('click', function() {
         $panel_2.removeClass('switch-panel-2');
     });

     $('.png-size-rebelle').on('click', function() {
        $panel_3.addClass('switch-panel-3');
          
     });
     $('.panel-3').on('click', function() {
         $panel_3.removeClass('switch-panel-3');
     });

}




