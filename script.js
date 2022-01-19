

document.getElementById("div1").addEventListener("click", 
function (e) {
	e.stopPropagation();
	console.log("div1")
}, )
document.querySelector(".div2").addEventListener("mousedown", 
function() {
	console.log("div2")
})


