// var icon =document.getElementById("icon")
// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
//     if(document.body.classList.contains("dark-theme")){
//         icon.src="images/sun.svg "
//     }else{
//         icon.src="images/moon.svg"
//     }
// }
var icon = document.getElementById("icon");

icon.onclick = function () {
    // Toggle the dark theme
    document.body.classList.toggle("dark-theme");

    // Check if dark theme is active
    if (document.body.classList.contains("dark-theme")) {
        // Change icon to sun.svg and apply white color
        icon.src = "images/sun.svg";
        icon.style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"; // Makes it white
    } else {
        // Change icon to moon.svg and reset color
        icon.src = "images/moon.svg";
        icon.style.filter = "none"; // Resets the filter
    }
};
