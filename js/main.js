
(function() {
	const navbars = document.getElementsByTagName("nav");
	for (let i = 0; i < navbars.length; i++) {
		(function(nav) {
			var expanded = false;
			const navList = nav.querySelector(".nav-list");
			const naconstrow = nav.querySelector(".navbar-expand-arrow");
			nav.querySelector(".navbar-expand").onclick = function() {
				expanded = !expanded;
				if (expanded) {
					navList.style.display = "block";
					setTimeout(function() {
						const height = nav.querySelector(".nav-item").clientHeight * nav.querySelectorAll(".nav-item").length;
						navList.style.height = height + "px";
					}, 0);
					naconstrow.innerText = "▲";
					
				} else {
					navList.style.height = "0px";
					naconstrow.innerText = "▼";
				}
			};
			navList.addEventListener("transitionend", function() {
				if (this.style.height === "0px") {
					this.style.display = "none";
				}
			});
		})(navbars[i]);
	}
})();


// Transition to different parts of page
$(".contact_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');
    
});

$(".about_button").click(function() {
	let scrollAdjust = 150;
	
	if (document.documentElement.clientWidth <  601) {
		console.log(document.documentElement.clientWidth)
		scrollAdjust = 190;
	}
    $('html, body').animate({
        scrollTop: $("#about").offset().top-scrollAdjust
    }, 1500);
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');
    
    
});

$(".project_button").click(function() {
	let scrollAdjust = 150;
	
	if (document.documentElement.clientWidth <  601) {
		console.log(document.documentElement.clientWidth)
		scrollAdjust = 220;
	}
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-scrollAdjust
    }, 1500);
    $('.menu li').removeClass('selected');
	$(this).children().addClass('selected');
});


$(".skills_button").click(function() {
	let scrollAdjust = 150;
	
	if (document.documentElement.clientWidth <  601) {
		console.log(document.documentElement.clientWidth)
		scrollAdjust = 190;
	}
    $('html, body').animate({
        scrollTop: $("#skills").offset().top-scrollAdjust
    }, 1500);
    $('.menu li').removeClass('selected');
	$(this).children().addClass('selected');
});

   
 

