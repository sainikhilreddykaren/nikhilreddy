$(document).ready(function(){

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");
        }
    });



    //slide up script

  $('.scroll-up').click(function(){
      $('html').animate({scrollTop:0})
  });





    //toogle menu bar

    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        
    });



    //typing aniumation script

    var typing=new Typed(".typing",{
        strings:["Web Designer ...!","Software Developer...!","UI Designer","Freelancer"],
        typeSpeed:80,
        backSpeed:50,
        loop:true
    });

    var typing=new Typed(".typing-2",{
        strings:["Web Designer","Developer","UI Designer","Freelancer"],
        typeSpeed:80,
        backSpeed:50,
        loop:true
    });


    // carousel styling script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
  });