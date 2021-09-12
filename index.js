jQuery(document).ready(function() {
  $('.desimg').click(function() {
     $("#destxt").toggle();
    // $("#destxt").show();
     $(".desimg").hide();
    $("#destxt").slideDown();
    
  });
  $('#destxt').click(function() {
    $(".desimg").toggle();
    $( ".desimg").show();
    $("#destxt").slideUp();
    
  });

  $('.devimg').click(function() {
   
    $("#devtxt").show();
    $(".devimg").hide();
    $("#devtxt").slideDown();
    
  });
  $('#devtxt').click(function() {
   
    $( ".devimg").show();
    $("#devtxt").slideUp();
    
  });

  $('.servsimg').click(function() {
   
    $("#servstxt").show();
    $(".servsimg").hide();
    $("#servstxt").slideDown();
    
  });
  $('#servstxt').click(function() {
   
    $( ".servsimg").show();
    $("#servstxt").slideUp();
    
  });
  $('#img1').hover(function(){
  $(".bg1").show();
   
  });
  $('#img1').mouseout(function(){
    $(".bg1").hide();
     
    });
  $('#img2').hover(function(){
    $(".bg2").show();
       
    });
  $('#img2').mouseout(function(){
    $(".bg2").hide();
         
  });
  $('#img3').hover(function(){
    $(".bg3").show();
           
  });
  $('#img3').mouseout(function(){
    $(".bg3").hide();
             
  });
  $('#img4').hover(function(){
  $(".bg4").show();
  });
  $('#img4').mouseout(function(){
    $(".bg4").hide();
  });
  $('#img5').hover(function(){
    $(".bg5").show();
  });
  $('#img5').mouseout(function(){
    $(".bg5").hide();
  });
  $('#img6').hover(function(){
    $(".bg6").show();
 });
  $('#img6').mouseout(function(){
   $(".bg6").hide();
  });
  $('#img7').hover(function(){
    $(".bg7").show();
  });
  $('#img7').mouseout(function(){
    $(".bg7").hide();
  });
  $('#img8').hover(function(){
    $(".bg8").show();
  });
  $('#img8').mouseout(function(){
   $(".bg8").hide();
  });

  document.getElementById("submit").addEventListener(("click"), function () {
  let userName =document.getElementById("name").value
    let email=document.getElementById("email").value
    let  message=document.getElementById("texta").value
    const em= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(userName===null||userName===""){
    alert("Please Write your Name")
    }
    else if(email===""|email===null){
      alert("Please write your email")
   }
    else if (message===""||message===null){
    alert("Please write your message")
    }
    else if(email.match(em) && email!="" && message !="" && userName !=""){
      alert(`${userName} we have received your message. Thank you for reaching out to us.`)
  
    }
  })
});

      






