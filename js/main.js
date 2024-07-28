$(function(){

	//main notice tab
	var $tabtit = $(".main_notice_tab h2 a");
	var $tabmore = $(".main_notice_tab > li .btn_more");
	$tabtit.on("click focus", function(e){
		e.preventDefault();
		$(this).parents(".main_notice_tab").find("li").removeClass("active");
		$(this).parents("li").addClass("active");
	});
	$tabmore.on("focus", function(e){
		e.preventDefault();
		$(this).parents(".main_notice_tab").find("li").removeClass("active");
		$(this).parents("li").addClass("active");
	});


	//visual
  var maVisual = new Swiper('.ma_visual .swiper-container', {
    effect: 'fade',
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: '.ma_visual .swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return '<span class="current">0' + current + '</span>' + '<span class="slash">/</span>' + '<span class="total">0' + total + '</span>';
      }
    },
    navigation: {
      nextEl: '.ma_visual .swiper-button-next',
      prevEl: '.ma_visual .swiper-button-prev',
    },
    on: {
      init: function (swiper) {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");

        //자동play 켜고닫기
        $('.ma_visual .swiper_ctrl .btn_stop_play').click(function () {
          if ($(this).hasClass('stop')) {
            maVisual.autoplay.start();
          }
          else {
            maVisual.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");
      },
      autoplayStart: function () {
        $('.ma_visual .swiper_ctrl .btn_stop_play').removeClass('stop');
      },
      autoplayStop: function () {
        $('.ma_visual .swiper_ctrl .btn_stop_play').addClass('stop');
      }
    },
  });


	//알림판
	var noticeBannerSwiper = new Swiper('.ma_notice_banner .swiper-container',{
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.ma_notice_banner .swiper-button-next',
			prevEl: '.ma_notice_banner .swiper-button-prev',
		},
		pagination: {
			el: '.ma_notice_banner .swiper-pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return '<span class="current">' + current + '</span><span class="line">/</span><span class="total">' + total + '</span>';
			}
		},
		on: {
			init: function(swiper){
				$(".ma_notice_banner .swiper-slide").attr("aria-hidden",true);
				$(".ma_notice_banner .swiper-slide-active").removeAttr("aria-hidden");
				$(".ma_notice_banner .swiper-slide a, .ma_notice_banner .swiper-slide .btn").attr("tabindex","-1");
				$(".ma_notice_banner .swiper-slide-active a, .ma_notice_banner .swiper-slide-active .btn").attr("tabindex","0");

				//자동play 켜고닫기
				$('.ma_notice_banner .swiper_ctrl .btn_stop_play').click(function(){
					if($(this).hasClass('stop'))
					{
						noticeBannerSwiper.autoplay.start();
					}
					else
					{
						noticeBannerSwiper.autoplay.stop();
					}
				});
			},
			slideChangeTransitionStart: function(){
				$(".ma_notice_banner .swiper-slide").attr("aria-hidden",true);
				$(".ma_notice_banner .swiper-slide-active").removeAttr("aria-hidden");
				$(".ma_notice_banner .swiper-slide a, .ma_notice_banner .swiper-slide .btn").attr("tabindex","-1");
				$(".ma_notice_banner .swiper-slide-active a, .ma_notice_banner .swiper-slide-active .btn").attr("tabindex","0");
			},
			autoplayStart:function(){
				$('.ma_notice_banner .swiper_ctrl .btn_stop_play').removeClass('stop');
			},
			autoplayStop:function(){
				$('.ma_notice_banner .swiper_ctrl .btn_stop_play').addClass('stop');
			}
		},
	});

	//알림판
	var photoGallerySwiper = new Swiper('.photo_gallery .swiper-container',{
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.photo_gallery .swiper-button-next',
			prevEl: '.photo_gallery .swiper-button-prev',
		},
		on: {
			init: function(swiper){
				$(".photo_gallery .swiper-slide").attr("aria-hidden",true);
				$(".photo_gallery .swiper-slide-active").removeAttr("aria-hidden");
				$(".photo_gallery .swiper-slide a, .photo_gallery .swiper-slide .btn").attr("tabindex","-1");
				$(".photo_gallery .swiper-slide-active a, .photo_gallery .swiper-slide-active .btn").attr("tabindex","0");

				//자동play 켜고닫기
				$('.photo_gallery .swiper_ctrl .btn_stop_play').click(function(){
					if($(this).hasClass('stop'))
					{
						photoGallerySwiper.autoplay.start();
					}
					else
					{
						photoGallerySwiper.autoplay.stop();
					}
				});
			},
			slideChangeTransitionStart: function(){
				$(".photo_gallery .swiper-slide").attr("aria-hidden",true);
				$(".photo_gallery .swiper-slide-active").removeAttr("aria-hidden");
				$(".photo_gallery .swiper-slide a, .photo_gallery .swiper-slide .btn").attr("tabindex","-1");
				$(".photo_gallery .swiper-slide-active a, .photo_gallery .swiper-slide-active .btn").attr("tabindex","0");
			},
			autoplayStart:function(){
				$('.photo_gallery .swiper_ctrl .btn_stop_play').removeClass('stop');
			},
			autoplayStop:function(){
				$('.photo_gallery .swiper_ctrl .btn_stop_play').addClass('stop');
			}
		},
	});
	















	//푸터 배너
	//foot banners
	var footBnSwiper = new Swiper('.foot_banners .swiper-container',{
		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		slidesPerView: 5,
		navigation: {
			nextEl: '.foot_banners .swiper-button-next',
			prevEl: '.foot_banners .swiper-button-prev',
		},
		on: {
			init: function(swiper){
				//자동play 켜고닫기
				$('.foot_banners .swiper-ctrl .btn_stop_play').click(function(){
					if($(this).hasClass('stop'))
					{
						footBnSwiper.autoplay.start();
					}
					else
					{
						footBnSwiper.autoplay.stop();
					}
				});
			},
			autoplayStart:function(){
				$('.foot_banners .swiper-ctrl .btn_stop_play').removeClass('stop');
			},
			autoplayStop:function(){
				$('.foot_banners .swiper-ctrl .btn_stop_play').addClass('stop');
			}
		},
		breakpoints: {
			1023: {
				slidesPerView: 'auto',
			},
			767: {
				slidesPerView: 'auto',
			},
        },
	});
	$(".foot_banners .swiper-slide a").each(function(index){
		$(this).on("focus", function(e){
			e.preventDefault();
			footBnSwiper.slideTo(index);
		});
	});

});