(function($){
    $(document).ready(function() {

        // selest status
        var selectStatusFunc = function() {
            var menu = $('#select-status-menu').toggle();
            $( document ).one( "click", function() {
                menu.hide();
            });
            return false;
        };
        $('#select-status-menu').hide();
        $( "#selected-status" ).click(selectStatusFunc);
        $( "#select-status" ).click(selectStatusFunc);


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

        // fix for checkbox in accordion
        $('span.check_blue').click(function(event) {
            event.stopPropagation();
        });

        $( "#bill_select" ).selectable();

        // custom input file upload
        function replaceFileInputVal(fileId, newInputId){
            var formFile = document.getElementById(fileId);
            var fileName = formFile.value.replace(/^([^\\\/]*(\\|\/))*/,"");
            $(newInputId).val(fileName);
        }

        $('#file_upload').change(function() {
            replaceFileInputVal(this.id, '#file_upload_result');
        });
    });
})(jQuery);
