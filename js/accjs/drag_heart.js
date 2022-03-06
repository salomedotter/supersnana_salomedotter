var all_hearts = document.getElementsByClassName("heart");

for(let i = 1 ; i<(numberHeart-1); i++){
	dragElement(all_hearts[i]);
}

function dragElement(elmnt) {

  var svgContainer = document.getElementById("alls");	
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    //console.log(pos1-pos2);
    //console.log(pos3-pos4);

    var viewBoxX = Math.max(svgContainer.getAttribute("viewBox").split(" ")[2] - pos1,0);
    var viewBoxY = Math.max(svgContainer.getAttribute("viewBox").split(" ")[3] - pos2,0);
    var viewBox = "0 0 "+viewBoxX+" "+viewBoxY;
    svgContainer.setAttribute("viewBox", viewBox);
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}