function navigateToPage(a,e){var n=$("#onePageNav");$("main");n.addClass("loader"),$.get(a,function(a){$("main").html(a);var e=$("#onePageNavMenuBtn");e.is(":visible")&&($("#onePageNavPagesList").addClass("hidden-xs-down"),e.removeClass("pushed")),n.removeClass("loader")}),"function"==typeof e&&e()}$(function(){var a=window.location.pathname;"/"!=a&&"/index.html"!=a||navigateToPage("/subpages/home.html")}),$("#onePageNavMenuBtn").on("click",function(a){a.preventDefault();var e=$(a.currentTarget),n=$("#onePageNavPagesList");n.is(":visible")?(n.addClass("hidden-xs-down"),e.removeClass("pushed")):(n.removeClass("hidden-xs-down"),e.addClass("pushed"))}),$("#onePageNavPagesList .nav-button a").on("click",function(a){a.preventDefault();var e=$(a.currentTarget),n=e.attr("href");navigateToPage(n)}),$("main").on("click","#displayLoaderBtn",function(a){a.preventDefault();var e=$("#onePageNav");e.addClass("loader")});