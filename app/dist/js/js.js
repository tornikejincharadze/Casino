$('.lang-bar button').click(function(){
    $(this).toggleClass('active');
    $(this).siblings().toggleClass('active');
});

$('.sections_header_li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.sub_menu_li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

$('.edit_button').click(function(){
    $(this).siblings('.edit_form').addClass('active');
    $(this).addClass('hidden');
    $(this).parent().siblings('.contact_details_value').addClass('hidden');
    $(this).siblings('.edit_form').find('input').focus();

});

$('.edit_cancel').click(function(){
    $(this).parent().siblings('.edit_button').removeClass('hidden');
    $(this).parent().removeClass('active');
    $(this).parent().parent().siblings('.contact_details_value').removeClass('hidden');
    $(this).siblings('input').val('');
});

$('.edit_confirm').click(function(){
    var inputVal = $(this).siblings('input').val();
    $(this).parent().parent().siblings('.contact_details_value').text(inputVal);
    $(this).parent().siblings('.edit_button').removeClass('hidden');
    $(this).parent().removeClass('active');
    $(this).parent().parent().siblings('.contact_details_value').removeClass('hidden');
});