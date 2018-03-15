function responsiveTabs() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

$(document).ready(function () {
    if(window.location.href.indexOf('Home/About') != -1)
    {
         $("#navbar a#about").addClass("active");
        return;
    }
    else if(window.location.href.indexOf('Home/Resume') != -1)
    {
         $("#navbar a#resume").addClass("active");
        return;
    } 
    else if(window.location.href.indexOf('Home/Contact') != -1)
    {
         $("#navbar a#contact").addClass("active");
        return;
    } 
    $("#navbar a#home").addClass("active");
});