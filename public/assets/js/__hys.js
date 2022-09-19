$(function() {
   let pg = $('body').data('type');

    switch (pg) {
        case 'home':
            __hysLib.listOccasions();
            return;
        case 'occasion':
            __hysLib.listOccasionCards($('body').data('id'));
            return;
        case 'card':
            __hysLib.displayCardDetails($('body').data('oid'), $('body').data('id'));
            return;
        default:
            return;
    }
});