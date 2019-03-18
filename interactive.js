$(document).ready(function(){

$("div.dot").click(function(){
   	$(this).siblings().css('background-color','white').css('border','5px solid #DCDCDC');
   	$(this).css('background-color','#FF6347').css('border','2px solid #DCDCDC');
    $("div.content").hide();
    $("div."+$(this).attr("id")).show().removeClass('hide');
    
});
});
 
$(document).ready(function(){
// Get the modal
$('#myImg').each(function (index) {
    if ($(this).attr('onclick') != null) {                    
        if ($(this).attr('onclick').indexOf("runThis()") == -1) {                        
            $(this).click(function () {
                $(this).attr('onclick');
                var src = $(this).attr("src");
                ShowLargeImage(src);
            });
        }
    }
    else {                    
        $(this).click(function () {                        
            var src = $(this).attr("src");
            ShowLargeImage(src);
        });
    }
});

$('body').on('click', '.modal-overlay', function () {
    $('.modal-overlay, .modal-img').remove();
});

function ShowLargeImage(imagePath) {
    $('body').append('<div class="modal-overlay"></div><div class="modal-img"><img src="' + imagePath.replace("small","large") + '" /></div>');
}

});




