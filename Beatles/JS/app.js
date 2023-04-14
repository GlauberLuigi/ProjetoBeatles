let image = 1;

document.getElementById("slide1").checked = true

setInterval( function(){
ProxSlide();
}, 2000)

function ProxSlide(){
image++;
if(image>3){
    image = 1;
}

document.getElementById("slide"+image).checked = true

}