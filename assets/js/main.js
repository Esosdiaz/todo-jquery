$(document).ready(function(){
	$("#enviar-tarea").on("click", agregarTarea); //evento al click del boton
	function agregarTarea(){
		var tareaNueva = $("#tarea-nueva").val();
		$("#lista-tareas").append('<li class="valign-wrapper"><input type="checkbox" class="tarea-terminada"/><label for="test"></label>   '+tareaNueva+'    <button class="waves-effect waves-light btn borrar"><i class="fa fa-trash-o" aria-hidden="true"></i></li>'); //crea dinámicamente la nueva tarea
		$("#tarea-nueva").val(""); // mantiene el input vacio luego de enviar el contenido
	}
	$(document).on("click", ".borrar", borrarTarea); //evento al documento al click de los botones delete
	function borrarTarea(){
		$(this).parent().remove(); //borra la tarea específica
	}
	$(document).on("click", ".tarea-terminada", terminarTarea) // para hacer uso de los checkbox
	function terminarTarea(){
		if ( $(this).parent().css('textDecoration') =='line-through' ){//condicional que verifica el estado del checkbox, en este caso, si ya esta lleno
			$(this).parent().css('textDecoration','none'); //si el texto está rayado, lo limpia
		}else{ //en caso de que el checkbox no este en uso
			$(this).parent().css('textDecoration','line-through'); // y si está limpio lo raya
		}
	}

});