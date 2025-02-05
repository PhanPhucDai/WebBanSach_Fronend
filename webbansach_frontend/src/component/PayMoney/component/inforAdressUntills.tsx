const InforAddress = () => {
    return (
        <div className="container  mb-2">

            <div className="border rounded-2 p-4">
                <h5>Địa chỉ giao hàng</h5>
                <hr />
                <div className="row mt-2">
                    <label htmlFor="" className="col-md-2 col-12 fw-bold">Tên người nhận:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Tên người nhận"
                            className="form-control rounded-2 shadow-sm border border-secondary" />
                    </div>

                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Email:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Email"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Số điện thoại:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Số điện thoại"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Tỉnh/Thành Phố:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Tỉnh/Thành Phố"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Quận/Huyện:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Quận/Huyện"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Phường/Xã:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Phường/Xã"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12  col-md-2 fw-bold">Địa chỉ nhận hàng:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Địa chỉ nhận hàng"
                            className="form-control ms-2 rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default InforAddress