$(document).ready(function(){


 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
 
    $('.layer1').delay(500).fadeToggle(2000).delay(1000).fadeToggle(2000);
    $('.layer2').delay(1000).fadeToggle(2000).delay(1500).fadeToggle(2000);
    $('.layer3').delay(1500).fadeToggle(2000).delay(2000).fadeToggle(2000);
    $('.layer4').delay(2000).fadeToggle(2000).delay(2500).fadeToggle(2000);
    $('.layer5').delay(2500).fadeToggle(2000).delay(3000).fadeToggle(2000);
    $('.layer6').delay(3000).fadeToggle(2000).delay(3500).fadeToggle(2000);
    $('.layer7').delay(3500).fadeToggle(2000).delay(4000).fadeToggle(2000);

 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
  
    $('.top-buttons1').hide();
    $('.top-buttons2').hide();
    $('.top-buttons3').hide();
    $('.top-buttons4').hide();
    $('.top-buttons5').hide();
    $('.top-buttons6').hide();
    $('.top-buttons7').hide();

    $('#top-menu-area').hide();
    $('.software-panel').hide();

    $('.software-button').click(function(){
        $('.software-panel').slideToggle(1200);
        $('table').Toggle(500);
    });  

    $('#toggle-button').click(function() {
        $('.super-top-table').fadeToggle(2000);
    })


 //  _____     _____     _____     _____     _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
  

    $('.large-red-toggle').click(function(){
        
        //  --------- set 1 -------- 
        
        // Toggle all the bottom chunk buttons

        $('#nav11').fadeToggle(3000);
        $('#nav22').fadeToggle(3000);
        $('#nav33').fadeToggle(3000);
        $('#nav44').fadeToggle(3000);
        $('#nav55').fadeToggle(3000);
        $('#nav66').fadeToggle(3000);
        $('#nav77').fadeToggle(3000);

        //  --------- set 2 -------- 

        // Toggle all the larger mid buttons

        $('#nav1').fadeToggle(3000);
        $('#nav2').fadeToggle(3000);
        $('#nav3').fadeToggle(3000);
        $('#nav4').fadeToggle(3000);
        $('#nav5').fadeToggle(3000);
        $('#nav6').fadeToggle(3000);
        $('#nav7').fadeToggle(3000);


        //  --------- set 3 -------- 

        // Toggle all other general filtering other buttons

        $('.torah-listing').fadeToggle(3000);
        $('.masechta-listing').fadeToggle(3000);
        $('.page-listing').fadeToggle(3000);
        $('.software-button').hide(3000);
        $('.controls').fadeToggle(3000);
        $('.cutout-counter').fadeToggle(3000);

    });  


 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
  

    $('#nav1').click(function(){
        $('.top-buttons1').slideToggle(1200);
    });     

    $('#nav2').click(function(){
        $('.top-buttons2').slideToggle(1200);
    });         

    $('#nav3').click(function(){
        $('.top-buttons3').slideToggle(1200);
    });     
    
    $('#nav4').click(function(){
        $('.top-buttons4').slideToggle(1200);
    });         

    $('#nav5').click(function(){
        $('.top-buttons5').slideToggle(1200);
    });     
    
    $('#nav6').click(function(){
        $('.top-buttons6').slideToggle(1200);
    });         

    $('#nav7').click(function(){
        $('.top-buttons7').slideToggle(1200);
    });     

    $('#nav-x').click(function(){
        $('.top-buttons7').hide(1200);
    });
 
 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
  

    $('#nav11').click(function(){
        $('.col1').toggle(1200);
    });        

    $('#nav22').click(function(){
        $('.col2').toggle(1200);
    });      

    $('#nav33').click(function(){
        $('.col3').toggle(1200);
    }); 
    
    $('#nav44').click(function(){
        $('.col4').toggle(1200);
    }); 

    $('#nav55').click(function(){
        $('.col5').toggle(1200);
    }); 

    $('#nav66').click(function(){
        $('.col6').toggle(1200);
    }); 

    $('#nav77').click(function(){
        $('.col7').toggle(600);
    }); 

 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  

    $('#nav2').click(function() {
        $('#top-menu-area').toggle(1200);
    });

 //  _____     _____     _____     _____     _____     _____     _____     _____     _____   
 // |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|   |_____|  
  
  
 });