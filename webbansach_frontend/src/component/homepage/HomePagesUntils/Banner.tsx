import React from "react";

function Banner() {
    return (
        <div className="p-5 mb-3 bg-dark">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h3 className="display-5 fw-bold">
                        Sách là nơi để gọt rửa tâm hồn
                    </h3>
                    <p className="">
                        Marry Pop Pue
                    </p>
                    <div className="float-end">
                        <button className="btn btn-primary">Khám phá sách tại PPD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;