import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.obtenerContactos()

	}, [])
	return (
		<div className="text-center mt-2 d-flex justify-content-center">
			{store.contacts.map((item) => (
				<Card 
				key={item.id}
				id={item.id}
				name={item.name}
				phone={item.phone}
				email={item.email}
				address={item.address}
				/>
			))}
		</div>
	)
};
