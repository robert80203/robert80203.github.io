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
                Journal Publications
            </div>
            <div class="left_ele content">
                <ul>
                    <li>H. P. Wang, W. H. Peng, and W. J. Ko, "Learning Priors for Adversarial Autoencoders," APSIPA Transactions on Signal and Information Processing, Nov. 2019 (to appear soon).</li>
                    <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Guest Editorial: Immersive Video Coding and Transmission," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
                    <li>M. Wien, J. M. Boyce , T. Stockhammer, and W. H. Peng, "Immersive Video Coding Standardization Status," IEEE Journal on Emerging and Selected Topics in Circuits and Systems, Mar. 2019.</li>
                    <li>W.-H. Peng, J. Xu, R. A. Cohen, J. Ostermann, "Guest Editorial: Screen Content Video Coding and Applications," IEEE Journal on Emerging Selected Topics in Circuits and Systems, vol. 6, no. 4, pp. 389 - 392, Dec. 2016</li>
                    <li>W.-H. Peng, F. Walls, R. A. Cohen, J. Xu, J. Ostermann, S. MacInnis, and T. Lin, “Overview of Screen Content Video Coding: Technologies, Standards, and Beyond,” IEEE Journal on Emerging Selected Topics in Circuits and Systems, vol. 6, no. 4, pp. 393 - 408, Dec. 2016</li>
                    <li>C. C. Chen and W. H. Peng, "Intra Line Copy for HEVC Screen Content Intra-Picture Prediction," IEEE Trans. Circuits Syst. Video Technol, vol. 27, no. 7, pp. 1568 - 1579, July 2017</li>
                    <li>W. H. Peng and C. C. Chen, "An Inter-Frame Prediction Technique Combining Template Matching Prediction and Block Motion Compensation for High Efficiency Video Coding," IEEE Transactions on Circuits and Systems for Video Technology, vol. 23, no. 8, pp. 1432-1446, Aug. 2013.</li>
                    <li>Y. W. Chen and W. H. Peng, "Parametric OBMC for Pixel-Adaptive Temporal Prediction on Irregular Motion Sampling Grids," IEEE Transactions on Circuits and Systems for Video Technology, vol. 22, no. 1, pp. 113-127, Jan. 2012.</li>
                    <li>H. C. Lin, H. M. Hang and W. H. Peng, "Fast Bi-directional Prediction Selection in H.264/MPEG-4 AVC Temporal Scalable Video Coding," IEEE Transactions on Image Processing, vol. 20, no. 12, pp. 3508-3523, Dec. 2011</li>
                    <li>H. C. Lin, W. H. Peng, and H. M. Hang, "Fast Context-Adaptive Mode Decision Algorithm for Scalable Video Coding with Combined Coarse-Grain Quality Scalability (CGS) and Temporal Scalability," IEEE Transactions on Circuits and Systems for Video Technology, vol. 20, no. 5, pp. 732-748, May 2010</li>
                    <li>W. H. Peng, J. K. Zao, H. T. Huang, T. W. Wang, and L. S. Huang, "A Rate Distortion Optimization Model for SVC Inter-layer Encoding and Bitstream Extraction," Journal of Visual Communication and Image Representation, vol. 19, no. 8, pp. 543-557, Dec. 2008.</li>
                    <li>H. C. Huang, W. H. Peng, T. Chiang, and H. M. Hang, "Advances in the Scalable Extension of H.264/AVC," IEEE Communications Magazine, vol. 45, no. 1, pp. 68-76, Jan. 2007.</li>
                    <li>C. H. Li, W. H. Peng, and T. Chiang, "Design of Memory Sub-System with Constant Rate Bumping Process for H.264/AVC Decoder," IEEE Transactions on Consumer Electronics, vol. 53, no. 1, pp. 209-217, Feb. 2007.</li>
                    <li>W. H. Peng, T. Chiang, H. M. Hang and C. Y. Lee, "A Context Adaptive Binary Arithmetic Codec with Maximum likelihood based Stochastic Bit Reshuffling (SBR) Technique for Scalable Video Coding," IEEE Transactions on Multimedia, vol. 8, no. 4, pp. 654-667, Aug. 2006.</li>
                    <li>S. H. Wang, W. H. Peng, Y. W. He, G. Y. Lin, C. Y. Lin, S. C. Chang, C. N. Wang and T. Chiang, "A Software-Hardware Co-Implementation of MPEG-4 Advanced Video Coding (AVC) Decoder with Block Level Pipelining," International Journal of VLSI Signal Processing, vol. 41, no. 1, pp. 93-110, Aug. 2005</li>
                    <li>S. C. Chang, W. H. Peng, S. H. Wang and T. Chiang, "A Platform based Bus-interleaved Architecture for Deblocking Filter in H.264/MPEG-4 AVC," IEEE Transactions on Consumer Electronics, vol. 51, no.1, pp. 249-255, Feb. 2005</li>
                    <li>W. H. Peng and Y. K. Chen, "Enhanced Mode Adaptive Fine Granularity Scalability," International Journal of Imaging Systems and Technology, vol. 13, no. 6, pp. 308-321, Nov. 2003.</li>
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