/*$(document).ready(function(){
	
	
	window.onscroll = function(e) {
        //var a = $('#navbar').position();
		var cur_pos = $(window).scrollTop();
		if(cur_pos>180)
		{
			$('#header').addClass('navbar-fixed-top');
		}
		else
		{
			$('#header').removeClass('navbar-fixed-top');
		}
    }
	
	
	
});*/
$(document).ready(function() {
	elementMove();
		
	/*$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});*/
});

var top_position = 350;
var first = 0;

var elementMove=function () {
	/*if(document.getElementById('#allBTN')) */{
		// 取得其 top 值
		var $allBTN = $('#header'),
			_top = $allBTN.offset().top ;

		// 當網頁捲軸捲動時
		var $win = $(window).scroll(function () {
			// 如果現在的 scrollTop 大於原本的 top 時
			if ($win.scrollTop() >= _top) {
				// 如果座標系統不是 fixed 的話
				if ($allBTN.css('position') != 'fixed') {
					// 設定座標系統為 fixed
					$allBTN.css({
						position: 'fixed',
						top: 0
					});
					//scroll down, add css
					
				}
				
				
			} else {
				// 還原座標系統為 absolute
				$allBTN.css({
					position: 'absolute',
					top: top_position
				});
				
				
			}

			if($win.scrollTop()>=top_position)
			{
				$allBTN.removeClass('scrollup_css');
				$allBTN.addClass('scrolldown_css');
			}	
			else if($win.scrollTop()==0)
			{
				$allBTN.removeClass('scrolldown_css');
				$allBTN.addClass('scrollup_css');
			}

				
				
		});
	}
}

function go_agenda(){
	
	var parent = $('#left_parent');
	$('.left_ele').remove();
	var newele = '<iframe class="left_ele" style="margin-left:5%;"width="1000px" height="1000px" src="agenda.JPG" frameborder="0"  allow="encrypted-media" allowfullscreen></iframe>';
	parent.append(newele);
	
}

function go_home(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = '<iframe class="left_ele" width="750px" height="450px" src="intro_video.mp4" frameborder="0"  allow="encrypted-media" allowfullscreen></iframe>';
	var newele2 = `
		<div class="news left_ele">
			<span class="news_title">News & Events</span>
			<div class="news_info">
				<p>[2018/01/04] Test news</p>
			</div>
			<div class="news_info">
				<p>[2018/01/04] Test news2</p>
			</div>
			<div class="news_info">
				<p>[2018/01/04] Test news3</p>
			</div>
			<div class="news_info">
				<p>[2018/01/04] Test news4</p>
			</div>
		</div>`;
	parent.append(newele);
	parent2.append(newele2);
}

