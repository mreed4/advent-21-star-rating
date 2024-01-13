This was another fun challenge: build a simulated rating UI where a mouseover on a star highlights that star and all previous stars. Most of the provided code here is HTML, and most of the HTML is the SVG code. 

My initial attempt had the stars losing all state once the mouse left one star, only for them to be conditionally highlighted again once the mouse hovered over the adjacent star. This caused a strange and ugly flashing effect. The fix the flashing effect, we had to conditionally keep other stars highlighted such than when leaving one star and entering another star, all stars conditionally retained their state. 

In the code provided by the challenge, this overall functionality is handled largely by conditionally setting a numbered class on the parent div of all the stars.
