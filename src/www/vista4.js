export function Vista4(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 4',
				clase: 'inactivo',
                astro: {
					nombre: null,
					diametro: null,
					fecha: null,
					file: [],
					descripcion: null,
					tipo: null
				}	
			}
		},
		template: `<div id="formularioModificar" :class=clase>
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
					<input type="file" v-model=astro.file>
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
					<button id="buttonModificar">MODIFICAR</button>
				</div>`
		,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
            pulsarListar(evento){
				this.controlador.cambiarAVista3()
			},
        //     modificar(){
		// 		this.controlador.modificarAstro(this.astro)
		// 		// this.controlador.cambiarAVista3()
		// 	},
        //     mostrarDatos(astro){
        //         this.datos.nombre=astro.nombre
		// 		this.datos.diametro=astro.diametro
		// 		this.datos.fecha=astro.fecha
		// 		this.datos.file=astro.file
		// 		this.datos.descripcion=astro.descripcion
		// 		this.datos.tipo=astro.tipo
        //    }
		}
	})
}