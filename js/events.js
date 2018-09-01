//define functions here
function getIt() {
  
  $('p').on('click', function() {
    
    alert('Hey!');
    
  });
}

function frameIt() {
  
  $('img').on('load', function() {
    
    $('img').addClass('tasty');
    
  });
}

function pressIt() {
  
  $('input').on('keydown', function(e) {
    
    if (e.key === "g") {
      
      alert('You have pressed G!');
      
    }else {
      
    }
    
  });
  
}

$(document).ready(function(){

// call functions here

});
