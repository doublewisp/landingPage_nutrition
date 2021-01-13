/* ---------------------------------------------------- */
/* CONTACTS OVERLAY */
/* ---------------------------------------------------- */

$(function(){
	
  var overlay = $(".overlay"),
			contents = $(".contents"),
			btn = $(".contents__btn");

  btn.on("click",function(){
		contents.addClass("active");
    overlay.addClass("active");
  });

	overlay.on("click",function(){
		overlay.removeClass("active");
		contents.removeClass("active");
  });
});

/* ---------------------------------------------------- */
/* COOKIE CONSENT */
/* ---------------------------------------------------- */

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 