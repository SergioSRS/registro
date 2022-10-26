window.onload = iniciar;
/**
 * Configuracion inicial de la pagina
 */
function iniciar(){
	
	let imagenxd = document.getElementsByTagName('img')[0];
		imagenxd.addEventListener('click',pulsar);
	
	let aceptarxd = document.getElementsByTagName('button')[0];
		aceptarxd.addEventListener('click',aceptar);
	
	let cancelarxd = document.getElementsByTagName('button')[1];
		cancelarxd.addEventListener('click',cancelar);
		
		document.getElementById("formulario").style.visibility = "hidden";
		
	}
/**
 * Funcion pulsar para que al hacer click en la imagen sea visible el formulario
 */
function pulsar()
	{
		document.getElementById("formulario").style.visibility = "visible";
	}
/**
 * Funcion aceptar para que al hacer click en el boton aceptar sea invisible el formulario de nuevo y te mande una alerta de que el usuario se ha registrado
 */
function aceptar()
	{
		document.getElementById("formulario").style.visibility = "hidden";
		alert("El usuario ha sido registrado");
	}
/**
 * Funcion cancelar para borrar los campos de email y nombre
 */
function cancelar()
	{
		document.getElementsByTagName('input')[0].value="";
		document.getElementsByTagName('input')[1].value="";
	}

