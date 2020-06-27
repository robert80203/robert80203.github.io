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

$(document).ready(function() {
	elementMove();
    go_home();
	/*$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});*/
	
	
});

var top_position = 1;
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


function sym_change(){
	
	var parent = $('.sym_temp');
	$('#sympo_agId').remove();
	var newele = '<img width="850px" height="1100px" id="sympo_agId" src='+arguments[0]+' frameborder="0"></img>'
	parent.append(newele);
}


/*=================================================
Add news here
=================================================*/
function go_home(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	//var newele = '<iframe class="left_ele" width="750px" height="450px" src="https://www.youtube.com/embed/Cl4idsb-e2o?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	var newele = `
    <div class="left_ele intro">
        <div class="intro_css">
        
        <img src="figures/home_small2.gif" style="height:150px;width:450px;margin-top:-3%"></img>
        <div style="float: right;margin-top:3%;margin-right:3%;"><img src="photos/pic1.jpg" style="height:230px;width:430px"></img></div>
        <span style="color: #7c795d; font-family: 'Trocchi', serif; font-size: 20px; font-weight: bold; line-height: 28px; margin: 0;">Our research mainly focuses on the following areas:</span>
        <span style="color: red; font-size: 16px; font-weight: bold; "><img class="title_num" src='figures/1.png'><img>Image/Video Compression</span>
            -  Reinforcement learning for video encoder control
            -  Learning-based image compression
        <span style="color: red; font-size: 16px; font-weight: bold; "><img class="title_num" src='figures/2.png'><img>Image/Video Semantic Segmentation</span>
            -  Domain adaptation for semantic segmentation
            -  Weakly supervised semantic segmentation
            -  Fast video-based semantic segmentation
        <span style="color: red; font-size: 16px; font-weight: bold; "><img class="title_num" src='figures/3.png'><img>Incremental Learning</span>
        <span style="color: red; font-size: 16px; font-weight: bold; "><img class="title_num" src='figures/4.png'><img>AI Drone</span>
        </div>
    </div>
    <!--<iframe class="left_ele" width="750px" height="450px" src="`+homepage_youtube+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->`;

    var newele2 = `
		<div class="news left_ele">
            <span class="news_title">News & Events</span>
            <!--<ul>
                <li class="news_date">2020/06/02</li>
                <div class="news_description">Wen-Hsiao Peng: Co-organizer of IEEE TCSVT Special Section on Learning-based Image and Video Compression</div>
                <div class="news_content">Prof. Wen-Hsiao Peng served as Co-organizer of the IEEE TCSVT Special Section on Learning-based Image and Video Compression (to appear in the 2020 July issue).</div>
                
                <li class="news_date">2020/01/11</li>
                <div class="news_description">Wen-Hsiao Peng: Associate Editor-in-Chief of Digital Communications for JETCAS</div>
                <div class="news_content">Prof. Wen-Hsiao Peng was appointed as Associate Editor-in-Chief of Digital Communications for IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS).</div>
            </ul> -->
            <div class="news_content"><span class="news_date">June 2020</span> Prof. Wen-Hsiao Peng served as Co-organizer of the IEEE TCSVT Special Section on Learning-based Image and Video Compression (to appear in the 2020 July issue).</div>
            <div class="news_content"><span class="news_date">January 2020</span> Prof. Wen-Hsiao Peng was appointed as Associate Editor-in-Chief of Digital Communications for IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS).</div>

			
			
		</div>`;
    parent.append(newele);
	parent2.append(newele2);
	
	current_page_position = 'go_home';
}
/*=================================================
Add materials of Deep image/video compression here
=================================================*/
function go_IVC(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Image/Video Compression
	</div>`;
	
	var newele2 = `
		<div class="research left_ele">  
            <!--
            <img class="title_num" src='figures/1.png'><img>Reinforcement Learning for Video Encoder Control
            <img class="research_img" src="research/compression/RLencoder/` + RLencoderimg + `"></img><img class="research_img" src="research/compression/RLencoder/` + RLencoderimg2 + `"></img>
            <img class="title_num" src='figures/2.png'><img>Deep Video Prediction
            <img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img><img class="research_img" src="research/compression/Videopred/` + Videopredimg2 + `"></img>
            <img class="title_num" src='figures/3.png'><img>Deep Image/Video Compression
            <img class="research_img" src="research/compression/Compression/` + Compressionimg + `"></img><img class="research_img" src="research/compression/Compression/` + Compressionimg2 + `"></img>
            -->
            <table style='text-align:left;border-spacing:10px 20px;border-collapse:separate;'>
                <img class="title_num" src='figures/1.png'><img>
            	<span class="research_topic">Deep Video Prediction</span>
                <tbody>
                    <tr>
                        <td style="text-align:center">
            				
            				<img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img>
                        </td>
                        <td style="vertical-align: top;text-align: left;">
				    		<div style="text-align:justify;">
				    			<div class="research_title">SME-Net: Sparse Motion Estimation for Parametric Video Prediction through Reinforcement Learning</div>
				    			<div class="research_author">Yung-Han Ho, Chuan-Yuan Cho, Wen-Hsiao Peng, and Guo-Lun Jin</div>
				            	<div class="research_from">IEEE International Conference on Computer Vision (ICCV), Oct. 2019.</div>
				            	<a style="font-size:16px" href="#">PDF</a> | <a href="#">Github</a>
				            </div>
                        </td>
                    </tr>
                    <tr>
                    	<td style="text-align:center">
            				<img class="research_img" src="research/compression/Videopred/` + Videopredimg2 + `"></img>
                        </td>
                        <td style="vertical-align: top;text-align: left;">
				    		<div style="text-align:justify;">
				    			<div class="research_title">Deep Video Prediction Through Sparse Motion Regularization,</div>
				    			<div class="research_author">Yung-Han Ho, C. C. Chan, and Wen-Hsiao Peng</div>
				            	<div class="research_from">IEEE International Conference on Image Processing (ICIP), Oct. 2020.</div>
				            	<a style="font-size:16px" href="#">PDF</a> | <a href="#">Github</a>
				            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style='text-align:left;border-spacing:10px 20px;border-collapse:separate;'>
              	<img class="title_num" src='figures/2.png'><img>
            	<span class="research_topic">Learning-based Image/Video Compression</span>
                <tbody>
                    <tr>
                        <td>
            				<img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img>
                        </td>
                        <td style="vertical-align: top;text-align: left;">
				    		<div style="text-align:justify;">
				    			<div class="research_title">Description of Challenge Proposal by NCTU: An Autoencoder-based Image Compressor with Principle Component Analysis and Soft-Bit Rate Estimation</div>
				    			<div class="research_author">Chih-Peng Chang, David Alexandr, Wen-Hsiao Peng,  Hsueh-Ming Hang</div>
				            	<div class="research_from">IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2019.</div>
				            	<a style="font-size:16px" href="#">PDF</a> | <a href="#">Github</a>
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
Add materials for semantic segmentation
=================================================*/
function go_SS(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Semantic Segmentation
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
Add materials for incremental learning
=================================================*/
function go_IL(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Incremental Learning
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
Add materials for AI Drone
=================================================*/
function go_drone(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		AI Drone
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
Add publication list here
=================================================*/
function go_Publication(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Publication
	</div>`;
	
	var newele2 = `
        <div class='publication_title left_ele'>
            Selected Journal Publications
        </div>
		<div class="publication_css left_ele">
            <ul>
                <li>H. P. Wang, W. H. Peng, and W. J. Ko, "Learning Priors for Adversarial Autoencoders," APSIPA Transactions on Signal and Information Processing, Nov. 2019 (to appear soon).</li>
                <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Guest Editorial: Immersive Video Coding and Transmission," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
                <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Immersive Video Coding Standardization Status," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
            </ul>
        </div>
        <div class='publication_title left_ele'>
            Selected Conference Publications
        </div>
        <div class="publication_css left_ele">
            <ul>
                <li>Y. H. Ho, C. C. Chan, and W. H Peng, "Deep Video Prediction Through Sparse Motion Regularization," IEEE International Conference on Image Processing (ICIP), Oct. 2020.</li>
                <li>S. Tanujaya, T. Chu, J. H. Liu, and W. H. Peng, "Semantic Segmentation on Compressed Video Using Block Motion Compensation and Guided Inpainting," IEEE International Symposium on Circuits and Systems (ISCAS), Spain, Oct 2020.</li>
                <li>Y. H. Ho, C. C. Chan, D. Alexandre, W. H. Peng, C. P. Chang, "P-frame Coding Proposal by NCTU: Parametric Video Prediction through Backprop-based Motion Estimation," IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2020.</li>
                <li>C. P. Chang, D. Alexandre, W. H. Peng, H. M. Hang, "Description of Challenge Proposal by NCTU: An Autoencoder-based Image Compressor with Principle Component Analysis and Soft-Bit Rate Estimation," IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2019.</li>
                <li>Y. H. Ho, C. Y. Cho, W. H Peng, and G. L. Jin, "SME-Net: Sparse Motion Estimation for Parametric Video Prediction through Reinforcement Learning," IEEE International Conference on Computer Vision (ICCV), Oct. 2019.</li>
                <li>Y. W. Chang and W. H. Peng, "Learning Goal-oriented Visual Dialogue: Imitating and Surpassing Analytic Experts," IEEE International Conference on Multimedia and Expo (ICME), July 2019.</li>
            </ul>
        </div>
        `;
	parent.append(newele);
	parent2.append(newele2);
	
}

/*=================================================
Add materials for DL
=================================================*/
function go_lec_DLP(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Deep Learning and Practice
	</div>`;
	
	var newele2 = `

		<div class="left_ele course">
			<div class="course_description">
<span style="font-weight:bolder;">Description:</span>
(1)	 To understand the maths of deep learning techniques
(2)	 To familiarize with deep learning tools, such as PyTorch, Tensor Flow, etc.
(3)	 To understand the latest developments and applications of deep learning techniques
(4)	 To develop practical working systems 
			</div>
            <div class="course_title">Spring Semester 2018 - Selected Projects</div>
            <table style='text-align:left;border-spacing:10px 20px;border-collapse:separate;'>
                <tbody>
                    <tr>
                        <td>
            				<iframe width="300px" height="200px" src="https://www.youtube.com/embed/CGPo546M6d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </td>
                        <td style="vertical-align: top;text-align: left;">
				    		<div style="text-align:justify;">
				    			<div class="research_title">Learnt Image Compressor</div>
				    			<div class="research_author">Chih-Peng Chang</div>
				    			<div style="font-size:16px">Abstract: You should put your abstract here.</div>
				    			<a style="font-size:16px" href="#">Poster</a>
				            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
            				<iframe width="300px" height="200px" src="https://www.youtube.com/embed/Gbs1KCEphDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	                        
            			</td>
                        <td style="vertical-align: top;text-align: left;">
				    		<div style="text-align:justify;">
				    			<div class="research_title">Simple Does It: Weakly Supervised Instance and Semantic Segmentation with Tensorflow</div>
				    			<div class="research_author">呂承祐, 黃宇晟</div>
				    			<div style="font-size:16px">Abstract: You should put your abstract here.</div>
				    			<a style="font-size:16px" href="#">Poster</a>
				            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="course_css">
                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Syllabus</a>
                | <a href="https://www.youtube.com/watch?v=QgoxtGi-trU&list=PLZAKTu7XAqHWY1J522ldYk29DjzdGA8jh">Project Video</a>
                | <a href="#">Final Workshop</a>
            </div>
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
	<div class="left_ele title_css">
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
	<div class="left_ele title_css">
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
	<div class="left_ele title_css">
		Current Members
	</div>`;
	
	var newele2 = `
<div class="members_css left_ele">
        <div class="member_title">Advisor</div>
        <table style="border-collapse: separate; border-spacing: 30px;">
            <tbody>
                <tr>
                    <td><img class="advisor_style" src='members/advisor.png'><img></td>
                    <td class="member_advisor">
                        <div style="font-weight:bolder;color:blue">Prof. Wen-Hsiao Peng, NCTU CS</div>
                        <div><a href="https://www.cs.nctu.edu.tw/">Department of Computer Science, National Chiao Tung University</a></div>
                        <div><span style="font-weight:bolder;">Research Highlights:</span>Machine/deep learning, ISO/IEC & ITU-T video coding standards</div>
                        <div><span style="font-weight:bolder;">Address: </span>Room 431, Engineering Building 3, 1001 Ta-Hsueh Rd., Hsinchu 30010, Taiwan</div>
                        <div><span style="font-weight:bolder;">Email: </span><a href="mailto:wpeng@cs.nctu.edu.tw">wpeng@cs.nctu.edu.tw</a></div>
                        <div><a href="https://sites.google.com/g2.nctu.edu.tw/wpeng">Personal Website</a> | <a href="https://scholar.google.com/citations?user=HucsFB4AAAAJ&hl=en">Google Scholar</a> | <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwen-hsiao-peng-02752b141%2F&sa=D&sntz=1&usg=AFQjCNF4fUU-UdJ0UaACYsu17FzEh1LdAA">LinkedIn</a>
                        </div>
                    </td>
                </tr>
           </tbody>
        </table>
        <div class="member_title">Ph.D Students</div>
        <table style="border-collapse: separate; border-spacing: 30px;">
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
                        <a href="https://sites.google.com/site/huitinglinchristine/">Website</a>
                     </td>
                     <td>
                        <img class="member_style" src='members/Niraj.jpg'></img>
                        <div>Niraj Prakash Kini</div>
                        <span><img class="icon_css" src='figures/mail.png'></img></span>
                        <a href="mailto:nirajnctu17@gmail.com">Email</a>
                        <span><img class="icon_css" src='figures/web.gif'></img></span>
                        <a href="https://sites.google.com/site/huitinglinchristine/">Website</a>
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
	<div class="left_ele title_css">
		Alumni
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
Add materials for join us
=================================================*/
function go_joinus(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Join Us
	</div>`;
	
	var newele2 = `
		<div class="members_css left_ele">
            <div class="member_title">Ph.D/Graduate Students Recruitment</div>
            <div class="news_content">We are recruiting PhD/Master students interested in conducting research for publication.</div>
            <div class="member_title">For Undergraduate Students</div>
            <div class="news_content">We provide international intership/study opportunities.</div>
            <div class="member_title">Students Exchange</div>
            <div class="news_content">
                <ul>
                  <li>Internship at Max Planck Institute, Germany</li>
                  <li>Internship at University of Washington, USA</li>
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
function go_life(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Life
	</div>`;
	
	var newele2 = `
		<div class="left_ele" style="text-align:center;margin-top:3%;">
		  <img  src="unavailable.png" alt="error" style="width:15vw;height:15vw;border:0;">
		</div>
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
