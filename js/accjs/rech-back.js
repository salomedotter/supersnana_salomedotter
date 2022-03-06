const numberHeart = 16  ;
const svgContainer = document.getElementById("alls");

const heart = document.getElementById("Layer_1");
const titleIndex = document.getElementById("titleIndex");

function changeClickable(clickable){
    let all_hearts = document.getElementsByClassName("heart");
    if(clickable==0){
        for (var i = 0; i < all_hearts.length; i++) {
            all_hearts[i].style["pointer-events"] = "none";
        }
    } else{
        for (var i = 0; i < all_hearts.length; i++) {
            all_hearts[i].style["pointer-events"] = "auto";
        }        
    }
    
}

for(let i = 2 ; i<numberHeart; i++){
    let copy = heart.cloneNode(true);
    let path = copy.getElementsByTagName("path")[0];
    // console.log(path);
    copy.id = `Layer_${i}`;
    copy.dataset.name = `Layer ${i}`;
    svgContainer.appendChild(copy);

    path.id = `cls-${i}`;
    path.setAttribute("transform", `scale(${(numberHeart-i)/numberHeart})`);
}
heart.style["visibility"]="hidden";

changeClickable(1);

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
var all_hearts = document.getElementsByClassName("heart");

for (var i = 1; i < all_hearts.length; i++) {
    all_hearts[i].addEventListener('click', event => {    
        changeClickable(0);
        titleIndex.style["visibility"] = "hidden";
        let frameCounter = 0;
        const slowFactor = 2;
        function frameRateManager(){
            //Change to change the time before it changes a page
            let limitFrameCounter=300

            frameCounter++;
            if(frameCounter%slowFactor == 0){
                if(frameCounter>limitFrameCounter){
                    transitionToPage("feed.html");
                }
                draw()
            }
            requestAnimationFrame(frameRateManager);
        }

        frameRateManager();
    });
    // let mover = new RandomMover(document.getElementById("firstMover"));

    
}

function draw(){

    

    const hearts = document.getElementsByClassName("heart");
    for(let i = 0; i<hearts.length ; i++){
       let  h  = hearts[i];
        const transform = h.getAttribute("transform", "scale");
        
    
        if(transform[0] == "s"){
            let value = transform;
            // console.log(transform);
            value = transform.replace('scale(','');
            value = value.replace(')','');
            
            h.setAttribute("transform", `scale(${(value*1.1)%10})`);
        }
        
    }

   
}



$(document).ready(function() {
    console.log("ready!");

});



