import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-success mb-3">
			<p className="d-flex text-center text-light h2 m-2">Mi Agenda<i className=" m-1 fa-solid fa-address-book" /></p>
			<Link to="/">
			</Link>
			<div className="ml-auto">
				<Link to="/createContact">
					<button className="btn btn-light m-2"><i className="fa-solid fa-pen-to-square m-1"></i>Crear Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
