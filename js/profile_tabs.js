(function($){

    $(document).ready(function() {
        $( "#tabs" ).tabs({
            active: 7,
            activate: function( event, ui ) {
                $(ui.newTab).find('a').addClass('active');
                $(ui.oldTab).find('a').removeClass('active');
            }
        });
    });
})(jQuery);
