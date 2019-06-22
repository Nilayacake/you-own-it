jQuery(document).ready(function($){
    // Toggle nav menu on button click
    var $root = $('html, body'),
        menu_toggle = $('.menu-toggle');

    menu_toggle.on('click', function(){
        var $this = $(this);

        $this.toggleClass('close');
        $('.menu, .menu-nav, .menu-nav-item, .submenu-nav, .submenu-nav-item').toggleClass('show');
    });
});