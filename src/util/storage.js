const storage = {
	mounted() {
		const state = this.$store.state
		for (let key in state) {
			if (key != 'route') {
				if (window.localStorage[key] && !state[key]) {
					state[key] = window.localStorage[key]
				}
			}
		}
	},
	watch:{

	}
}

export default storage