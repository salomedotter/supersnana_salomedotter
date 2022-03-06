let currentScale = 0.65

//modif val currentScale, et appliquer comme la val du scale du svg 
const heartwheel = e => {
    // console.log(e)
    const alls = document.getElementById("tout")

    if (e.deltaY > 0) {
        console.log("en avant") 
        currentScale += 0.05
        alls.style.transform = "scale(" + currentScale + ", " + currentScale + ")"
    } else if (e.deltaY < 0) {
        currentScale += -0.05
        alls.style.transform = "scale(" + currentScale + ", " + currentScale + ")"
        console.log("en après") 

    }
}

// document
//     .getElementById("body")
document.getElementById("tout").addEventListener("wheel", heartwheel)
    

