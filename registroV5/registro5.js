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
