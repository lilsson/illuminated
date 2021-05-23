// burger-icon

$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
    $("#socicon").toggleClass("open-socicon");
  })


$(function(){
    $('.multiple-items').slick({
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 1,
     arrows: true,
     dots:true,
     
     responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });