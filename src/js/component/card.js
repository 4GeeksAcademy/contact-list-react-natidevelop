import React from "react";


const Card = ({ id, name, phone, address, email }) => {

    return (
        <div className="text-center mt-5">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">name:{name}</h5>
                            <p className="card-text">email: {email}</p>
                            <p className="card-text">phone: {phone}</p>
                            <p className="card-text">address: {address}</p>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Card;