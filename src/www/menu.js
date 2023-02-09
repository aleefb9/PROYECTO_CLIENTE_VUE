export function Menu(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador
			}
		}
	})
}