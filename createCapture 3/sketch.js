
var sketch = function(f){
	f.col = 0;
	f.px;
	f.py;
	f.c = cols;
	f.r = rows;

	f.setup = function(){

		f.otherDiv = f.createDiv();

		cols++;
		if(cols > 3){
			cols = 0;
			rows++;
		}

		rSlider.value(random(255));
		gSlider.value(random(255));
		bSlider.value(random(255));

	}

	f.draw = function(){
		f.canv = f.createCanvas(cSize, cSize);
		f.canv.position(f.px, f.py);
		f.background(f.col);
		f.canv.parent(f.otherDiv);

	}
}

var instances = [];
var cols = 0;
var rows = 0;
var counter = 0;

var rSlider;
var gSlider;
var bSlider;

var cSize;


function setup() {
	noCanvas();

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

function draw(){

	instances[counter].col = color(rSlider.value(), gSlider.value(), bSlider.value());
	
	cSize = windowWidth/4;
	
	for (var j = 0; j < instances.length; j++) {
		instances[j].px = cSize*instances[j].c;
		instances[j].py = (cSize*instances[j].r) + 60;
	}
}

function addInstance(){
	instances.push(new p5(sketch));//creo istanza
	counter++;
}
