/* $(document).ready(function () {
	//mouseover시 일어나는 effect	
	var $infraEle = $("#infra .infra_list li");
	$infraEle.attr('tabindex', 0);

	//li에 포커스가 가거나 마우스가 진입할 경우 클래스 추가, 포커스와 마우스가 나가면 처음으로 되돌리기
	$infraEle.on({
		'focusin mouseenter' : function () {
			$(this).addClass("on");
		},
		'focusout mouseleave' : function () {
			$(this).removeClass("on");
		}		
	});
}); */

$(document).ready(function(){
	var $infraEle = $("#infra .infra_list li");
	$infraEle.attr("tabIndex", 0);
	$infraEle.on({
		"focusin mouseenter": function(){
			$(this).addClass("on");
		},
		"focusout mouseleave": function(){
			$(this).removeClass("on");
		}
	});
});