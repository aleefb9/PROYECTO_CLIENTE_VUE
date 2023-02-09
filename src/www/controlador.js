import { Modelo } from './modelo.js'
import { Menu } from './menu.js'
import { Vista1 } from './vista1.js'
import { Vista2 } from './vista2.js'
import { Vista3 } from './vista3.js'
import { Vista4 } from './vista4.js'

class Controlador {
	constructor(){
		window.onload = this.iniciar.bind(this)
	}

	iniciar(){
		this.modelo = new Modelo(this)
		this.menu = new Menu(this).mount('#nav')
		this.vista1 = new Vista1(this).mount('#vista1')
		this.vista2 = new Vista2(this).mount('#vista2')
		this.vista3 = new Vista3(this).mount('#vista3')
		this.vista4 = new Vista4(this).mount('#vista4')

		this.cambiarAVista1()
		this.registro()
	}

	registro(){
		this.modelo.registro(this.mandarDatos.bind(this))
	}

	mandarDatos(){
		this.vista3.datos = this.modelo.getDatos()
	}

	cambiarAVista1(){
		console.log('cambiarAVista1')
		this.vista1.mostrar(true)
		this.vista3.mostrar(false)
		this.vista2.mostrar(false)
		this.vista4.mostrar(false)
	}
	
	cambiarAVista2(){
		console.log('cambiarAVista2')
		this.vista1.mostrar(false)
		this.vista2.mostrar(true)
		this.vista3.mostrar(false)
		this.vista4.mostrar(false)
	}

	cambiarAVista3(){
		console.log('cambiarAVista3')
		this.vista1.mostrar(false)
		this.vista2.mostrar(false)
		this.vista3.mostrar(true)
		this.vista4.mostrar(false)

		let astro = this.modelo.getDatos()
		this.vista3.cogerDatos(astro)
	}

	cambiarAVista4(){
		console.log('cambiarAVista4')
		this.vista1.mostrar(false)
		this.vista2.mostrar(false)
		this.vista3.mostrar(false)
		this.vista4.mostrar(true)
	}

	aceptarAlta(astro){
       	this.modelo.insertar(astro)      
    }

	eliminarAstro(astros){
		this.modelo.borrar(astros)
	}

	// modificarAstro(id, astro){
	// 	console.log(id)
	// 	this.modelo.editar(id, astro)
	// }

	getModelo(){
		return this.modelo
	}
}
new Controlador()
