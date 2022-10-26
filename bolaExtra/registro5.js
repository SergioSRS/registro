window.onload = iniciar;

//Esto es un array bidimensional
const provincias = [
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
function iniciar(){
	//Buscamos el formulario del html
	const formulario=document.getElementById('formulario');
	//IndexedDB desciende de la clase Window, si no lo instanciamos así dará error si la variable tiene el mismo nombre
	//USAR SIEMPRE WINDOW, evitamos posibles errores
	const baseDatos=window.indexedDB
	
	
	
	//Preguntamos si ya existe esta base de datos
	if(baseDatos){
		//Variable que en caso de existencia trabajará la base de datos
		const respuesta=indexedDB.open("registro",1);//Metodo que permite acceder a la base de datos, va a recibir dos parametros, nombre y versión(siempre numeros enteros),
		//Metodo para el caso en el que la respuesta sea OK
		respuesta.onsuccess=()=>{
			
			db=respuesta.result
			console.log('ABIERTA',db);
			contarcosa();
		
			
		}
		//Metodo para el caso en el la base de datos necesite actualización
		//También la crea en caso de que no exista, es la primera que observa, una vez creada, la abre
		//Tambien es aquí donde se va a usar el registro en la bbdd
		respuesta.onupgradeneeded=()=>{
			db=respuesta.result
			console.log('CREADA',db);
			//Creamos un objeto que sera nuestro almacén dentro de la bbdd
			const objAlmacen=db.createObjectStore('registro',{
				autoIncrement:true
			});//NOMBRE DEL ALMACÉN
		}
		//Metodo para el caso en el que la base de datos de error
		respuesta.onerror=()=>{
			db=respuesta.result
			console.log('CREADA',db);
		}
		const anhadirDatos=(data)=>{
			//Las bbdd indexadas funcionan con transacciones, por ello
			
			//Creamos un objeto tipo transacción en el que recibira el almacen creado
			const transaccion=db.transaction(['registro'],'readwrite');//Almacen con el que trabajamos y modo de trabajo(leer y escribir)
			//Abrimos con el metodo objectStore el almacen y lo asociamos a una variable
			const almacen=transaccion.objectStore('registro');
			const peticion=almacen.add(data);
		}
		//Evento para ver que todo fue correctamente al enviar
		formulario.addEventListener('submit',(e)=>{
			e.preventDefault();
			//Objeto que añadiremos a la bbdd
			const data={
				email:e.target.email.value,
				pswd:e.target.password.value
			}
			console.log(data);
			
			//Guardamos los datos despues de la funcion anhadirDatos();
			anhadirDatos(data);
		})
	}
	/*
	Para dragear el elemento
*/
// select the item element
const item = document.querySelectorAll('.item');

// attach the dragstart event handler
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
	function contarcosa(){
		const transaction= db.transaction('registro','readonly');
		const objetoStore=transaction.objectStore('registro');
		const contador=objetoStore.count();
		console.log("HOLAAAAAAAAAAAA22222222222222",contador);
		contador.onsuccess=function(){
			window.alert('Usuarios registrados: '+contador.result)
		};
	}
function pulsar()
	{
		document.getElementById("formulario").style.visibility = "visible";
	}
function aceptar()
	{
		document.getElementById("formulario").style.visibility = "hidden";
		alert("El usuario ha sido registrado");
	}
		
function cancelar()
	{
		document.getElementsByTagName('input')[0].value="";
		document.getElementsByTagName('input')[1].value="";
	}
function seleccionar()
{	//Con esto estoy sacando el valor que nos introduce el usuario
	let seleccion = document.getElementsByTagName('select')[0][document.getElementsByTagName('select')[0].selectedIndex].value
	console.log(seleccion)
	let num_provincias= provincias[seleccion].length;
	console.log(num_provincias)
	document.getElementsByTagName('select')[1].length = num_provincias;

	for (let i=0;i<num_provincias;i++)
	{
		document.getElementsByTagName('select')[1][i].text=provincias[seleccion][i];
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


// handle the dragstart

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

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
