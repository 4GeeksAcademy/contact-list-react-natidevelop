import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Card = ({ id, name, phone, address, email }) => {
    const { store, actions } = useContext(Context)
    return (

        <div className="">
            <div className="card m-2 border-danger row" style={{ width: "50%" ,flexDirection:"row"}}>

                <div className="col-md-5 d-flex align-items-center">
                    <img src="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png" className="img-fluid rounded-circle" alt="imagen del cliente" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <p className="card-title h3">Name:{name}</p>
                        <p className="card-text h4"><i class="fa-solid fa-envelope m-1"></i>Email: {email}</p>
                        <p className="card-text h4"><i class="fa-solid fa-phone m-1"></i>Phone: {phone}</p>
                        <p className="card-text h4"><i class="fa-solid fa-location-dot m-1"></i>Address: {address}</p>
                        <Link to={"/editContact/" + id}>
                            <button type="button" class="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => actions.deleteContact(id)} type="button" class="btn btn-danger m-1">Eliminar</button>
                    </div>
                </div>

            </div>

        </div>
    )
};
export default Card;