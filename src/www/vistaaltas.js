import { Vista } from './vista.js'

export class VistaAltas extends Vista {
	/**
	 * Constructor de la clase vista juego
	 * @param {*} controler 
	 * @param {*} divAltas
	 */
	constructor(controler, divAltas) {
		super(divAltas)
		this.controlador = controler

		this.nombre = divAltas.getElementsByTagName('input')[0]
		this.diametro = divAltas.getElementsByTagName('input')[1]
		this.fecha = divAltas.getElementsByTagName('input')[2]
		this.descripcion = divAltas.getElementsByTagName('textarea')[0]
		this.tipo = divAltas.getElementsByTagName('select')[0]
		this.file = divAltas.getElementsByTagName('input')[3]

		this.botonCancelar = divAltas.getElementsByTagName('button')[0]
		this.btn1 = document.getElementById('buttonAnadir')
		this.btn2 = document.getElementById('buttonVaciar')

		this.botonCancelar.onclick = this.pulsarCancelar.bind(this)
		this.btn1.onclick = this.pulsar1.bind(this)
		this.btn2.onclick = this.pulsarVaciar.bind(this)
	}

	pulsarCancelar() {
		this.controlador.pulsarBotonListar()
	}

	pulsarVaciar(){
		this.nombre.value = null
		this.diametro.value = ""
		this.descripcion.value = ""
		this.fecha.value = ""
		this.tipo.value = ""
		this.file.value = null
	}

	pulsar1() {

		this.controlador.aceptarAlta(this.nombre.value, this.diametro.value, this.descripcion.value, this.fecha.value, this.tipo.value , this.file.files[0])

		this.nombre.value = null
		this.diametro.value = ""
		this.descripcion.value = ""
		this.fecha.value = ""
		this.tipo.value = ""
		this.file.value = null
	}

}
