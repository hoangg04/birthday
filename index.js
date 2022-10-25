const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const next = $("#next");
const count = $$(".item").length;
let active = 1;
function nextSlide() {
	let item_default = document.getElementById(
		"item_" +
			(active - 2 == -2 ? count - 2 : active - 2 == -1 ? count - 1 : active - 2)
	);
	item_default.classList.remove("active");
	item_default.classList.remove("hide");
	let item_hide = document.getElementById(
		"item_" + (active - 1 < 0 ? count - 1 : active - 1)
	);
	item_hide.classList.remove("active");
	item_hide.classList.add("hide");
	let item_active = document.getElementById("item_" + active);
	item_active.classList.add("active");
	item_active.classList.remove("hide");
}
function test() {
	function delay(s) {
		return new Promise(function (resolve, reject) {
			setTimeout(resolve, s);
		});
	}
	delay(500).then(function () {
		active = active + 1 >= count ? 0 : active + 1;
		nextSlide();
	});
}
next.addEventListener("click",test);
