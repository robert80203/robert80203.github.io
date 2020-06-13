/*=================================================
Change the variables below to modify the content
=================================================*/

/*You should use embedded url from youtube*/
homepage_youtube = "https://www.youtube.com/embed/X3WpaQzZBfE"
DLP_demo_yourube = "https://www.youtube.com/embed/CGPo546M6d8"

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
        <img src="figures/home_small2.gif" style="height:100px;width:400px"></img>
        We are recruiting PhD/Master students interested in conducting research in the following areas:
        1.Reinforcement Learning (RL) Applications
          -  RL for video encoder control
          -  Deep video prediction
          -  Visual question answering
        2.Image/video Analytics
          -  Domain adaptation for semantic segmentation
          -  Compressed domain video analytics
          -  Weakly supervised semantic segmentation
        3.Deep Image/video Compression
        </div>
    </div>
    <iframe class="left_ele" width="750px" height="450px" src="`+homepage_youtube+`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    var newele2 = `
		<div class="news left_ele">
            <span class="news_title">News & Events</span>
            <ul>
                <li class="news_date">2020/06/02</li>
                <div class="news_description">Wen-Hsiao Peng: Co-organizer of IEEE TCSVT Special Section on Learning-based Image and Video Compression</div>
                <div class="news_content">Prof. Wen-Hsiao Peng served as Co-organizer of the IEEE TCSVT Special Section on Learning-based Image and Video Compression (to appear in the 2020 July issue).</div>
                
                <li class="news_date">2020/01/11</li>
                <div class="news_description">Wen-Hsiao Peng: Associate Editor-in-Chief of Digital Communications for JETCAS</div>
                <div class="news_content">Prof. Wen-Hsiao Peng was appointed as Associate Editor-in-Chief of Digital Communications for IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS).</div>
            </ul>  
			
			
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
		<div class="ats left_ele">  
            <img class="title_num" src='figures/1.png'><img>Reinforcement Learning for Video Encoder Control
            <img class="research_img" src="research/compression/RLencoder/` + RLencoderimg + `"></img><img class="research_img" src="research/compression/RLencoder/` + RLencoderimg2 + `"></img>
            <img class="title_num" src='figures/2.png'><img>Deep Video Prediction
            <img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img><img class="research_img" src="research/compression/Videopred/` + Videopredimg2 + `"></img>
            <img class="title_num" src='figures/3.png'><img>Deep Image/Video Compression
            <img class="research_img" src="research/compression/Compression/` + Compressionimg + `"></img><img class="research_img" src="research/compression/Compression/` + Compressionimg2 + `"></img>
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
            <div class="course_title">Spring Semester 2018 - </div>
            
            <iframe width="750px" height="450" src="` + DLP_demo_yourube + `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="course_css">
                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Syllabus</a>
                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Project Video</a>
                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Final Workshop</a>
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
Add materials for linear algebra
=================================================*/
function go_lec_LA(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Linear Algebra
	</div>`;
	
	var newele2 = `
		<div class="left_ele" style="text-align:center;margin-top:3%;">
		  <img  src="unavailable.png" alt="error" style="width:15vw;height:15vw;border:0;">
		</div>
	`;
	parent.append(newele);
	parent2.append(newele2);
}
/*For tour*/
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
            <div class="course_title">Advisor</div>
            <img style="width:200px;height:300px;"src='members/advisor.png'><img>
            Educational Background :
                - Ph.D., M.S. and B.S. in EE, National Chiao Tung University, Taiwan, 2005, 1999, 1997 (all with the highest honor)
            Employment Experience : 
                - July 2015 – July 2016, Visiting Professor, IBM Thomas J. Watson Research Center, New York, USA
            Research Highlights:
                - Machine/deep learning
                - Computer vision
                - ISO/IEC & ITU-T video coding standards
            Personal Website: <a href="https://sites.google.com/g2.nctu.edu.tw/wpeng">wpeng</a>
        </div>`;
	parent.append(newele);
	parent2.append(newele2);
}

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

function go_work(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
	<div class="left_ele title_css">
		Work/Study Opportunities
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
