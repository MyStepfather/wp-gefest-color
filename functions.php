<?php


add_action('wp_enqueue_scripts', function() {

  wp_enqueue_style('style', get_template_directory_uri() . '/assets/css/style.css');
  wp_enqueue_style('fonts', get_template_directory_uri() . '/assets/fonts/stylesheet.css');
  wp_enqueue_style('favicon', get_template_directory_uri() . '/assets/css/favicon.ico');
  wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');

  wp_enqueue_script('swiper-js1', 'https://unpkg.com/swiper/swiper-bundle.min.js');
  wp_enqueue_script('swiper-js2', get_template_directory_uri() . '/assets/js/index.js');
  wp_enqueue_script('swiper-js3', get_template_directory_uri() . '/assets/js/sliders.js');
  wp_enqueue_script('swiper-js4', get_template_directory_uri() . '/assets/js/modals.js');
  wp_enqueue_script('swiper-js5', get_template_directory_uri() . '/assets/js/particles.js');
  wp_enqueue_script('swiper-js6', get_template_directory_uri() . '/assets/js/app.js');

});


add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');


// Удаление подсказок при входе в админ панель

function no_hints(){
  return 'Что-то пошло не так!';
  }
  add_filter( 'login_errors', 'no_hints' );


  
//удаление версии WordPress в верстке 
function remove_wpversion() {
  return '';
}
add_filter('the_generator', 'remove_wpversion');

add_filter('style_loader_src', 'wp_version_js_css', 9999);
add_filter('script_loader_src', 'wp_version_js_css', 9999);
function wp_version_js_css($src) {
    if (strpos($src, 'ver=' . get_bloginfo('version')))
        $src = remove_query_arg('ver', $src);
    return $src;
}


?>