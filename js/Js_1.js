/**
 * 
 */
$(document).ready(function(){
	$("#btnJSON").bind("click",function(){
		
	})
})
function getJSON(){
	$.ajax({
		type:"post",
		url:"/Demo07/JsonAction.action",
		dataType:"json",
		
		success:function(data){
			var json=eval(json);
			console.log(json);
		}
	});
}
