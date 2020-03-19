(function() {
	const navbars = document.getElementsByTagName("nav");
	for (let i = 0; i < navbars.length; i++) {
		(function(nav) {
			let expanded = false;
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