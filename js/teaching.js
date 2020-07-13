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
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="abstract" id='project_2019_1'>
                                Contextual attention module (CAM) and non-local blocks
                                are proposed to solve the ineffectiveness of convolutional
                                neural networks in explicitly borrowing or copying
                                information from distant spatial locations. Motivated by
                                these two methods, we add the non-local blocks to the
                                contextual attention network in [1], and the new
                                architecture improve the accuracy.
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
                            <div class="research_author">陳詒歆, 陳梅香</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_summer_2019_1');">Abstract</button>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="abstract" id="project_summer_2019_1">
                                Model optimized for challenging, dence prediction tasks such as semantic segmentation entail significant
                                inference costs and are slow to run on each frame in a video. However, there is substantial opportunity to reuse
                                computation from previous frame because of its similarity. This paper has two main contributions:
                                • To use motion vector maps instead of optical flow maps for cheaply propagate feature from frame to frame.
                                • To use feature interpolation schemes that warps and fuses the features of enclosing keyframes to generate
                                accurate feature estimates for intermediate frames.
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
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="abstract" id="project_2018_1">
                                We developed a lossy image compression
                                system using the deep-learning autoencoder
                                structure. Our autoencoder adopts the residual
                                neural net blocks with skip connections to
                                reduce the correlation among image pixels and
                                condense the input image into a set of feature
                                maps, a compact representation of the original
                                image. Our bit allocation and bitrate control
                                are implemented by using the importance
                                maps and quantizer. The importance maps are
                                generated by a separate neural net in the
                                encoder. Our aim is to produce reconstructed
                                images with good subjective quality at low bit
                                rates.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="research_td">
                            <iframe class="video" src="https://www.youtube.com/embed/Gbs1KCEphDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	                        
                            <div class="research_title">Simple Does It: Weakly Supervised Instance and Semantic Segmentation with Tensorflow</div>
                            <div class="research_author">呂承祐, 黃宇晟</div>
                            <div class="link"><a href="#">Poster</a></div>
                            <button class="button" onclick="ShowAbstract('project_2018_2');">Abstract</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="abstract" id="project_2018_2">
                            Generating labels for fully supervised
                            semantic segmentation is expensive;
                            Therefore, in [1] which using Bounding
                            Box, a kind of cheap-to-generate label,
                            in replace of expensive semantic
                            segmentation.
                            • In order to generate a more precise
                            label, the Bounding Box is processed
                            with the traditional computer vision
                            method, GrabCut.
                            • After getting the more precise label,
                            now the semantic segmentation can be
                            solved by fully supervised learning.
                            • At last, refining the semantic
                            segmentation with Dense CRF.
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
		<div class="left_ele ele_container">
            <div class="title">Course Description</div>
            <div class="content">
                This course extends matrix methods in Linear Algebra to cover their applications to data science, 
                including data analysis, signal processing, and machine learning. 
                It shall equip students with the required matrix methods on which data science depends. 
                TO TEACH TO LEARN TWICE policy - each group of students should take care of half-hour recitation sessions and be
                the audience of the other groups' recitation. Students should prepare taught materials to help students
                reviewing class materials in recitation sessions.
            </div>
            <div class="title">Fall Semester 2019 - Recitation Sessions</div>
            <table class="research_table">
                <tbody>
                    <tr>
                        <td class="research_td">
                            <img class="research_img" src="teaching/fall_2019_1.png"></img>
                            <div class="research_title">The insight of QR factorization</div>
                            <div class="research_author">Shih-Po Lee, Chih-Peng Chang</div>
                            <div class="link"><a href="teaching/[Group1]0756051_0856057.pptx">Slides</a></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="research_td">
                            <img class="research_img" src="teaching/fall_2019_2.png"></img>
                            <div class="research_title">Sherman-Morrison-Woodbury formula</div>
                            <div class="research_author">梁允, 翁英傑</div>
                            <div class="link"><a href="teaching/[Group16]0856717_0516069.pdf">Slides</a></div>
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