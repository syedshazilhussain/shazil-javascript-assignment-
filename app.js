var lider = [
    "image/flowers.jpg",
    "image/istockphoto.jpg",
    "image/federa.jpg",
    "image/avemaria.webp"
]
var oneImage = 0;
var twoImage = lider.length -1;
var lastImage = 0;

var nextbtn = document.getElementById("nextReturn");
function next() {
    image = document.getElementById("image1");
    lastImage++;
    if(lastImage >= twoImage){
        lastImage = 3;
    }
    image.src = lider[lastImage]
}
var previousbtn = document.getElementById("previousBack");
function previous() {
    image = document.getElementById("image1");
    lastImage--;
    if(lastImage <= oneImage){
        lastImage = 0;
    }
    image.src = lider[lastImage]
}
setInterval(function(){
    next()
}, 1000)
