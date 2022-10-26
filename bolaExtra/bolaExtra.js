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
	
	const formulario=document.getElementById('formulario');
	
	const baseDatos=window.indexedDB
	
	if(baseDatos){
		
		const respuesta=indexedDB.open("registro",1);
		respuesta.onsuccess=()=>{
			
			db=respuesta.result
		
			contar();	
		}	
		respuesta.onupgradeneeded=()=>{
			db=respuesta.result
		
			
			const objAlmacen=db.createObjectStore('registro',{
				autoIncrement:true
			});
		}
		
		respuesta.onerror=()=>{
			db=respuesta.result
		}
		const addDatos=(data)=>{
		
			const transaccion=db.transaction(['registro'],'readwrite');
			
			const almacen=transaccion.objectStore('registro');
			const peticion=almacen.add(data);
		}
	
		formulario.addEventListener('submit',(e)=>{
			e.preventDefault();
		
			const data={
				email:e.target.email.value,
				pswd:e.target.password.value
			}
			
			
			addDatos(data);
		})
	}
/*
	Para dragear el elemento
*/
// seleccionamos el elemento que tenga la clase item
const item = document.querySelectorAll('.item');

// le añadimos a cada elemento(cogeremos varios ya que tenemos 4 imagenes asociadas) el evento dragstart que dara comienzo al drag
for (let i=0 ;i<item.length;i++)
{
	item[i].addEventListener('dragstart', dragStart);
}

/*
	Para soltar el elemento
*/
const boxes = document.querySelectorAll('.bordes');

boxes.forEach(bordes => {
    bordes.addEventListener('dragenter', dragEnter)
    bordes.addEventListener('dragover', dragOver);
    bordes.addEventListener('dragleave', dragLeave);
    bordes.addEventListener('drop', drop);
});



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
	document.getElementsByTagName('img')[5].style.display = "none";
	
	let imagen2xd = document.getElementsByTagName('img')[5];
		imagen2xd.addEventListener('mouseover', cambiarFoto)
		imagen2xd.addEventListener('mouseout', cambiarFoto2)
		
	}
	function contar(){
		const transaction= db.transaction('registro','readonly');
		const objetoStore=transaction.objectStore('registro');
		const contador=objetoStore.count();
		contador.onsuccess=function(){
			window.alert('Usuarios registrados: '+contador.result)
		};
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
	console.log(seleccion)
	let num_provincias= PROVINCIAS[seleccion].length;
	console.log(num_provincias)
	document.getElementsByTagName('select')[1].length = num_provincias;

	for (let i=0;i<num_provincias;i++)
	{
		document.getElementsByTagName('select')[1][i].text=PROVINCIAS[seleccion][i];
	}
	
	document.getElementsByTagName('select')[1].style.display = "inline";
}
function validarFecha(){
	let fecha= document.getElementsByTagName('input')[2].value

	let fechaNacimiento = new Date(fecha)
	
	let fechaActual = new Date()
	console.log(fechaNacimiento)
	console.log(fechaActual)
	console.log(fechaActual-fechaNacimiento)
	if (fechaActual-fechaNacimiento < 315603596089)
	{
		document.getElementsByTagName('img')[5].style.display = "inline";
	}
	else
	{
		document.getElementsByTagName('img')[5].style.display = "none";
	}
}
function cambiarFoto()
{
	let phineasyfer = "imagenes/fineasfer.jpg"
	document.getElementsByTagName('img')[0].setAttribute('src',phineasyfer);
}
function cambiarFoto2()
{
	let doctor = "imagenes/imgen.webp"
	document.getElementsByTagName('img')[0].setAttribute('src',doctor);
}



function dragStart(e) {
   console.log('drag starts...');
     e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

   
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    
    e.target.appendChild(draggable);

   
    draggable.classList.remove('hide');
}
