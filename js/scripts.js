// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    console.log('my function is being called...');
    var x = document.getElementById("topMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}