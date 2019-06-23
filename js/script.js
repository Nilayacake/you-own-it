jQuery(document).ready(function($){
    // Toggle nav menu on button click
    var $root = $('html, body'),
        menu_toggle = $('.menu-toggle');

    menu_toggle.on('click', function(){
        var $this = $(this);

        $this.toggleClass('close');
        $('.menu, .menu-nav, .menu-nav-item, .submenu-nav, .submenu-nav-item').toggleClass('show');
    });

    // Attach a submit handler to the form
    $(".contact-form").submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();

        // Serialize submitting form data and get action
        var $form = $(this),
            url = $form.attr('action');

        // Send data using post
        var posting = $.post(url, $form.seralize());

        // Put results in a div
        posting.done(function(data) {
            var response = $.parseJSON(data),
                target = $('#status-message');

            // Add success/error classes
            if(response.status == 1) {
                target.removeClass('error');
                target.addClass('success');
            } else if (response.status == 0) {
                target.removeClass('success');
                target.addClass('error');
            }

            // Append message
            target.empty().append(response.message).hide().fadeIn(400);
        });
    });
});