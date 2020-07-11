$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            /*据顶距离多长出现*/
            $("#top").fadeIn(1500);
        } else {
            $("#top").fadeOut(1500);
        }
    });
    // 当点击跳转链接后，回到页面顶部位置
    $("#top").click(function() {
        $("body,html").animate({
                scrollTop: 0
            },
            1000
        ); /*置顶的距离以及完成动画的时间*/
        // return false; /*可有可无*/
    });
});

function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}