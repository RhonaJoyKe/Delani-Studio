jQuery(document).ready(function() {
  $('.desimg').click(function() {
   
    $("#destxt").show();
    $(".desimg").hide();
    $("#destxt").slideDown();
    
  });
  $('#destxt').click(function() {
   
    $( ".desimg").show();
    $("#destxt").slideUp();
    
  });
});




//     jQuery("#button").click(function() {
//         var username = $('text').val;
//         var email = $('email').val;
//         var message = $('text').val;
    
//         if (username.checked) { 
//             console.log("Name is filled");
//         }else {
//             alert("Please enter your name");
//           }
//            if (email.checked) {
//               console.log("Email is filled");}
//               else {
//                 alert("Please enter your DOB");
//               }
//               if (message) {
//                 console.log("message is selected");
        
//             } else {
//                  alert("Please select your gender");
        
//               }
            
//             })
        
// });

        
      