function responsiveTabs() {
    var x = document.getElementById("home-page-navbar");
    if (x.className === "home-page-navbar") {
        x.className += " responsive";
    } else {
        x.className = "home-page-navbar";
    }
}

$(document).ready(function () {
    if(window.location.href.indexOf('Home/About') != -1){
         $("#home-page-navbar a#about").addClass("active");
        return;
    }
    else if(window.location.href.indexOf('Home/Resume') != -1){
         $("#home-page-navbar a#resume").addClass("active");
        return;
    } 
    else if(window.location.href.indexOf('Home/Contact') != -1){
         $("#home-page-navbar a#contact").addClass("active");
        return;
    } 
    $("#home-page-navbar a#home").addClass("active");
});

var positionSmall = 0;
$(document).scroll(function () {
    positionSmall = $(this).scrollTop();
    if (positionSmall > 100) {
        $(".home-page-navbar").css('background-color', '#8FC1E3');
    } else {
        $(".home-page-navbar").css('background-color', '');
    }
});