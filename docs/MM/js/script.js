
$(document).ready(function(){
   
    $("#site").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            alert('optionval[0].val')
            if(optionValue){
                $(".section").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".section").hide();
            }
        });
        
}).change();


$('.packages').hide();
    $('#estimate-btn').click(function() {
      $('.packages').show('1000');
    });

$('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".section").not(targetBox).hide();
        $(targetBox).show();
    });
// Add minus icon for collapse element which is open by default
$(".collapse.show").each(function(){
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
});

// Toggle plus minus icon on show hide of collapse element
$(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
});

$('.nav-pills a ').hover(function() {
    $(this).tab('show');
    not.$(this).tab(hide);
});


});