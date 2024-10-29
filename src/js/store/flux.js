const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/natali", {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
					if (response.status == 201) {
						getActions().obtenerContactos()
						return true
					}


				} catch (error) {
					console.log(error)
					return false

				}

			},


			obtenerContactos: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/natali/contacts")
					if (response.status == 404) {
						getActions().crearAgenda()
						return true

					}
					const data = await response.json()
					console.log(data.contacts)
					setStore({contacts:data.contacts})
				} catch (error) {
					console.log(error)
					return false

				}

			},

		}
	};
};

export default getState;
