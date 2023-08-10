gsap.from(".box", {
	scale:0,
	delay:1,
	duration:3,
	rotate:360,
	x: 990,
	scrollTrigger: {
		trigger: ".box",
		markers: true,
		scroller: "body",
		start: "top 50%",
		end: "top 30%",
		scrub: 5

	}
})