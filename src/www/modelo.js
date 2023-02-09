export class Modelo{
	constructor(){
		console.log('Modelo creado')
		this.baseDatos
		this.lista = []
		this.callbacks = [] 
		this.idb()
	}

	registrar(callback){
		this.callbacks.push(callback)
	}

	avisar(){
		for(let callback of this.callbacks)
		callback()
	}
	
	/**
	 * Devuelve los registros que haya en la base de datos y luego llama a los callbacks
	 **/
	obtenerRegistro(){
		const peticion= this.baseDatos.transaction('tablaAstros', 'readonly').objectStore('tablaAstros').getAll();
		
		peticion.onsuccess = () => {
			this.lista = peticion.result;
			this.avisar()
		}
		peticion.onerror = () => {
			console.error("No se ha podido conectar")
		}
	}

	idb(){
		const bd=window.indexedDB
		if(window.indexedDB){
			const respuesta=indexedDB.open("Astros",1);
		
			respuesta.onsuccess=(event)=>{
				this.baseDatos=event.target.result
				this.obtenerRegistro()
			}
			respuesta.onerror=()=>{
				console.log('ERROR');
			}
			respuesta.onupgradeneeded=(evt)=>{
				this.baseDatos=evt.target.result
				this.baseDatos.createObjectStore('tablaAstros',{keyPath:'id', autoIncrement:true})
			}
		}	
	}

	insertar(astro){
		if (astro.file)
		{
			let reader = new FileReader()
			reader.readAsDataURL(astro.file)
			reader.onload = () =>
			{
				let obj={
					nombre: astro.nombre,
					diametro: astro.diametro,
					fecha: astro.fecha,
					descripcion: astro.descripcion,
					tipo: astro.tipo,
					file : reader.result
				}
				const almacenar=this.baseDatos.transaction('tablaAstros','readwrite').objectStore('tablaAstros').add(obj);

				almacenar.onsuccess=()=>{
					this.obtenerRegistro()
				}
		
			}
		}
		else
		{
			let obj={
				nombre: astro.nombre,
				diametro: astro.diametro,
				fecha: astro.fecha,
				descripcion: astro.descripcion,
				tipo: astro.tipo,
				file: null
			}
			const almacenar=this.baseDatos.transaction('tablaAstros','readwrite').objectStore('tablaAstros').add(obj);

			almacenar.onsuccess=()=>{
				this.obtenerRegistro()
			}
		}
	}

	// editar(id, astro){
	// 	const request = this.baseDatos.transaction('tablaAstros','readwrite').objectStore("tablaAstros").get(id)
	
	// 	request.onerror = (evento) =>{
	// 		console.log("Error al editar")
	// 	}
	// 	request.onsuccess = (evento)=>{
	// 		const astro = evento.target.result
				
	// 		if (astro.file)
	// 		{
	// 			let reader = new FileReader()
	// 			reader.readAsDataURL(file)
			
	// 			reader.onload = () =>{
			
	// 				astro.nombre=nombre,
	// 				astro.diametro=diametro,
	// 				astro.fecha=fecha,
	// 				astro.descripcion=descripcion,
	// 				astro.tipo=tipo,
	// 				astro.file= reader.result

	// 				const modificacion = this.baseDatos.transaction('tablaAstros','readwrite').objectStore("tablaAstros").put(videojuego)
	// 				this.obtenerRegistro()
	// 			}
	// 		}
	// 		else{
	// 			astro.nombre=nombre,
	// 			astro.diametro=diametro,
	// 			astro.fecha=fecha,
	// 			astro.descripcion=descripcion,
	// 			astro.tipo=tipo,
	// 			astro.file= null

	// 			const modificacion = this.baseDatos.transaction('tablaAstros','readwrite').objectStore("tablaAstros").put(videojuego)
	// 			this.obtenerRegistro()
	// 		}
   	// 	 }
	// }

	registro(callback){
		this.callbacks.push(callback)
	}

	/* Borra los datos de la tabla astros */
	borrar(astros){
		const request = this.baseDatos.transaction('tablaAstros','readwrite').objectStore("tablaAstros").delete(astros.id)

		request.onsuccess = () =>{
			this.obtenerRegistro();
		}
	}

	getDatos(){
		return this.lista
	}
}
