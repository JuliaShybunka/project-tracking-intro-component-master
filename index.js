$(document).ready(function() {


    let window_size = window.matchMedia('(max-width: 768px)');

    if (window.matchMedia('(max-width: 1250px)').matches) {
        $('.header-bg').insertBefore('.content');
    }
});