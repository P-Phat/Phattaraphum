$(document).ready(function(){
  
    $('.js--section-feature').waypoint(function(direction){
        if(direction =='down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
        
    });
/*    
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
    
/*
    $('h1').click(function(){
        
        $(this).css('background-color','#ff0000');
        
        
    });
*/    
         
} );