jQuery(document).ready(function() {
    jQuery("#button").click(function() {
        var userName=$('text').val;
        var usermail=$('email').val;
        var usermsg=$('texta').val;
        if (userName.checked){
            console.log("Name is filled");
            if(usermail.checked){
                console.log("email is filled");
            
               if(usermsg.checked){
                console.log("message is filled")
              //processin();
               }
                  else{ 
                alert("Please Write a message")
            }
            }
            else{
            alert("Please Write a message");
           }
            
            }
        else{
            alert("Please Write a message");
           }
        }
    
    
    )
    // function processin(){
    //     $("form").each(function(){
    //         $(this).find(':input');
    //     });
    // }
});