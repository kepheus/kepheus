// http://www.tutorio.com/tutorial/pure-css-image-rollovers
$(document).ready(function() {
    $("ul#sites img").click(
        function() {
            $(this).attr("src", $(this).attr("src").split(".").join("-hover."));
        },
        function() {
            $(this).attr("src", $(this).attr("src").split("-hover.").join("."));
        }
    );
    $("ul#sites img").hover(
        function() {
            $(this).attr("src", $(this).attr("src").split(".").join("-hover."));
        },
        function() {
            $(this).attr("src", $(this).attr("src").split("-hover.").join("."));
        }
    );
});

