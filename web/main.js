jQuery(document).on("submit","#fm", function(event){
	event.preventDefault();
	
	jQuery.ajax({
		url: 'login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$(".botonlg").val("validando...");
		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if(!respuesta.error){
			if(respuesta.tipo === "A"){
                            
                             $('#container').slideUp('slow');
                            $('#out').slideDown('slow');
                            $('.hijo2').slideDown('slow');
                            $('.hijo1').slideDown('slow');
                            
                            
			}else if(respuesta.tipo === "U"){
                            $('#out').slideDown('slow');
                            $('#container').slideUp('slow');
                            $('.hijo2').slideDown('slow');
                            $('.hijo1').slideDown('slow');
                           }
		}else{
			$('.error').slideDown('slow');
		setTimeout(function(){
			$('.error').slideUp('slow');
		},3000);
		$(".botonlg").val("Iniciar Sesion");
		}
		})
	.fail(function(resp){
		console.log(resp.responseText);
		})
	.always(function(){
		console.log("complete");
		});
	});
        
