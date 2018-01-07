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
/*About the symposium*/
function go_ats(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		About the Symposium
	</div>`;
	
	var newele2 = `
		<div class="ats left_ele">  The 2018 NSYSU-UCSD Bilateral Research Symposium will convene in 
campuscampus of National Sun Yat-sen University, Kaohsiung on March
26-27, 2018. The purpose of this symposium is to set up a platform for future
collaboration between scholars of National Sun Yat-sen University
and University of California, San Diego.

  The Program will consist of a keynote session followed by five parallel sessions 
and student poster session on the second day.

Symposium Scopes:
<img class="title_num" src='1.png'><img>Smart City
<img class="title_num" src='2.png'><img>Marine Sciences
<img class="title_num" src='3.png'><img>Photonics and Materials
<img class="title_num" src='4.png'><img>Social Sciences
<img class="title_num" src='5.png'><img>Aerosol Science and Biomedical Science

  We hope this bilateral research symposium will bring together scholars of both 
universities to engage in current research topics of mutual interest.
					</div>`;
	parent.append(newele);
	parent2.append(newele2);
	
}

/*Conference Chair*/
function go_cc(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Conference Chair
	</div>`;
	
	var newele2 = `
		<div class="ats left_ele"> 
Ying-Yao Cheng
President, National Sun Yat-sen University
<img style="width:750px;height:550px;"src='yingyaocheng.png'><img>

Educational Background :
	Ph.D., Department of Education, National Chengchi University (June 1992)
	M.Ed., Department of Education, National Kaohsiung Normal University (June 1985)
	BA, Department of Counseling, National Taiwan College of Education (June 1982)
Employment Experience : 
	President, National Sun Yat-sen University (2016-) 
	Lecturer/Associate Professor/Professor, Institute of Education,National Sun Yat-sen University (August 1985 ~ Present)
	Senior Vice President-Administrative, National Sun Yat-sen University (August 2010~July 2013)
	Dean, Center for General Education, National Sun Yat-sen University (August 2009 ~July 2010)
	Dean, College of Social Sciences, National Sun Yat-sen University (August 2001~January 2003, August 2008~July 2009)
	Director-General, Education Bureau, Kaohsiung City Government (January 2003~July 2004, December 2006~April 2008)
	Vice President for student Affairs, National Sun Yat-sen University (August 2004~July 2005)
	Director, Institute of Education, National Sun Yat-sen University (August 1998~July 2001)
Specialization : 
	S Educational Psychology
	Creative Thinking and Teaching
	Educational Administration and organizational Management
	Educational Measurement and Assessment
					</div>`;
	parent.append(newele);
	parent2.append(newele2);
}

