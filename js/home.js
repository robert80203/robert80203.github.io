/*=================================================
Add materials for homepage
=================================================*/
function go_home(){
	var parent = $('#left_parent');
	var parent2 = $('#left_parent2');
	$('.left_ele').remove();
	var newele = `
		<!--<div class="left_ele title_home">
		</div>-->
        <div class="left_ele ele_container">
            <div>
                <div class="title">Highlights of our research</div>
                <img src="photos/pic1.jpg" style="height:230px;width:430px;float: right;"></img>
                <div class="topic">Image/Video Compression</div>
                <ul class="list">
                    <li>Reinforcement learning for video encoder control</li>
                    <li>Learning-based video compression</li>
                    <li>Learning-based image compression</li>
                </ul>
                <div class="topic">Image/Video Semantic Segmentation</div>
                <ul class="list">
                    <li>Domain adaptation for semantic segmentation</li>
                    <li>Weakly supervised semantic segmentation</li>
                    <li>Fast video-based semantic segmentation</li>
                </ul>
                <div class="topic">Incremental Learning</div>
                <div class="topic">Video Super-Resolution</div>
                <div class="topic">AI Drone</div>
            </div>
        </div>`
    var newele2 = `
		<div class="ele_container left_ele">
            <span class="title">News & Events</span>
            <div class="content"><span class="date">June 2020</span> Prof. Wen-Hsiao Peng served as Co-organizer of the IEEE TCSVT Special Section on Learning-based Image and Video Compression (to appear in the 2020 July issue).</div>
            <div class="content"><span class="date">January 2020</span> Prof. Wen-Hsiao Peng was appointed as Associate Editor-in-Chief of Digital Communications for IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS).</div>
            <div class="content">
                <span class="date">September 2019</span> [Invited Talk] Beyond end-to-end learning: Dialog system, sentence generation, and conversation analysis for automatic mental disorder diagnosis.
                <div><span style="font-weight:bolder">Honorary Speaker</span>: Prof. Yoshinobu Kano</div>
                <div><span style="font-weight:bolder">Time</span>: 14:00 - 15:00, Monday, 30 September, 2019</div>
                <div><span style="font-weight:bolder">Venue</span>: National Chiao Tung University, EC321 (交通大學工程三館 EC321)</div>
                <div><span style="font-weight:bolder">Information</span>: <a href="http://mapl.nctu.edu.tw/sample/20190930_Yoshinobu_Talk.pdf">here</a></div>
             </div>
             <div class="content"><span class="date">July 2019</span> Congratulations to our student Hui-Po Wang on being admitted into the internship program with Max Planck Institute, Germany.</div>
             <div class="content"><span class="date">March 2019</span> Prof. Wen-Hsiao Peng gave an APSIPA DL talk on Reinforcement Learning for Video Encoder Control and Video Prediction at Sungkyunkwan Univ., Suwon, South Korea.</div>
             <div class="content"><span class="date">February 2019</span> Prof. Wen-Hsiao Peng was appointed as Associate Editor of IEEE Transactions on Circuits and Systems for Video Technology (TCSVT).</div>

        </div>`;
    parent.append(newele);
	parent2.append(newele2);
	current_page_position = 'go_home';
}