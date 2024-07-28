$(function(){
	//sub_headbar
	$('.sub_depth_box > a').on('click',function(){
		$('.sub_depth_box > a').not(this).removeClass('active');
		$(this).toggleClass('active');
		return false;
	});
	$('.sub_depth_box').on('click',function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$('.sub_depth_box > a').removeClass('active');
	});

	//서브탭(모바일)
	$('.sub_tabbox a').on('click',function(){
		if($(this).parent('li').hasClass('active'))
		{
			$('.sub_tabbox ul').not($(this).parents('ul')).removeClass('open');
			$(this).parents('ul').toggleClass('open');
			return false;
		}
	});
	//서브탭
	$('.js_tab .sub_tabbox a').on('click',function(){

		if(!$(this).parent('li').hasClass('active'))
		{
			$(this).parents('ul').removeClass('open');
		}

		$(this).parents('.sub_tabbox').find('a').removeAttr('title');
		$(this).attr('title','현재 활성화');
		$(this).parents('.sub_tabbox').find('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).parents('.js_tab').find('.js_tabcont').removeClass('active');
		$('.js_tabcont').eq($('.js_tab a').index(this)).addClass('active');

		return false;
	});
	$(document).click(function(){
		$('.sub_tabbox ul').removeClass('open');
	});

	//서브탭인탭
	$('.js_tab_in_tab .sub_in_tabbox a').on('click',function(){
		$(this).parents('.sub_in_tabbox').find('a').removeAttr('title');
		$(this).attr('title','현재 활성화');
		$(this).parents('.sub_in_tabbox').find('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).parents('.js_tab_in_tab').find('.js_tab_in_tabcont').removeClass('active');
		$('.js_tab_in_tabcont').eq($('.js_tab_in_tab a').index(this)).addClass('active');
		return false;
	});

	//모바일버전 table, grid 스크롤
	$(".mobile_scroll").on("scroll",function(){
		$(this).find(".txt_ex_scroll").remove();
	});
	$(".mobile_scroll .txt_ex_scroll").on("click",function(){
		$(this).remove();
	});

});

//서브 공유하기 열기/닫기
function shareToggle() {
	$('#shareBox').toggle(0);
}