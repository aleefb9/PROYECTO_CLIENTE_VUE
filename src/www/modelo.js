export class Modelo{
	constructor(){
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
	/** 
	 * Inserta un registro en la base de datos
	*/
	insertar(nombre, diametro, descripcion, fecha, tipo, file){

		if (file)
		{
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () =>
			{
				let obj={
					nombre: nombre,
					diametro: diametro,
					descripcion: descripcion,
					fecha: fecha,
					tipo: tipo, 
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
				nombre: nombre,
				diametro: diametro,
				descripcion: descripcion,
				fecha: fecha,
				tipo: tipo, 
				file : null
			}
			const almacenar=this.baseDatos.transaction('tablaAstros','readwrite').objectStore('tablaAstros').add(obj);

			almacenar.onsuccess=()=>{
				this.obtenerRegistro()
			}
			
		}
	

	}
	/**
	 * Conecta a la base de datos
	 */
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
	/* Borra los datos de la tabla astros */
	borrar(id){
		console.log(id)
		const request = this.baseDatos.transaction('tablaAstros','readwrite').objectStore("tablaAstros").delete(id)

		request.onsuccess = () =>{
			this.obtenerRegistro();
		}
	}

	/**
	 * Retorna la lista de datos del modelo
	 * @returns this.lista
	 */
	getDatos(){
		return this.lista
	}
	
}