import { CreateContact } from "../views/createContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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
			createContact: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/natali/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact)

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

			editContact: async (contact, id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/natali/contacts/" + id, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact)

					})
					if (response.status == 200) {
						getActions().obtenerContactos()
						return true
					}


				} catch (error) {
					console.log(error)
					return false

				}

			},

			deleteContact: async (id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/natali/contacts/" + id, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" },


					})
					if (response.status == 204) {
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
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.log(error)
					return false

				}

			},

		}
	};
};

export default getState;
