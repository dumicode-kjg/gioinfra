$(function(){


	//GNB PC
	$('#gnb > li a').on('mouseenter focus',function(){
		$('#gnb > li').not($(this).parents('#gnb > li')).removeClass('active');
		$(this).parents('#gnb > li').addClass('active');
		$('#gnb').addClass('open');
	});
	$('#gnb > li').on('mouseleave',function(){
		$(this).removeClass('active');
	});
	$('.logo a, .search_field input').on('focus',function(){
		$('#gnb > li').removeClass('active');
		$('#gnb').removeClass('open');
	});

	$('.head_con').on('mouseleave',function(){
		$('#gnb').removeClass('open');
	});

	//GNB 모바일
	$('.m_gnb > li > a').each(function(){
		if($(this).next('.depth_box').find('li').length > 0)
		{
			$(this).addClass('in_ul');
		}
	});

	$('.m_gnb > li > a').on('click', function(){
		$('.m_gnb > li > a').not(this).removeClass('active');
		$(this).toggleClass('active');

		$('.m_gnb > li > .depth_box').not($(this).next('.depth_box')).slideUp(250);
		$(this).next('.depth_box').stop(true,false).slideToggle(250);
	});

});

//모바일 전체메뉴
function toggleAllMenu(){
	$('body').toggleClass('openAllMenu');
}

//모바일 검색
function toggleSearch(){
	$('body').toggleClass('openSearch');
}



//popup
// 접근성 관련 포커스 강제 이동
function accessibilityFocus() {
	$(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){
		var next = $(e.target).attr('data-focus-next'),
		prev = $(e.target).attr('data-focus-prev'),
		target = next || prev || false;

		if(!target || e.keyCode != 9) { return; }

		if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) {
			setTimeout(function(){
				$('[data-focus="' + target + '"]').focus();
			}, 1); 
		}
	}); 
}

function tooltip() {
	var openBtn = '[data-tooltip]',
	closeBtn = '.tooltip-close';
	
	function getTarget(t) {
		return $(t).attr('data-tooltip');
	}
	
	function open(t) {
		var showTarget = $('[data-tooltip-con="' + t + '"]');
		showTarget.show().focus();
		showTarget.find('.tooltip-close').data('activeTarget', t);
	}
	
	function close(t) {
		var activeTarget = $('[data-tooltip-con="' + t + '"]');
		activeTarget.hide();
		$('[data-tooltip="' + t + '"]').focus();
	}

	$(document) .on('click', openBtn, function(e){
		e.preventDefault();
		open($(this).attr('data-tooltip'));
	}) .on('click', closeBtn, function(e) {
		e.preventDefault();
		close($(this).data('activeTarget'));
	})
}

$(document).ready(function(){
	tooltip();
	accessibilityFocus();
});