//waits until page is loaded first
$(document).ready(function(){

$('.stream-nav').on('click',function(){
      var elementId = $(this).attr('id');
      //gets the class name of the nav item we click on that has an id. eg id="stream1".
      var cardClass = $(".card").attr('class').split(' ')[0];
      //goes through all the html elements looking for .card classes.
      //where it finds eg class="card stream1", split separates the classes into and stream1.
      
      
      if ($('.' + elementId).css('background-color') == 'transparent'){
          $('.' + elementId).css('background-color','#EB5255' );
          // 
          
      } else {
           $('.' + cardClass).css('background-color', 'transparent');
           $('.' + elementId).css('background-color', '#EB5255');
      }
    });
    
    $('p').click(function(){
       $(this).children('a').addClass('link');
    });
    
     $(img).click(function(){
        $(this).next().children('p').slideDown('slow').removeClass('hideParagraph');
    });
    
    
    
    
});