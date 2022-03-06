const numberHeart = 20  ;
const svgContainer = document.getElementById("alls_b");
const body = document.body
const heart = document.getElementById("Layer_1_heart");

const titleIndex = document.getElementById("life_title");

for(let i = 2 ; i<numberHeart; i++){
    let copy = heart.cloneNode(true);
    let path = copy.getElementsByTagName("path")[0];
    // console.log(path);
    copy.id = `Layer_${i}`;
    copy.dataset.name = `Layer ${i}`;
    svgContainer.appendChild(copy);

    path.id = `cls-${i}`;
    path.setAttribute("transform", `scale(${((numberHeart-i)/numberHeart)})`);
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

svgContainer.style["pointer-events"]="auto";
svgContainer.addEventListener('click', event => {    
    svgContainer.style["pointer-events"]="none";
    titleIndex.style["visibility"] = "hidden";
    svgContainer.style["width"]="100%";
    svgContainer.style["height"]="100%";
    body.style["overflow"]="hidden";
    $('html,body').scrollTop(0);
    let frameCounter = 0;
    const slowFactor = 2;
    function frameRateManager(){
        //Change to change the time before it changes a page
        let limitFrameCounter=300

        frameCounter++;
        if(frameCounter%slowFactor == 0){
            if(frameCounter>limitFrameCounter){
                transitionToPage("index.html");
            }
            draw()
        }
        requestAnimationFrame(frameRateManager);
    }

    frameRateManager();
});

function draw(){
    const hearts = document.getElementsByClassName("heart");
    console.log(hearts)
    for(let i = 0; i<hearts.length ; i++){
       let  h  = hearts[i];
        const transform = h.getAttribute("transform", "scale");
        
    
        if(transform[0] == "s"){
            let value = transform;
            // console.log(transform);
            value = transform.replace('scale(','');
            value = value.replace(')','');
            
            value=value*0.85;
            if(value < 0.2){
                value=3;
            }

            h.setAttribute("transform", `scale(${value})`);
        }
        
    }

   
}