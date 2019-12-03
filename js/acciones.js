//JavaScript Document

$(document).ready(function(e){
	var citas=[];
	$('#enviar').on('click',function(){
		
		$.when($.post("http://192.168.4.8/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(), password: $('#pass').val()})).then(
			function exito (datos) {
				alert (datos);
			},
			function error(){
				alert ("error no se puede alcanzar al servidor");
			}
		
		);//then when
	});//click enviar
});
