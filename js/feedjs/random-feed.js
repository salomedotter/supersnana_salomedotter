$(document).ready(function(){
    //part1
    animateDiv('.bu');
    animateDiv('.bu2');

    animateDiv('.be');
    animateDiv('.be2');

    animateDiv('.reb');
    animateDiv('.reb2');

    //part2
    animateDiv2('.bu3');
    animateDiv2('.bu4');

    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[12], left: newq[1] }, 10000, function(){
      animateDiv(myclass);        
    });
    
};

function makeNewPosition2(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 70;
    var w = $(window).width() - 70;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}



function animateDiv2(myclass){
    var newq = makeNewPosition2();
    $(myclass).animate({ top: newq[10], left: newq[1] }, 10000, function(){
      animateDiv2(myclass);        
    });
    
};

