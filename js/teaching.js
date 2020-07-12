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
                Students are required to present papers and develop final projects which will be presented in a on site workshop.
			</div>
            <div class="title">Spring Semester 2019 - Selected Projects</div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <td class="research_td">
                            <iframe class="video" src="https://youtube.com/embed/KYVma8KVT_k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="research_title">Contextual Attention Inpainting Network with Non-local Blocks</div>
                            <div class="research_author">劉嘉豪, 朱蝶</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_2019_1');">Abstract</button>
                            <div class="abstract" id="project_2019_1">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="link">
                                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Syllabus</a> |
                                <a href="https://www.youtube.com/watch?v=O0ijvhG1Xoo&list=PLZAKTu7XAqHUukdYlwdWbZ0yj-q9TAWPA">Project Video</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="title">Summer Semester 2018 - Selected Projects</div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <td class="research_td">
                            <iframe class="video" src="https://youtube.com/embed/cSxyAMotcjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="research_title">Fast Semantic Segmentation on Video Using Motion Vector-Based Feature Interpolation</div>
                            <div class="research_author">陳詒欣, 陳梅香</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_summer_2019_1');">Abstract</button>
                            <div class="abstract" id="project_summer_2019_1">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="link">
                                <a href="https://timetable.nctu.edu.tw/?r=main/crsoutline&Acy=108&Sem=2&CrsNo=5253&lang=zh-tw">Syllabus</a> |
                                <a href="https://www.youtube.com/watch?v=O0ijvhG1Xoo&list=PLZAKTu7XAqHUukdYlwdWbZ0yj-q9TAWPA">Project Video</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="title">Spring Semester 2018 - Selected Projects</div>
            <table class="research_table">
                <tbody>
                    <tr>
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
                                <a href="https://www.youtube.com/watch?v=QgoxtGi-trU&list=PLZAKTu7XAqHWY1J522ldYk29DjzdGA8jh">Project Video</a>
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