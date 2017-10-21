/**
 * Created by Zsing on 2017/9/25.
 */
$(function () {
    var index = 0;
    var timer = null;
    showAndHideOtherEle(index);
    $(window).mousewheel(function (event) {
        clearTimeout(timer);

        timer = setTimeout(function () {
            var del = event.deltaY > 0 ? 1 : -1;
            index = index - del;
            //console.log(index);

            if (index > $('.gps li').length - 1) {
                index = $('.gps li').length - 1;
            } else if (index < 0) {
                index = 0;
            }

            $('.gps li').eq(index).addClass('current').siblings('li').removeClass('current');
            $('section').eq(index).show().siblings('section').hide();

            showAndHideOtherEle(index);

            setTimeout(function () {
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            }, 50)

        }, 500)
    });

    $('.gps li').on('click', function () {
        index = $(this).index();
        $(this).addClass('current').siblings('li').removeClass('current');
        $('section').eq(index).show().siblings('section').hide();
        showAndHideOtherEle(index);

        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },50);
    });

    function showAndHideOtherEle(index) {
        if (index == 0) {
            $('.header-left').hide();
            $('.scroll').show();
        } else {
            $('.header-left').show();
            $('.scroll').hide();
        }
    }
})