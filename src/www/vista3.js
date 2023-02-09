export function Vista3(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 3',
				clase: 'inactivo',
				datos:[]
			}
		},
		template: `<div :class=clase>
					<div id="divListar">
						<div v-for="astros in datos">
							<h2>{{ astros.tipo }}</h2>
							<img src="{{ astros.file }}">
							<p>{{ astros.nombre }}</p>
							<p>{{ astros.diametro }}</p>
							<span v-on:click="pulsarBorrar(astros)">🗑</span>
							<span v-on:click="pulsarModificar(astros)">✏</span>
						</div>
						<div>
							<button id="botonAnadir" @click=pulsarAnadir>+</button>
						</div>
					</div>
				</div>`
		,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
            cogerDatos(astro){
				this.astro = astro
			},
			pulsarAnadir(evento){
				this.controlador.cambiarAVista2()
			},
			pulsarModificar(astros){
				this.controlador.cambiarAVista4()
			},
			pulsarBorrar(astros){
				// console.log(astros.id)
				this.controlador.eliminarAstro(astros)
			}
		}
	})
}


