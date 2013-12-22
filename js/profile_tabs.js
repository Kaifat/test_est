(function($){

    $(document).ready(function() {
        $( "#tabs" ).tabs({
            active: 7,
            activate: function( event, ui ) {
                $(ui.newTab).addClass('active');
                $(ui.oldTab).removeClass('active');
            }
        });
    });
})(jQuery);
