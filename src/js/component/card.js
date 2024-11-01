import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = ({ id, name, phone, address, email }) => {
    const { store, actions } = useContext(Context)
    return (

        <div className="d-flex justify-content-center">
            <div className="card m-2 border-danger row" style={{ width: "50%", flexDirection: "row" }}>

                <div className="col-md-5 d-flex align-items-center">
                    <img src="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png" className="img-fluid rounded-circle" alt="imagen del cliente" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <p className="card-title h3">Name:{name}</p>
                        <p className="card-text h4"><i className="fa-solid fa-envelope m-1"></i>Email: {email}</p>
                        <p className="card-text h4"><i className="fa-solid fa-phone m-1"></i>Phone: {phone}</p>
                        <p className="card-text h4"><i className="fa-solid fa-location-dot m-1"></i>Address: {address}</p>
                        <Link to={"/editContact/" + id}>
                            <button type="button" className="btn btn-primary">Edit</button>
                        </Link>
                        {/* <button onClick={() => actions.deleteContact(id)} type="button" className="btn btn-danger m-1">Eliminar</button> */}
                        <button type="button" className="btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Eliminar
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Desea Eliminar el Contacto : {name}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button onClick={() => actions.deleteContact(id)} data-bs-dismiss="modal" type="button" className="btn btn-danger ">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;