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
Add materials for homepage
=================================================*/
function go_home(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
        <div class="left_ele ele_container">
            <div>
                <img src="figures/home_small2.gif" style="height:150px;width:450px;"></img>
                <div class="title">Highlights of our research</div>
                <img src="photos/pic1.jpg" style="height:230px;width:430px;float: right;"></img>
                <div class="topic">Image/Video Compression</div>
                <ul class="list">
                    <li>Reinforcement learning for video encoder control</li>
                    <li>Learning-based image compression</li>
                </ul>
                <div class="topic">Image/Video Semantic Segmentation</div>
                <ul class="list">
                    <li>Domain adaptation for semantic segmentation</li>
                    <li>Weakly supervised semantic segmentation</li>
                    <li>Fast video-based semantic segmentation</li>
                </ul>
                <div class="topic">Incremental Learning</div>
                <div class="topic">AI Drone</div>
            </div>
        </div>`
    var newele2 = `
		<div class="ele_container left_ele">
            <span class="title">News & Events</span>
            <div class="content"><span class="date">June 2020</span> Prof. Wen-Hsiao Peng served as Co-organizer of the IEEE TCSVT Special Section on Learning-based Image and Video Compression (to appear in the 2020 July issue).</div>
            <div class="content"><span class="date">January 2020</span> Prof. Wen-Hsiao Peng was appointed as Associate Editor-in-Chief of Digital Communications for IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS).</div>
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
	<div class="left_ele title_style">
		Image/Video Compression
	</div>`;
	
	var newele2 = `
		<div class="left_ele ele_container">  
            <div class="topic">
                <img class="title_num" src='figures/1.png'><img>
                Deep Video Prediction
            </div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <td class="research_td">
                            <img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img>
                            <div class="research_title">SME-Net: Sparse Motion Estimation for Parametric Video Prediction through Reinforcement Learning</div>
                            <div class="research_author">Yung-Han Ho, Chuan-Yuan Cho, Wen-Hsiao Peng, Guo-Lun Jin</div>
                            <div class="research_from">IEEE International Conference on Computer Vision (ICCV), Oct. 2019.</div>
                            <div class="link"><a href="#">PDF</a> | <a href="#">Github</a></div>
                            <button class="button" onclick="ShowAbstract('research_DVP_1');">Abstract</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <div class="abstract" id="research_DVP_1">
                            This paper leverages a classic prediction technique,
                            known as parametric overlapped block motion compensation (POBMC), in a reinforcement learning framework for
                            video prediction. Learning-based prediction methods with
                            explicit motion models often suffer from having to estimate
                            large numbers of motion parameters with artificial regularization. Inspired by the success of sparse motion-based
                            prediction for video compression, we propose a parametric video prediction on a sparse motion field composed of
                            few critical pixels and their motion vectors. The prediction
                            is achieved by gradually refining the estimate of a future
                            frame in iterative, discrete steps. Along the way, the identification of critical pixels and their motion estimation are addressed by two neural networks trained under a reinforcement learning setting. Our model achieves the state-of-theart performance on CaltchPed, UCF101 and CIF datasets
                            in one-step and multi-step prediction tests. It shows good
                            generalization results and is able to learn well on small
                            training data.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="research_td">
                            <img class="research_img" src="research/compression/Videopred/` + Videopredimg2 + `"></img>
                            <div class="research_title">Deep Video Prediction Through Sparse Motion Regularization</div>
                            <div class="research_author">Yung-Han Ho, C. C. Chan, Wen-Hsiao Peng</div>
                            <div class="research_from">IEEE International Conference on Image Processing (ICIP), Oct. 2020.</div>
                            <div class="link"><a href="#">PDF</a> | <a href="#">Github</a></div>
                            <button class="button" onclick="ShowAbstract('research_DVP_2');">Abstract</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <div class="abstract" id="research_DVP_2">
                           Abstract ... 
                           </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="topic">
                <img class="title_num" src='figures/2.png'><img>
                Learning-based Image/Video Compression
            </div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <td class="research_td">
                            <img class="research_img" src="research/compression/Videopred/` + Videopredimg + `"></img>
                            <div class="research_title">An Autoencoder-based Image Compressor with Principle Component Analysis and Soft-Bit Rate Estimation</div>
                            <div class="research_author">Chih-Peng Chang, David Alexandr, Wen-Hsiao Peng, Hsueh-Ming Hang</div>
                            <div class="research_from">IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2019.</div>
                            <div class="link"><a href="#">PDF</a> | <a href="#">Github</a></div>
                            <button class="button" onclick="ShowAbstract('research_IVC_1');">Abstract</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <div class="abstract" id="research_IVC_1">
                           Abstract ... 
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
	<div class="left_ele title_style">
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
	<div class="left_ele title_style">
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
	<div class="left_ele title_style">
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
	<div class="left_ele title_style">
		Publication
	</div>`;
	
	var newele2 = `
        <div class="ele_container">
            <div class="left_ele title">
                Selected Journal Publications
            </div>
            <div class="left_ele content">
                <ul>
                    <li>H. P. Wang, W. H. Peng, and W. J. Ko, "Learning Priors for Adversarial Autoencoders," APSIPA Transactions on Signal and Information Processing, Nov. 2019 (to appear soon).</li>
                    <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Guest Editorial: Immersive Video Coding and Transmission," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
                    <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Immersive Video Coding Standardization Status," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
                </ul>
            </div>
            <div class="left_ele title">
                Selected Conference Publications
            </div>
            <div class="left_ele content">
                <ul>
                    <li>Y. H. Ho, C. C. Chan, and W. H Peng, "Deep Video Prediction Through Sparse Motion Regularization," IEEE International Conference on Image Processing (ICIP), Oct. 2020.</li>
                    <li>S. Tanujaya, T. Chu, J. H. Liu, and W. H. Peng, "Semantic Segmentation on Compressed Video Using Block Motion Compensation and Guided Inpainting," IEEE International Symposium on Circuits and Systems (ISCAS), Spain, Oct 2020.</li>
                    <li>Y. H. Ho, C. C. Chan, D. Alexandre, W. H. Peng, C. P. Chang, "P-frame Coding Proposal by NCTU: Parametric Video Prediction through Backprop-based Motion Estimation," IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2020.</li>
                    <li>C. P. Chang, D. Alexandre, W. H. Peng, H. M. Hang, "Description of Challenge Proposal by NCTU: An Autoencoder-based Image Compressor with Principle Component Analysis and Soft-Bit Rate Estimation," IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, Jun. 2019.</li>
                    <li>Y. H. Ho, C. Y. Cho, W. H Peng, and G. L. Jin, "SME-Net: Sparse Motion Estimation for Parametric Video Prediction through Reinforcement Learning," IEEE International Conference on Computer Vision (ICCV), Oct. 2019.</li>
                    <li>Y. W. Chang and W. H. Peng, "Learning Goal-oriented Visual Dialogue: Imitating and Surpassing Analytic Experts," IEEE International Conference on Multimedia and Expo (ICME), July 2019.</li>
                </ul>
            </div>
        </div>
        `;
	parent.append(newele);
	parent2.append(newele2);
	
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
                            <div><span style="font-weight:bolder;">Email: </span><a href="mailto:wpeng@cs.nctu.edu.tw">wpeng@cs.nctu.edu.tw</a></div>
                            <div>
                                <a href="https://sites.google.com/g2.nctu.edu.tw/wpeng">Personal Website</a> | 
                                <a href="https://scholar.google.com/citations?user=HucsFB4AAAAJ&hl=en">Google Scholar</a> | 
                                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwen-hsiao-peng-02752b141%2F&sa=D&sntz=1&usg=AFQjCNF4fUU-UdJ0UaACYsu17FzEh1LdAA">LinkedIn</a>
                            </div>
                        </td>
                    </tr>
               </tbody>
            </table>
            <div class="title">Ph.D Students</div>
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
