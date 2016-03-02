$(document).ready(function(){
    var $form = $('form');
    var $form_submit = $('.form_submit');
    $form.submit(function(){
        $.post($(this).attr('action'), $(this).serialize(), function(response){},'json'); 
        //above statement will make a post request to server with all the form data serialized into a string.
        $form.remove();
        $form_submit.html("Your form has been submitted. We will contact you soon.");
        return false;
    });
});