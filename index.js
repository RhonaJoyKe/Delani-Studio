jQuery(document).ready(function() {
    jQuery("button#button").click(function() {
        var userName=$('text').val;
        var usermail=$('email').val;
        var usermsg=$('texta').val;
        if (userName){
            console.log("Name is filled");
            if(usermail){
                console.log("email is filled");
            
            if(usermsg){
                console.log("message is filled")

            }else{
                alert("Please Write a message")
            }
           }else{
            alert("Please Write a message");
           }
           else{
            alert("Please Write a message");
           }
        }
    })
    function processin
});