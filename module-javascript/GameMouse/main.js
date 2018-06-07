let mouses = document.querySelectorAll('.mouse');
let delay = 200;

document.onmousemove = function(event){
    for (let i = 0; i < mouses.length; i++) {
        
        
        setTimeout(function(mouse) {
            mouse.style.left = event.clientX + "px";
            mouse.style.top = event.clientY + "px";
        }, delay * i, mouses[i]);
    }
};

