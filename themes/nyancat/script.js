/*  
    Add the following html to the top of the body tag in the index.html file:
    <div class="rainbowcat-left roll-in-left"></div>
    <div class="rainbowcat-right roll-in-right"></div>
    <div class="rainbowcat-top roll-in-top"></div>
    <div class="rainbowcat-bottom roll-in-bottom"></div>
    <div class="rainbowcat-right-bottom roll-in-right"></div>
    <div class="rainbowcat-left-bottom roll-in-left"></div> 
*/

// rainbowcat-left-bottom
let rainbowcat_left_bottom = document.createElement("div");
rainbowcat_left_bottom.classList.add("rainbowcat-left-bottom", "roll-in-left");
document.body.prepend(rainbowcat_left_bottom);

// rainbowcat-right-bottom
let rainbowcat_right_bottom = document.createElement("div");
rainbowcat_right_bottom.classList.add(
  "rainbowcat-right-bottom",
  "roll-in-right"
);
document.body.prepend(rainbowcat_right_bottom);

// rainbowcat-bottom
let rainbowcat_bottom = document.createElement("div");
rainbowcat_bottom.classList.add("rainbowcat-bottom", "roll-in-bottom");
document.body.prepend(rainbowcat_bottom);

// rainbowcat-top
let rainbowcat_top = document.createElement("div");
rainbowcat_top.classList.add("rainbowcat-top", "roll-in-top");
document.body.prepend(rainbowcat_top);

// rainbowcat-right
let rainbowcat_right = document.createElement("div");
rainbowcat_right.classList.add("rainbowcat-right", "roll-in-right");
document.body.prepend(rainbowcat_right);

// rainbowcat-left
let rainbowcat_left = document.createElement("div");
rainbowcat_left.classList.add("rainbowcat-left", "roll-in-left");
document.body.prepend(rainbowcat_left);
