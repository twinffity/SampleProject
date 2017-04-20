/// <reference path="@types/jquery" />

$(function(){
    var pathName = window.location.pathname;
    if (pathName == "/" || pathName == "/index.html"){
        navigateToPage("/subpages/home.html");
    }
});

$('#onePageNavMenuBtn').on('click', function(e){
    e.preventDefault();
    var $menuButton = $(e.currentTarget);
    var $pagesList = $('#onePageNavPagesList');
    if ($pagesList.is(':visible')){
        $pagesList.addClass('hidden-xs-down');
        $menuButton.removeClass('pushed');
    } else{
        $pagesList.removeClass('hidden-xs-down');
        $menuButton.addClass('pushed');
    }
});

$('#onePageNavPagesList .nav-button a').on('click', function(e){
    e.preventDefault();
    var $cb = $(e.currentTarget);
    var pLocation = $cb.attr('href');
    navigateToPage(pLocation);
});

function navigateToPage(pageUrl, onFinish){
    
    var $nav = $('#onePageNav');
    var $mainPane = $('main');
    
    $nav.addClass('loader');

    $.get(pageUrl, function(data){
        $('main').html(data);
        
        var $menuButton = $('#onePageNavMenuBtn');
        if ($menuButton.is(':visible')){
            $('#onePageNavPagesList').addClass('hidden-xs-down');
            $menuButton.removeClass('pushed');
        }
        $nav.removeClass('loader');
    });

    if (typeof onFinish === "function"){
        onFinish();
    }
}

$('main').on('click', '#displayLoaderBtn', function(e){
    e.preventDefault();
    var $nav = $('#onePageNav');
    $nav.addClass('loader');
});