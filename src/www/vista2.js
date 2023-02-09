
export function Vista2(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 2',
				clase: 'inactivo',
				astro: {
					nombre: null,
					diametro: null,
					fecha: null,
					file: null,
					descripcion: null,
					tipo: null
				}	
			}
		},
		template: `<div id="formularioAnadir" :class=clase>
					<button id="botonCancelar" class="botonCancelar" @click=pulsarListar>x</button><br /><br />
					<label>Nombre:</label><br />
					<input type="text" v-model=astro.nombre>
					<br /><br />

					<label>Diámetro:</label><br />
					<input type="text" v-model=astro.diametro>
					<br /><br />

					<label>Fecha de descubrimiento:</label><br />
					<input type="date" v-model=astro.fecha>
					<br /><br />

					<label>Imagen:</label><br />
					<input type="file" v-on:change=enviarImagen>
					<br /><br />

					<label>Descripción:</label><br />
					<textarea rows="5" cols="30" v-model=astro.descripcion></textarea>
					<br /><br />

					<label>Tipo:</label><br />
					<select v-model=astro.tipo>
						<option>Planeta</option>
						<option>Estrella</option>
						<option>Agujero negro</option>
						<option>Asteroide</option>
						<option>Constelación</option>
						<option>Galaxia</option>
						<option>Otros</option>
					</select>
					<br /><br />
					<br /><br />
					<button id="buttonVaciar" @click="vaciar">CANCELAR</button>
					<button id="buttonAnadir" @click="insertar">AÑADIR</button>
				</div>`
		,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			insertar(){
				console.log('Insertar ' + this.astro.nombre)
				this.controlador.aceptarAlta(this.astro)
				this.controlador.cambiarAVista3()

				this.astro.nombre = null
				this.astro.diametro = ""
				this.astro.descripcion = ""
				this.astro.fecha = ""
				this.astro.tipo = ""
				this.astro.file = null
			},
			vaciar(){
				this.astro.nombre = null
				this.astro.diametro = ""
				this.astro.descripcion = ""
				this.astro.fecha = ""
				this.astro.tipo = ""
				this.astro.file = null
			},
			pulsarListar(evento){
				this.controlador.cambiarAVista3()
			}
			// enviarImagen(e){
			// 	this.astro.file=e.target.files || e.dataTransfer.files
			// }
		}
	})
}