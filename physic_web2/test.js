$(document).ready(function() {
	videoMove();
	elementMove();
});
var videoMove=function () {
	/*if(document.getElementById('#totalVideo'))*/ {
		// ���o�� top ��
		var $totalVideo = $('#totalVideo'),
			_top = $totalVideo.offset().top;
alert("hgj");
		// ��������b���ʮ�
		var $win = $(window).scroll(function () {
			
			// �p�G�{�b�� scrollTop �j��쥻�� top+300 ��
			if ($win.scrollTop() >= _top) {

				$('#totalVideo')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
			}
		});
	}
}

var elementMove=function () {
	/*if(document.getElementById('#allBTN')) */{
		// ���o�� top ��
		var $allBTN = $('#allBTN'),
			_top = $allBTN.offset().top;

		// ��������b���ʮ�
		var $win = $(window).scroll(function () {
			// �p�G�{�b�� scrollTop �j��쥻�� top ��
			if ($win.scrollTop() >= _top) {
				// �p�G�y�Шt�Τ��O fixed ����
				if ($allBTN.css('position') != 'fixed') {
					// �]�w�y�Шt�ά� fixed
					$allBTN.css({
						position: 'fixed',
						top: 15
					});
				}
			} else {
				// �٭�y�Шt�ά� absolute
				$allBTN.css({
					position: 'absolute',
					top: '15%'
				});
			}
		});
	}
}