// header menu links highlight
if ($('[data-js-menu-highlight="about"]').length !== 0) {
    $('header a.about').addClass('active');
} else if ($('[data-js-menu-highlight="team"]').length !== 0) {
    $('header a.team').addClass('active');
} else if ($('[data-js-menu-highlight="news"]').length !== 0) {
    $('header a.news').addClass('active');
} else if ($('[data-js-menu-highlight="blog"]').length !== 0) {
    $('header a.blog').addClass('active');
} else if ($('[data-js-menu-highlight="contact"]').length !== 0) {
    $('header a.contact').addClass('active');
}
