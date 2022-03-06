class RandomMover {
    constructor(parent) {
      this.parent = parent;
      this.speed = Math.random() * 3 ;


      this.createElement();

      
    }
  
    createElement(){
     const movers = document.getElementById("allMover").children;
    
    this.element = movers[Math.floor(Math.random() * movers.length)].cloneNode(true);
    this.parent.appendChild(this.element);
    this.animateDiv();
    }

    makeNewPosition(){
    
        // Get viewport dimensions (remove the dimension of the div)
     
        var h = this.parent.offsetHeight - 50 ;
        var w = this.parent.offsetWidth - 50;
        // console.log(this.speed);
        
        var nh = (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * h)*this.speed;
        var nw =  (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * w)*this.speed;
        
        return [nh,nw];    
        
    }
    
    animateDiv(){
        var newq = this.makeNewPosition();
        // console.log(newq);
        this.element.animate({ top: Number(newq[0])+"px", left: Number(newq[1])+"px"   }, 10000);
        setTimeout(()=>{this.animateDiv()}, 10000);
    };
  }