$( document ).ready(function() {
	  $(function(){
      $('.dropdown-1').hide();
      $('#menu').hover(function(){
            $('.dropdown-1').slideDown('medium');
      }, function(){
            $('.dropdown-1').slideUp('medium');
      });
    })

    
});
