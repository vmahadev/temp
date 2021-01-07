
$(document).ready(function(){
   
    $("#site").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".section").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".section").hide();
            }
        });
}).change();
});
$(document).ready(function(){
    $('#show').click(function() {
      $('.menu').toggle("slide");
    });
});
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".section").not(targetBox).hide();
        $(targetBox).show();
    });
});