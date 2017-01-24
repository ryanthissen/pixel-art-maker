var body = document.getElementsByTagName('body')[0];
var outerPixelDiv = document.getElementById('outerPixelDiv');
Object.assign(outerPixelDiv.style, {width: "612px", height: "628px", margin: "0 auto"});

var palette = document.createElement('div')
Object.assign(palette.style, {width: "612px", height: "100px", margin: "0 auto"});
body.appendChild(palette);

let selectedColor = undefined;

let paintbrush = false;

let colors = ['black', 'firebrick', 'red', 'peru', 'orange', 'yellow','palegreen', 'green', 'blue', 'lightskyblue', 'indigo', 'violet']


for (let i = 0; i < 2601; i++) {
  let innerPixelDiv = document.createElement('innerPixelDiv');
  Object.assign(innerPixelDiv.style, {border: "1px solid gainsboro", width: "12px", height: "12px", backgroundColor: "white", float: "left"});
  innerPixelDiv.addEventListener("mouseup", function() {
    paintbrush = false;
    this.style.backgroundColor = selectedColor;
  });
  innerPixelDiv.addEventListener("mousedown", function() {
    paintbrush = true;
  })
  innerPixelDiv.addEventListener("mouseover", function() {
    if(paintbrush) {
      this.style.backgroundColor = selectedColor;
    }
  })
  outerPixelDiv.appendChild(innerPixelDiv);
};

for (let i = 0; i < 12; i++) {
  let innerPalette = document.createElement('innerPalette');
  Object.assign(innerPalette.style, {border: "1px solid gainsboro", width: "51px", height: "51px", backgroundColor: colors[i], float: "left", borderRadius: "15%"});
  innerPalette.addEventListener("click", function(event) {
    selectedColor = event.target.style.backgroundColor;
  })

  palette.appendChild(innerPalette);
}
