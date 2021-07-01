$('.top-menu').hover(
    function () {
        $(this).find('.sub-menu').show("slow");
    },
    function () {
        $(this).find('.sub-menu').hide("slow");
    }
);