var sketch = function(f){
	f.col = color(rSlider.value(), gSlider.value(), bSlider.value());
	f.px = cSize*cols;
	f.py = (cSize*rows) + 60;

	f.setup = function(){

		f.otherDiv = f.createDiv();
		f.canv = f.createCanvas(cSize, cSize);
		f.canv.parent(f.otherDiv);
		f.canv.position(f.px, f.py);

		cols++;
		if(cols >3 && rows > 2){
			cols = 0;
			rows = 0;
		}else if(cols > 3){
			cols = 0;
			rows++;
		}
		

		rSlider.value(random(255));
		gSlider.value(random(255));
		bSlider.value(random(255));

	}

	f.draw = function(){
		f.image(cp, 0, 0, cSize, cSize);
		f.tint(f.col);
	}
}

var instances = [];

var cols = 0;
var rows = 0;
var cSize;

var i = 0;
var cp;

var rSlider;
var gSlider;
var bSlider;





function setup() {
	cSize = windowWidth/4
	noCanvas();
	cp = createCapture(VIDEO);
	cp.hide();
	var mainDiv = createDiv();
	mainDiv.parent('#main');

	rSlider = createSlider(0, 255, random(255));
	rSlider.class('controls');
	rSlider.parent(mainDiv);
	
	gSlider = createSlider(0, 255, random(255));
	gSlider.class('controls');
	gSlider.parent(mainDiv);

	bSlider = createSlider(0, 255, random(255));
	bSlider.class('controls');
	bSlider.parent(mainDiv);
	
	var addBtn = createButton('Aggiungi');
	addBtn.parent(mainDiv);
	addBtn.class('controls');
	addBtn.mouseClicked(addInstance);

	var p = createElement('span','muovi gli slider per cambiare colore, quindi premi Aggiungi');
	p.parent(mainDiv);
	p.class('controls');
	setTimeout(function(){p.remove();}, 3000);

	instances.push(new p5(sketch));
}

function addInstance(){
	instances.push(new p5(sketch));
	i++;
}
