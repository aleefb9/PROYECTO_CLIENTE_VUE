import { Vista } from './vista.js'

export class VistaInicio extends Vista {
	/**
	 * Constructor de la clase vista inicio
	 * @param {*} controler 
	 * @param {*} divInicio 
	 */
	constructor(controller, div) {
		super(div)
		this.controlador = controller

		/**
		 * Declaración elementos html
		 */
		this.botonListar = document.getElementById('listar')
		this.botonAlta = document.getElementById('addBtn')

		this.botonListar.onclick = this.pulsarListar.bind(this)
		this.botonAlta.onclick = this.pulsarAlta.bind(this)
	}


	/**
	 * Método pulsar botón listar
	 */
	pulsarListar() {
		this.controlador.pulsarBotonListar(this)
	}

	/**
	 * Método pulsar botón alta
	*/
	pulsarAlta() {
		this.controlador.pulsarBotonAlta()
	}
}