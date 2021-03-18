var video;
var vScale = 16;
function setup() {
	createCanvas(640, 480);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width/vScale, height/vScale);
	video.hide();
}

function draw() {
	background(220);
	video.loadPixels();
	for (var y = 0; y < video.height; y++) {

		for(var x = 0; x < video.width; x++) {

			var i = (video.width - x + 1 + (y * video.width))*4;
			var r = video.pixels[i];
			var g = video.pixels[i+1];
			var b = video.pixels[i+2];

			var bright = (r+g+b)/3;

			var w = map(bright, 0, 255, 0, vScale);

			noStroke();
			fill(r, g, b);
			rect(x*vScale, y*vScale, w, w);
		}
	}

}
/*
combinazioni fighe
	ROSSO STRANO MORTE
	pixels[i] = random(0,255);
	pixels[i+1] = 51;
	pixels[i+2] = 51;
	pixels[i+3] = 255;


*/