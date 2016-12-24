var mn = $(".nav");
var mns = ".scrolled";
var hdr = $("").outerHeight(true);

$(document).scroll(function() {
    if( $(this).scrollTop()>0) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
});

