$(function() {
	$(":button").click(function() {   //ボタンがクリックされた時に動作する
	  $("#jqs-1 p span").text($(":text").val()); //$("#jqs-1 p span")を$(":text").val()のテキストに書き換える
	});
});