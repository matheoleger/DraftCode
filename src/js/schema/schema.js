// window.addEventListener("load", () => {
//     const canvas = document.querySelector('.canvas')
//     const context = canvas.getContext('2d');

//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;

//     // context.strokeStyle = "white";
//     // context.strokeRect(50,50, 100, 100);

//     let drawing = false;

//     function startPos() {
//         drawing = true;
//         console.log(drawing)
//     }

//     function endPos() {
//         drawing = false;
//         context.beginPath();
//         console.log(drawing)

//     } 

//     function draw(e) {
//         if(!drawing) return;

//         console.log("drawing")

//         context.lineWidth = 40;
//         context.lineCap = "round";

//         context.lineTo(e.clientX - 300, e.clientY - 35);
//         context.strokeStyle = "red";
//         context.stroke();
//         context.beginPath();
//         context.moveTo(e.clientX - 300, e.clientY - 35)
//     }

//     //EventListeners
//     canvas.addEventListener('mousedown', startPos)
//     canvas.addEventListener('mouseup', endPos)
//     canvas.addEventListener('mousemove', draw)
    
// });

// //https://www.google.com/search?client=firefox-b-d&q=create+rubber+canvas+grml

// window.onload = function() {

//     let margingValue = 300; //change this value according to the offset value in css (.schema-element > left: 300px) 

// 	var canvas = document.querySelector(".canvas"),
// 		context = canvas.getContext("2d"),
// 		width = canvas.width = window.innerWidth,
// 		height = canvas.height = window.innerHeight,
// 		handle = {
// 			x: (width - margingValue) / 2,
// 			y: (height) / 2,
// 			radius: 60
// 		},
// 		offset = {};

// 	draw();

// 	function draw() {
// 		context.clearRect(0, 0, width, height);

// 		context.fillStyle = "gray";
// 		context.beginPath();
// 		context.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
// 		context.fill();
// 	}

// 	canvas.addEventListener("mousedown", function(event) {
//         console.log("click on zone")
// 		if(utils.circlePointCollision(event.clientX - margingValue, event.clientY - 70, handle)) {
//             console.log("click on circle DUUUDE")
// 			canvas.addEventListener("mousemove", onMouseMove);
// 			canvas.addEventListener("mouseup", onMouseUp);
// 			offset.x = event.clientX - margingValue - handle.x;
// 			offset.y = event.clientY - 70 - handle.y;
// 		}
// 	});

// 	function onMouseMove(event) {
// 		handle.x = event.clientX - margingValue - offset.x;
// 		handle.y = event.clientY - 70 - offset.y;
// 		draw();
// 	}

// 	function onMouseUp(event) {
// 		canvas.removeEventListener("mousemove", onMouseMove);
// 		canvas.removeEventListener("mouseup", onMouseUp);
// 	}


// };


window.onload = function() {

	let margingValue = 300; //change this value according to the offset value in css (.schema-element > left: 300px)

	var canvas = document.querySelector(".canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
	
	
	handle = {
		x: (width - margingValue) / 2,
		y: (height) / 2,
		radius: 60
	},
	offset = {};

};
