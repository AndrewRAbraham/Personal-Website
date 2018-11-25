$(document).ready(function(){

$('#topForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2122308/q26r5u/',
        type:'post',
        data:$('#topForm').serialize(),
        success:function(){

        }
    });
});
$("#topForm").submit(function(){
      $("#topForm").html("</p> Awesome! We will get back to you soon!</p>");
      $(this).addClass("text-center");
});
});
});
