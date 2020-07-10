/*=================================================
Change the variables below to modify the content
=================================================*/

/*You should use embedded url from youtube*/
homepage_youtube = "https://www.youtube.com/embed/X3WpaQzZBfE"

RLencoderimg = "encoder_control.png"
RLencoderimg2 = "encoder_control2.png"
Videopredimg = "Video_Prediction.png"
Videopredimg2 = "Video_Prediction2.png"
Compressionimg = "Deep_image.png"
Compressionimg2 = "Deep_image2.png"

/*=================================================
===================================================
=================================================*/

var current_page_position = '';
var top_position = 1;
var first = 0;

$(document).ready(function() {
	elementMove();
    go_home();
});



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



function ShowAbstract(id) {
  var x = document.getElementById(id);
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/*=================================================
Add materials for deep learning and practice
=================================================*/
function go_lec_DLP(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Deep Learning and Practice
	</div>`;
	
	var newele2 = `
		<div class="left_ele ele_container">
			<div class="title">Course Description</div>
            <div class="content">
                The main goal of this course is to make students understand the maths of deep learning techniques,
                the latest applications of deep learning,
                and familiarize with deep learning tools, PyTorch, by working on hands-on labs.
                Students are required to present papers and develop final projects which should be presented in a on site workshop.
			</div>
            <div class="title">Spring Semester 2018 - Selected Projects</div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <!--<td>
            				
                        </td>-->
                        <td class="research_td">
                            <iframe class="video" src="https://www.youtube.com/embed/CGPo546M6d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="research_title">Learnt Image Compressor</div>
                            <div class="research_author">Chih-Peng Chang</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_2018_1');">Abstract</button>
                            <div class="abstract" id="project_2018_1">
                            You should put your abstract here.
                            </div>
                            
                        </td>
                    </tr>
                    <tr>
                        <!--<td>
            				<iframe class="video" src="https://www.youtube.com/embed/Gbs1KCEphDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	                        
            			</td>-->
                        <td class="research_td">
                            <iframe class="video" src="https://www.youtube.com/embed/Gbs1KCEphDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	                        
                            <div class="research_title">Simple Does It: Weakly Supervised Instance and Semantic Segmentation with Tensorflow</div>
                            <div class="research_author">呂承祐, 黃宇晟</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_2018_2');">Abstract</button>
                            <div class="abstract" id="project_2018_2">
                            You should put your abstract here.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="link">
                                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Syllabus</a> |
                                <a href="https://www.youtube.com/watch?v=QgoxtGi-trU&list=PLZAKTu7XAqHWY1J522ldYk29DjzdGA8jh">Project Video</a> | 
                                <a href="#">Final Workshop</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}
/*=================================================
Add materials for Matrix Method
=================================================*/
function go_lec_MM(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Matrix Method
	</div>`;
	
	var newele2 = `
		<div class="left_ele" style="text-align:center;margin-top:3%;">
            <img  src="unavailable.png" alt="error" style="width:15vw;height:15vw;border:0;">
		</div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}
/*=================================================
Add materials for Video compression
=================================================*/
function go_lec_VC(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Video Compression
	</div>`;
	
	var newele2 = `
		<div class="left_ele" style="text-align:center;margin-top:3%;">
		  <img  src="unavailable.png" alt="error" style="width:15vw;height:15vw;border:0;">
		</div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}


/*=================================================
Add for current members
=================================================*/
function go_cur_members(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Current Members
	</div>`;
	
	var newele2 = `
        <div class="left_ele ele_container">
            <div class="title">Advisor</div>
            <table class="member_table">
                <tbody>
                    <tr>
                        <td><img class="advisor_style" src='members/advisor.png'><img></td>
                        <td>
                            <div style="font-weight:bolder;color:blue">Prof. Wen-Hsiao Peng, NCTU CS</div>
                            <div><a href="https://www.cs.nctu.edu.tw/">Department of Computer Science, National Chiao Tung University</a></div>
                            <div><span style="font-weight:bolder;">Research Highlights:</span>Machine/deep learning, ISO/IEC & ITU-T video coding standards</div>
                            <div><span style="font-weight:bolder;">Office: </span>Room 431, Engineering Building 3</div>
                            <div><img class="icon_css" src='figures/mail.png'></img><span style="font-weight:bolder;">Email: </span><a href="mailto:wpeng@cs.nctu.edu.tw">wpeng@cs.nctu.edu.tw</a></div>
                            <div>
                                <img class="icon_css" src='figures/web.gif'></img>
                                <a href="https://sites.google.com/g2.nctu.edu.tw/wpeng">Personal Website</a> | 
                                <a href="https://scholar.google.com/citations?user=HucsFB4AAAAJ&hl=en">Google Scholar</a> | 
                                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwen-hsiao-peng-02752b141%2F&sa=D&sntz=1&usg=AFQjCNF4fUU-UdJ0UaACYsu17FzEh1LdAA">LinkedIn</a>
                            </div>
                        </td>
                    </tr>
               </tbody>
            </table>
            <div class="title">Ph.D. Students</div>
            <table class="member_table" style="text-align:center;">
                <tbody>
                    <tr>
                        <td>
                            <img class="member_style" src='members/Christine.jpg'></img>
                            <div>林惠婷 Hui-Ting Lin</div>
                            <span><img class="icon_css" src='figures/mail.png'></img></span>
                            <a href="mailto:lin.huiting.christine@gmail.com">Email</a>
                            <span><img class="icon_css" src='figures/web.gif'></img></span>
                            <a href="https://sites.google.com/site/huitinglinchristine/">Website</a>
                         </td>
                         <td>
                            <img class="member_style" src='members/hector.jpg'></img>
                            <div>何永涵 Yung-Han Ho</div>
                            <span><img class="icon_css" src='figures/mail.png'></img></span>
                            <a href="mailto:hectorho0409@gmail.com">Email</a>
                            <span><img class="icon_css" src='figures/web.gif'></img></span>
                            <a href="#">Website</a>
                         </td>
                         <td>
                            <img class="member_style" src='members/Niraj.jpg'></img>
                            <div>Niraj Prakash Kini</div>
                            <span><img class="icon_css" src='figures/mail.png'></img></span>
                            <a href="mailto:nirajnctu17@gmail.com">Email</a>
                            <span><img class="icon_css" src='figures/web.gif'></img></span>
                            <a href="#">Website</a>
                         </td>
                    </tr>
                </tbody>
            </table>
        </div>`;
	parent.append(newele);
	parent2.append(newele2);
}

/*=================================================
Add materials for alumni
=================================================*/
function go_alu(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Alumni
	</div>`;
	
	var newele2 = `
        <div class="left_ele ele_container">
            <div class="title">2019</div>
                <table class="member_table" style="text-align:center;">
                    <tbody>
                        <tr>
                            <td>
                                <img class="member_style" src='members/alumni/wangmeng.jpg'></img>
                                <div>王濛 Meng Mang</div>
                                <span><img class="icon_css" src='figures/mail.png'></img></span>
                                <a href="mailto:mm20103462@gmail.com">Email</a>
                                <span><img class="icon_css" src='figures/web.gif'></img></span>
                                <a href="https://sites.google.com/site/mengwang404/">Website</a>
                             </td>
                             <td>
                                <img class="member_style" src='members/alumni/francis.jpg'></img>
                                <div>張硯為 Yen-Wei Chang</div>
                                <span><img class="icon_css" src='figures/mail.png'></img></span>
                                <a href="mailto:francis87192@gmail.com">Email</a>
                                <span><img class="icon_css" src='figures/web.gif'></img></span>
                                <a href="http://people.cs.nctu.edu.tw/~changyw03/">Website</a>
                             </td>
                        </tr>
                    </tbody>
                </table>
       </div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}

/*=================================================
Add materials for PhD graduates
=================================================*/
function go_phdgrad(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Ph.D. Graduates
	</div>`;
	
	var newele2 = `
        <div class="left_ele ele_container">
            <div class="title">2017</div>
            <table class="member_table">
                <tbody>
                    <tr>
                        <td><img class="advisor_style" src='members/phd_graduates/ChunChiChen2015.jpg'><img></td>
                        <td>
                            <div>Chun-Chi Chen, 陳俊吉</div>
                            <div>
                                <img class="icon_css" src='figures/mail.png'></img><span>Email: </span>
                                <a href="mailto:cheerchen.cs98g@g2.nctu.edu.tw">cheerchen.cs98g@g2.nctu.edu.tw</a>,
                                <a href="mailto:cheerchen73@gmail.com">cheerchen73@gmail.com</a>
                            </div>
                            <div>
                                <img class="icon_css" src='figures/web.gif'></img>
                                <a href="http://mapl.nctu.edu.tw/ogre">Personal Website</a>
                            </div>
                            <div>
                                <img class="icon_css" src='figures/work.jpg'></img>
                                <span>Mandatory National Service (Term ends on Februay 6, 2018)</span>
                            </div>
                        </td>
                    </tr>
               </tbody>
            </table>
            <div class="title">2011</div>
            <table class="member_table">
                <tbody>
                    <tr>                 
                        <td><img class="advisor_style" src='members/phd_graduates/YiWenChen.jpg'><img></td>
                        <td>
                            <div>Yi-Wen Chen (Jeff), 陳渏紋</div>
                            <div>
                                <img class="icon_css" src='figures/mail.png'></img><span>Email: </span>
                                <a href="mailto:yiwench@gti.qualcomm.com">yiwench@gti.qualcomm.com</a>,
                                <a href="mailto:ewchen@csie.nctu.edu.tw">ewchen@csie.nctu.edu.tw</a>
                            </div>
                            <div>
                                <img class="icon_css" src='figures/web.gif'></img>
                                <a href="https://tw.linkedin.com/in/yi-wen-chen-180b1059">Personal Website</a>
                            </div>
                            <div>
                                <img class="icon_css" src='figures/work.jpg'></img>
                                <span>Qualcomm, San Diego, CA, USA</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}


/*=================================================
Add materials for join us
=================================================*/
function go_joinus(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Join Us
	</div>`;
	
	var newele2 = `
		<div class="left_ele ele_container">
            <div class="title">Ph.D/Graduate Students Recruitment</div>
            <div class="content">We are recruiting PhD/Master students interested in conducting research for publication.</div>
            <div class="title">For Undergraduate Students</div>
            <div class="content">We provide international intership/study opportunities.</div>
            <div class="title">Students Exchange</div>
            <div class="content">
                <ul>
                  <li><span class="date">2019</span> Internship at Max Planck Institute, Germany</li>
                  <li><span class="date">2020</span> Internship at University of Washington, USA</li>
                </ul>
            </div>
        </div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}
/*=================================================
Add materials for life
=================================================*/
/*function go_life(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_style">
		Life
	</div>`;
	
	var newele2 = `
		<div class="left_ele" style="text-align:center;margin-top:3%;">
		  <img  src="unavailable.png" alt="error" style="width:15vw;height:15vw;border:0;">
		</div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}*/


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
