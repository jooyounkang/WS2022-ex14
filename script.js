
$(document).ready(function(){
  
  

    $("#container1").hover(function(){
        $("#container1").html("<p>Yay!</p>");
    }, function(){
        $("#container1").html("hover over")
    })




    $("#item1").click(function(){
           $("#item1").html("💫💫💫💫💫💫")
           $("#item1").animate({height: "0"});
    })

    $("#item2").click(function(){
       $("#item3").animate(
            {deg: 180},
            {duration: 1200,
            step: function(now){
                $(this).css({transform: 'rotate(' + now + 'deg)'})
            }}
        )
    })

    $("#item4").click(function(){
        $("#item4").slideUp();
    })

    $("#item5").click(function(){
        $("#item4").html("<p>surprise!</p>");
        $("#item4").fadeIn();
    })

    $("#item6").click(function(){
        $(".grid2").hide();
    })

    $("#container2").draggable({
        stop: function(){
            $(this).animate({top:0, left:0}, 1000, 'easeOutElastic');
        }
    })


    $("#item7").click(function(){
          scrollTo(0,7000)
    })   

    $("#item8").click(function(){
        scrollTo(0,0)
    }) 


    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })

    //   $( ".menu3" ).children().draggable();



});