// Clicking a filter button
$(document).ready(function(){
    // on clicking a filter item
    $(".filteritem").click(function() {

        // find the class to show (all filteritem's have exactly 2 classes)
        var classlist = this.className.split(/\s+/);
        for (let i=0; i<classlist.length;i++) {
            if (classlist != "filteritem") {
                // Stop animations
                $("div.all").stop();
                // make everything slide up
                $("div.all").slideUp("fast");
                // EXCEPT the one we want. Slow down.
                $("div."+classlist[i]).stop();
                $("div."+classlist[i]).slideDown("fast");

                // Change background color of button
                $("li.filteritem").css({"background-color": "#c5c5c5", "color": "#161416"});
                $("li."+classlist[i]).css({"background-color": "#4d034d", "color": "snow"});

            }
        }
        //$("div.all").stop();
        //$("div.all").slideUp("fast");
        //$("div."+thisclass).stop();
        //$("div."+thisclass).slideDown("fast");
    });
});