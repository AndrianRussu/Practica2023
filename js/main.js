(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.page-header').css("margin-top", "0");
        }
    });


    
    
})(jQuery);
function mOver(obj) {
    obj.setAttribute("class","price-item featured-item");
   
  }
 


function mOut(obj) {
    
    obj.setAttribute("class","price-item");
}


const contact=document.getElementById('trimit')

contact.addEventListener('click',()=>{
    alert("Cererea a fost trimisa, in scurt timp veti primi un raspuns")
})


