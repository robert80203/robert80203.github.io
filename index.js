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

var current_page_position = '';

$(document).ready(function() {
	elementMove();
		
	/*$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});*/
	
	
});

var top_position = 385;
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
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Symposium Agenda
	</div>`;
	var newele2 = '<div class="left_ele" style="text-align:center"><iframe  style="margin-left:5%;" width="850px" height="1100px" src="agenda.JPG" frameborder="0"></iframe></div>';
	parent.append(newele);
	parent2.append(newele2);
	
	current_page_position = 'go_agenda';
	
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
				<p>〔2018.2.1〕Online Registration System Open : Feb. 01~Mar.20, 2018</p>
			</div>
			<div class="news_info">
				<p>〔2018.1.8〕Bio/Abstract for Invited Speakers Submission Deadline: Jan.31, 2018</p>
			</div>
		</div>`;
	parent.append(newele);
	parent2.append(newele2);
	
	current_page_position = 'go_home';
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
		<div class="ats left_ele">  The 2018 NSYSU-UCSD Bilateral Research Symposium will convene in campus of National Sun Yat-sen 
University, Kaohsiung  on  March 26-27, 2018. The purpose of this symposium is to set up a  platform  for 
future collaboration between scholars of  National Sun Yat-sen University and  University  of  California,
San Diego.

  The Program will consist of a keynote session followed by five parallel sessions and student poster session 
on the second day.

Symposium Scopes:
<img class="title_num" src='1.png'><img>Smart City
<img class="title_num" src='2.png'><img>Marine Sciences
<img class="title_num" src='3.png'><img>Photonics and Materials
<img class="title_num" src='4.png'><img>Social Sciences
<img class="title_num" src='5.png'><img>Aerosol Sciences
<img class="title_num" src='6.png'><img>Biomedical Sciences

  We hope this bilateral research symposium will bring together scholars of both universities to engage 
in current research topics of mutual interests.
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
	<div class="memtitle_css left_ele">
	Ying-Yao Cheng
	President, National Sun Yat-sen University
	
	<img style="width:500px;height:300px;"src='yingyaocheng.png'><img>
	</div>
		

<div class="ats left_ele"> 
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
function go_occ(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Organizing Committee Chair
	</div>`;
	
	var newele2 = `
		
<div class="memtitle_css left_ele">
Mitch Ming-Chi Chou
Vice President for Research and Development,
National Sun Yat-sen University

<img style="width:300px;height:400px;"src='mingchichou.jpg'><img>
</div>
<div class="ats left_ele"> 
Educational Background :
	Ph. D., University of Central Florida, USA (2000)
Employment Experience : 
	Vice President for Office of Research and Development, National Sun Yat-sen University (2017~ Present)
	Technical consultant, Korea Atomic Energy Research Institute (KAERI). (2009~ Present)
	Ad joint research fellow, National Synchrotron Radiation Research Center, Taiwan. (2010 ~ Present)
	Material research scientist, Crystal Photonics Inc, Sanford, FL, USA. (2000~2004)
Specialization : 
	Single Crystal Growth
	Electro-Optic Materials
	Epitaxial Growth
					</div>`;
	parent.append(newele);
	parent2.append(newele2);
	
}

/*For technical program committee*/
function go_tpc(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Technical Program Committee
	</div>`;
	var newele2 = '<div class="left_ele" style="text-align:center"><iframe style="margin-left:5%;"width="850px" height="1000px" src="tpc.JPG" frameborder="0"  allow="encrypted-media" allowfullscreen></iframe></div>';
	parent.append(newele);
	parent2.append(newele2);
}

function go_venue(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Venue
	</div>`;
	
	var newele2 = `
	<div class="left_ele" style="text-align:center;">
	<img class="left_ele" style="" width="800px" height="1000px" src="venue1.jpg"></img>'
	<img class="left_ele" style="" width="800px" height="1000px" src="venue2.jpg"></img>'
	</div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}

function go_contact(){
	var parent = $('#left_parent');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Contact Us
	</div>`;
	
	var newele2 = `
	<div class="left_ele" style="text-align:center;margin-top:20px;">
		<table style="width:750px;margin-left:auto;margin-right:auto;font-size:18px;">
			<tr>
				<th></th>
				<th>TPC Chair</th> 
				<th>Secretariat</th>
			</tr>
			<tr>
				<td>Name</td>
				<td>Prof. Hsiu-Chin Lin</td>
				<td>Ms. Yawen Cheng</td>
			</tr>
			<tr>
				<td>Email Address</td>
				<td>hsiuchinlin@mail.nsysu.edu.tw</td>
				<td>livetolearn@mail.nsysu.edu .tw</td>
			</tr>
			<tr>
				<td>Contact Phone Number</td>
				<td>+886-7-5252000#2609/5055</td>
				<td>+886-7-5252000#2614</td>
			</tr>
		</table>

	</div>
	<div class="left_ele" style='height:300px;'>
	</div>
	`;
	parent.append(newele);
	parent.append(newele2);
	
}

function go_accom(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Accommodation
	</div>`;
	
	
	var newele2 = `
		<div class="left_ele" style="text-align:center"><a target="_blank" href="https://www.ambassador-hotels.com/tc/kaohsiung">
		  <img  src="guobin.jpg" alt="error" style="width:300px;height:250px;border:0;">
		</a></div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}

/*=================Responsive Desgin======================*/

function openNav() {
	$('.container a').css('display','none');
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
	$('.sidebar').css('opacity', '0');
	setTimeout("$('.container a').css('display','block');", 500);
}

function closeNav() {
	$('.container a').css('display','none');
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	$('.sidebar').css('opacity', '1');
	
}
