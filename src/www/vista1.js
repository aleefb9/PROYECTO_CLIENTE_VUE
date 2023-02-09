export function Vista1(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 1',
				clase: 'inactivo'
			}
		},
		template: `	<div id="divInicio" :class=clase>
						<div id="titulo">
							ASTROPEDIA<br /><span>Conéctate al universo</span><br />
							<button id="listar" class="botones" @click=pulsarListar>NUESTROS ASTROS</button>
							<button class="botones" id="addBtn" @click=pulsarAnadir>AÑADIR NUEVOS</button>
						</div>
						<div class="contenedor">
							<ul class="estrellas">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>

							<div class="fugaz">
								<div class="estrella3"></div>
								<div class="estrella5"></div>
								<div class="estrella3"></div>
								<div class="estrella5"></div>
							</div>
						</div>
					</div>
				'`,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			pulsarIncio(evento){
				console.log('Hola')
				this.controlador.cambiarAVista1()
			},
			pulsarListar(evento){
				this.controlador.cambiarAVista3()
			},
			pulsarAnadir(evento){
				this.controlador.cambiarAVista2()
			}
		}
	})
}
