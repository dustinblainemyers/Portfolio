(function() {
	var navbars = document.getElementsByTagName("nav");
	for (var i = 0; i < navbars.length; i++) {
		(function(nav) {
			var expanded = false;
			var navList = nav.querySelector(".nav-list");
			var navArrow = nav.querySelector(".navbar-expand-arrow");
			nav.querySelector(".navbar-expand").onclick = function() {
				expanded = !expanded;
				if (expanded) {
					navList.style.display = "block";
					setTimeout(function() {
						var height = nav.querySelector(".nav-item").clientHeight * nav.querySelectorAll(".nav-item").length;
						navList.style.height = height + "px";
					}, 0);
					navArrow.innerText = "▲";
				} else {
					navList.style.height = "0px";
					navArrow.innerText = "▼";
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