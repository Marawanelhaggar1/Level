$( function() {
    $( "#inputCheckin" ).datepicker();
    $( "#inputCheckout" ).datepicker();

    $('.level-slider').slick({
        dots:true,
        arrows:false,
        slidesToShow:2,
        slidesToScroll:1
        });

        function videotoggle(){
            video=$(".level-video").get(0);
            if(video.paused){
                video.play()
                $(".video-control-play").hide();
                $(".video-control-pause").show();
            }else if(video.play){
                video.pause()
                $(".video-control-play").show();
                $(".video-control-pause").hide();
            }
///
        }
        $('.video-control-play').click(function () {
            videotoggle();
        });

        $('.video-control-pause').click(function () {
            videotoggle();
        })

} );