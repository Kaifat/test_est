(function($){
    $(document).ready(function() {

        // tabs
        $( "#tabs" ).tabs({
            active: 7,
            activate: function( event, ui ) {
                $(ui.newTab).addClass('active');
                $(ui.oldTab).removeClass('active');
            }
        });

        // shop_categories
        $('#shop_categories').accordion({
            collapsible: true,
            active: 0,
            heightStyle: "content"
        });

        $( "#select_bill" ).selectable();
    });
})(jQuery);
