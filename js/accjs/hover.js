var thelayer1 = document.querySelector("#Layer_1");
console.log("clelayer1");

// let etat = true;
//Identify the circles
var thehearts = {
    outer: document.querySelector("#Layer_1"),
    outer_1: document.querySelector("#Layer_2"),
    outer_2: document.querySelector("#Layer_3"),
    outer_3: document.querySelector("#Layer_4"),
    outer_4: document.querySelector("#Layer_5"),
    outer_5: document.querySelector("#Layer_6"),
    outer_6: document.querySelector("#Layer_7"),
    outer_7: document.querySelector("#Layer_8"),
    outer_8: document.querySelector("#Layer_9"),
    outer_9: document.querySelector("#Layer_10"),
    outer_10: document.querySelector("#Layer_11"),
    medium: document.querySelector("#Layer_12"),
    medium_1: document.querySelector("#Layer_13"),
    medium_2: document.querySelector("#Layer_14"),
    medium_3: document.querySelector("#Layer_15"),
    medium_4: document.querySelector("#Layer_16"),
    medium_5: document.querySelector("#Layer_17"),
    medium_6: document.querySelector("#Layer_18"),
    medium_7: document.querySelector("#Layer_19"),
    medium_8: document.querySelector("#Layer_20"),
    medium_9: document.querySelector("#Layer_21"),
    medium_10: document.querySelector("#Layer_22"),
    medium_11: document.querySelector("#Layer_23"),
    medium_12: document.querySelector("#Layer_24"),
    inner: document.querySelector("#Layer_25"),
    inner_1: document.querySelector("#Layer_26"),
    inner_2: document.querySelector("#Layer_27"),
    inner_3: document.querySelector("#Layer_28"),
    inner_4: document.querySelector("#Layer_29"),
    inner_5: document.querySelector("#Layer_30"),
    inner_6: document.querySelector("#Layer_31"),
    inner_7: document.querySelector("#Layer_32"),
    inner_8: document.querySelector("#Layer_33"),
    inner_9: document.querySelector("#Layer_34"),
    lecentre: document.querySelector("#Layer_35")
}
$(document).ready(function() {
    console.log("ready!");
 
    //belle
      $( ".png-size-belle" ).mouseenter(function() {
        $("#cls-0").css("fill", "#ff3399");
        $("#cls-1").css("fill", "#ff66b3");
        $("#cls-2").css("fill", "#ffb3d9");
        $("#cls-3").css("fill", "#ff3399");
        $("#cls-4").css("fill", "#ff66b3");
        $("#cls-5").css("fill", "#ffb3d9");
        $("#cls-6").css("fill", "#ff3399");
        $("#cls-7").css("fill", "#ff66b3");
        $("#cls-8").css("fill", "#ffb3d9");
        $("#cls-9").css("fill", "#ff3399");
        $("#cls-10").css("fill", "#ff66b3");
        $("#cls-11").css("fill", "#ffb3d9");
        $("#cls-12").css("fill", "#ff3399");
        $("#cls-13").css("fill", "#ff66b3");
        $("#cls-14").css("fill", "#ffb3d9");
        $("#cls-15").css("fill", "#ff3399");
        $("#cls-16").css("fill", "#ff66b3");
        $("#cls-17").css("fill", "#ffb3d9");
        $("#cls-18").css("fill", "#ff3399");
        $("#cls-19").css("fill", "#ff66b3");
        $("#cls-20").css("fill", "#ffb3d9");
        $("#cls-21").css("fill", "#ff3399");
        $("#cls-22").css("fill", "#ff66b3");
        $("#cls-23").css("fill", "#ffb3d9");
        $("#cls-24").css("fill", "#ff3399");
        $("#cls-25").css("fill", "#ff66b3");
        $("#cls-26").css("fill", "#ffb3d9");
        $("#cls-27").css("fill", "#ff3399");
        $("#cls-28").css("fill", "#ff66b3");
        $("#cls-29").css("fill", "#ffb3d9");
        $("#cls-30").css("fill", "#ff3399");
        $("#cls-31").css("fill", "#ff66b3");
        $("#cls-32").css("fill", "#ffb3d9");
        $("#cls-33").css("fill", "#ff3399");
        $("#cls-34").css("fill", "#ff66b3");
        $("#cls-35").css("fill", "#ffb3d9");
      });
      $( ".png-size-belle" ).mouseleave(function() {
        $("#cls-0").css("fill", "#fa5268");
        $("#cls-1").css("fill", "#e71a36");
        $("#cls-2").css("fill", "#f99595");
        $("#cls-3").css("fill", "#ffcccc");
        $("#cls-4").css("fill", "#ffa1be");

        $("#cls-5").css("fill", "#fa5268");
        $("#cls-6").css("fill", "#e71a36");
        $("#cls-7").css("fill", "#f99595");
        $("#cls-8").css("fill", "#ffcccc");
        $("#cls-9").css("fill", "#ffa1be");

        $("#cls-10").css("fill", "#fa5268");
        $("#cls-11").css("fill", "#e71a36");
        $("#cls-12").css("fill", "#f99595");
        $("#cls-13").css("fill", "#ffcccc");
        $("#cls-14").css("fill", "#ffa1be");

        $("#cls-15").css("fill", "#fa5268");
        $("#cls-16").css("fill", "#e71a36");
        $("#cls-17").css("fill", "#f99595");
        $("#cls-18").css("fill", "#ffcccc");
        $("#cls-19").css("fill", "#ffa1be");

        $("#cls-20").css("fill", "#fa5268");
        $("#cls-21").css("fill", "#e71a36");
        $("#cls-22").css("fill", "#f99595");
        $("#cls-23").css("fill", "#ffcccc");
        $("#cls-24").css("fill", "#ffa1be");

        $("#cls-25").css("fill", "#fa5268");
        $("#cls-26").css("fill", "#e71a36");
        $("#cls-27").css("fill", "#f99595");
        $("#cls-28").css("fill", "#ffcccc");
        $("#cls-29").css("fill", "#ffa1be");

        $("#cls-30").css("fill", "#fa5268");
        $("#cls-31").css("fill", "#e71a36");
        $("#cls-32").css("fill", "#f99595");
        $("#cls-33").css("fill", "#ffcccc");
        $("#cls-34").css("fill", "#ffa1be");

        $("#cls-35").css("fill", "#fa5268");
      
      });
     
        //bulle 
        $( ".png-size-bulle" ).mouseenter(function() {
          $("#cls-0").css("fill", "#039cf5");
          $("#cls-1").css("fill", "#95d1f9");
          $("#cls-2").css("fill", "#c1e6ff");
          $("#cls-3").css("fill", "#0c63b4");

          $("#cls-4").css("fill", "#039cf5");
          $("#cls-5").css("fill", "#95d1f9");
          $("#cls-6").css("fill", "#c1e6ff");
          $("#cls-7").css("fill", "#0c63b4");

          $("#cls-8").css("fill", "#039cf5");
          $("#cls-9").css("fill", "#95d1f9");
          $("#cls-10").css("fill", "#c1e6ff");
          $("#cls-11").css("fill", "#0c63b4");

          $("#cls-11").css("fill", "#039cf5");
          $("#cls-12").css("fill", "#95d1f9");
          $("#cls-13").css("fill", "#c1e6ff");
          $("#cls-14").css("fill", "#0c63b4");

          $("#cls-15").css("fill", "#039cf5");
          $("#cls-16").css("fill", "#95d1f9");
          $("#cls-17").css("fill", "#c1e6ff");
          $("#cls-18").css("fill", "#0c63b4");

          $("#cls-19").css("fill", "#039cf5");
          $("#cls-20").css("fill", "#95d1f9");
          $("#cls-21").css("fill", "#c1e6ff");
          $("#cls-22").css("fill", "#0c63b4");

          $("#cls-23").css("fill", "#039cf5");
          $("#cls-24").css("fill", "#95d1f9");
          $("#cls-25").css("fill", "#c1e6ff");
          $("#cls-26").css("fill", "#0c63b4");

          $("#cls-27").css("fill", "#039cf5");
          $("#cls-28").css("fill", "#95d1f9");
          $("#cls-29").css("fill", "#c1e6ff");
          $("#cls-30").css("fill", "#0c63b4");

          $("#cls-31").css("fill", "#039cf5");
          $("#cls-32").css("fill", "#95d1f9");
          $("#cls-33").css("fill", "#c1e6ff");
          $("#cls-34").css("fill", "#0c63b4");

          $("#cls-35").css("fill", "#039cf5");

          });
          $( ".png-size-bulle" ).mouseleave(function() {
            $("#cls-0").css("fill", "#fa5268");
            $("#cls-1").css("fill", "#e71a36");
            $("#cls-2").css("fill", "#f99595");
            $("#cls-3").css("fill", "#ffcccc");
            $("#cls-4").css("fill", "#ffa1be");

            $("#cls-5").css("fill", "#fa5268");
            $("#cls-6").css("fill", "#e71a36");
            $("#cls-7").css("fill", "#f99595");
            $("#cls-8").css("fill", "#ffcccc");
            $("#cls-9").css("fill", "#ffa1be");

            $("#cls-10").css("fill", "#fa5268");
            $("#cls-11").css("fill", "#e71a36");
            $("#cls-12").css("fill", "#f99595");
            $("#cls-13").css("fill", "#ffcccc");
            $("#cls-14").css("fill", "#ffa1be");

            $("#cls-15").css("fill", "#fa5268");
            $("#cls-16").css("fill", "#e71a36");
            $("#cls-17").css("fill", "#f99595");
            $("#cls-18").css("fill", "#ffcccc");
            $("#cls-19").css("fill", "#ffa1be");

            $("#cls-20").css("fill", "#fa5268");
            $("#cls-21").css("fill", "#e71a36");
            $("#cls-22").css("fill", "#f99595");
            $("#cls-23").css("fill", "#ffcccc");
            $("#cls-24").css("fill", "#ffa1be");

            $("#cls-25").css("fill", "#fa5268");
            $("#cls-26").css("fill", "#e71a36");
            $("#cls-27").css("fill", "#f99595");
            $("#cls-28").css("fill", "#ffcccc");
            $("#cls-29").css("fill", "#ffa1be");

            $("#cls-30").css("fill", "#fa5268");
            $("#cls-31").css("fill", "#e71a36");
            $("#cls-32").css("fill", "#f99595");
            $("#cls-33").css("fill", "#ffcccc");
            $("#cls-34").css("fill", "#ffa1be");

            $("#cls-35").css("fill", "#fa5268");
          
            
          });

           //rebelle
        $( ".png-size-rebelle" ).mouseenter(function() {
          $("#cls-0").css("fill", "#00cc00");
          $("#cls-1").css("fill", "#71ff71");
          $("#cls-2").css("fill", "#beffa8");
          $("#cls-3").css("fill", "#00ff40");

          $("#cls-4").css("fill", "#00cc00");
          $("#cls-5").css("fill", "#71ff71");
          $("#cls-6").css("fill", "#beffa8");
          $("#cls-7").css("fill", "#00ff40");

          $("#cls-8").css("fill", "#00cc00");
          $("#cls-9").css("fill", "#71ff71");
          $("#cls-10").css("fill", "#beffa8");
          $("#cls-11").css("fill", "#00ff40");

          $("#cls-12").css("fill", "#00cc00");
          $("#cls-13").css("fill", "#71ff71");
          $("#cls-14").css("fill", "#beffa8");
          $("#cls-15").css("fill", "#00ff40");

          $("#cls-16").css("fill", "#00cc00");
          $("#cls-17").css("fill", "#71ff71");
          $("#cls-18").css("fill", "#beffa8");
          $("#cls-19").css("fill", "#00ff40");

          $("#cls-20").css("fill", "#00cc00");
          $("#cls-21").css("fill", "#71ff71");
          $("#cls-22").css("fill", "#beffa8");
          $("#cls-23").css("fill", "#00ff40");

          $("#cls-24").css("fill", "#00cc00");
          $("#cls-25").css("fill", "#71ff71");
          $("#cls-26").css("fill", "#beffa8");
          $("#cls-27").css("fill", "#00ff40");

          $("#cls-28").css("fill", "#00cc00");
          $("#cls-29").css("fill", "#71ff71");
          $("#cls-30").css("fill", "#beffa8");
          $("#cls-31").css("fill", "#00ff40");

          $("#cls-32").css("fill", "#00cc00");
          $("#cls-33").css("fill", "#71ff71");
          $("#cls-34").css("fill", "#beffa8");
          $("#cls-35").css("fill", "#00ff40");
        });

        $( ".png-size-rebelle" ).mouseleave(function() {
          $("#cls-0").css("fill", "#fa5268");
            $("#cls-1").css("fill", "#e71a36");
            $("#cls-2").css("fill", "#f99595");
            $("#cls-3").css("fill", "#ffcccc");
            $("#cls-4").css("fill", "#ffa1be");

            $("#cls-5").css("fill", "#fa5268");
            $("#cls-6").css("fill", "#e71a36");
            $("#cls-7").css("fill", "#f99595");
            $("#cls-8").css("fill", "#ffcccc");
            $("#cls-9").css("fill", "#ffa1be");

            $("#cls-10").css("fill", "#fa5268");
            $("#cls-11").css("fill", "#e71a36");
            $("#cls-12").css("fill", "#f99595");
            $("#cls-13").css("fill", "#ffcccc");
            $("#cls-14").css("fill", "#ffa1be");

            $("#cls-15").css("fill", "#fa5268");
            $("#cls-16").css("fill", "#e71a36");
            $("#cls-17").css("fill", "#f99595");
            $("#cls-18").css("fill", "#ffcccc");
            $("#cls-19").css("fill", "#ffa1be");

            $("#cls-20").css("fill", "#fa5268");
            $("#cls-21").css("fill", "#e71a36");
            $("#cls-22").css("fill", "#f99595");
            $("#cls-23").css("fill", "#ffcccc");
            $("#cls-24").css("fill", "#ffa1be");

            $("#cls-25").css("fill", "#fa5268");
            $("#cls-26").css("fill", "#e71a36");
            $("#cls-27").css("fill", "#f99595");
            $("#cls-28").css("fill", "#ffcccc");
            $("#cls-29").css("fill", "#ffa1be");

            $("#cls-30").css("fill", "#fa5268");
            $("#cls-31").css("fill", "#e71a36");
            $("#cls-32").css("fill", "#f99595");
            $("#cls-33").css("fill", "#ffcccc");
            $("#cls-34").css("fill", "#ffa1be");

            $("#cls-35").css("fill", "#fa5268");
          
        });
});

// thehearts.outer.addEventListener("click", function () {
//    thehearts.outer.style.visibility="hidden";
// });

// thehearts.outer_1.addEventListener("click", function () {
//      thehearts.outer_1.style.visibility="hidden";

//  });
//  thehearts.outer_2.addEventListener("click", function () {
//     thehearts.outer_2.style.visibility="hidden";

// });
// thehearts.outer_3.addEventListener("click", function () {
//     thehearts.outer_3.style.visibility="hidden";

// });
// thehearts.outer_4.addEventListener("click", function () {
//     thehearts.outer_4.style.visibility="hidden";

// });
// thehearts.outer_5.addEventListener("click", function () {
//     thehearts.outer_5.style.visibility="hidden";

// });
// thehearts.outer_6.addEventListener("click", function () {
//     thehearts.outer_6.style.visibility="hidden";

// });

// thehearts.outer_7.addEventListener("click", function () {
//     thehearts.outer_7.style.visibility="hidden";

// });

// thehearts.outer_8.addEventListener("click", function () {
//     thehearts.outer_8.style.visibility="hidden";

// });
// thehearts.outer_9.addEventListener("click", function () {
//     thehearts.outer_9.style.visibility="hidden";

// });




