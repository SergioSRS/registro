window.onload = iniciar;
//Esto es un array bidimensional de las provincias de cada comunidad
const PROVINCIAS = [
	["Selecciona una comunidad autónoma"],
	["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"],
	["Huesca", "Teruel", "Zaragoza"],
	["Asturias"],
	["Balears, Illes"],
	["Palmas, Las", "Santa Cruz de Tenerife"],
	["Cantabria"],
	["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"],
	["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"],
	["Barcelona", "Girona", "Lleida", "Tarragona"],
	["Alicante / Alacant", "Castellón / Castelló", "Valencia / València"],
	["Badajoz", "Cáceres"],
	["Coruña, A", "Lugo", "Ourense", "Pontevedra"],
	["Madrid"],
	["Murcia"],
	["Navarra"],
	["Araba/Álava", "Gipuzkoa", "Bizkaia"],
	["Rioja, La"],
	["Ceuta"],
	["Melilla"]
]
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

	let seleccionarxd = document.getElementsByTagName('select')[0];
		seleccionarxd.addEventListener('change',seleccionar)
	
	let fechaxd = document.getElementsByTagName('input')[2];
		fechaxd.addEventListener('change',validarFecha)

	document.getElementsByTagName('select')[1].style.display = "none";
	document.getElementById("formulario").style.visibility = "hidden";
	document.getElementsByTagName('img')[1].style.display = "none";
	
	let imagen2xd = document.getElementsByTagName('img')[1];
		imagen2xd.addEventListener('mouseover', cambiarFoto)
		imagen2xd.addEventListener('mouseout', cambiarFoto2)
		
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
/**
 * Funcion seleccionar que al cambiar el valor del select se genera un segundo select con la seleccion previamente realizada
 */
function seleccionar()
{	//Con esto estoy sacando el valor que nos introduce el usuario
	let seleccion = document.getElementsByTagName('select')[0][document.getElementsByTagName('select')[0].selectedIndex].value
	
	let num_provincias= PROVINCIAS[seleccion].length;
	
	document.getElementsByTagName('select')[1].length = num_provincias;

	for (let i=0;i<num_provincias;i++)
	{
		document.getElementsByTagName('select')[1][i].text=PROVINCIAS[seleccion][i];
	}
	
	document.getElementsByTagName('select')[1].style.display = "inline";
}
/**
 * Funcion para verificar que el usuario tenga mas de 10 años, si no los tiene aparecera una imagen de perry el ornitorrinco
 */
function validarFecha(){
	let fecha= document.getElementsByTagName('input')[2].value

	let fechaNacimiento = new Date(fecha)
	
	let fechaActual = new Date()
	//315603596089 ms = 10 años
	if (fechaActual-fechaNacimiento < 315603596089)
	{
		document.getElementsByTagName('img')[1].style.display = "inline";
	}
	else
	{
		document.getElementsByTagName('img')[1].style.display = "none";
	}
}
/**
 * Funcion para que al pasar el raton por la imagen de perry se cambie la del doctor a otra de phineas y fer
 */
function cambiarFoto()
{
	let phineasyfer = "imagenes/fineasfer.jpg"
	document.getElementsByTagName('img')[0].setAttribute('src',phineasyfer);
}
/**
 * Funcion para que al dejar de situarse encima de la foto de perry vuelva la foto del doctor
 */
function cambiarFoto2()
{
	let doctor = "imagenes/imgen.webp"
	document.getElementsByTagName('img')[0].setAttribute('src',doctor);
}


	
	

