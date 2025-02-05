const CheckBill = () => {

    return (
        <div className="container mb-5 p-3 border rounded-2">
            <div>
                <h5>Kiểm tra lại đơn hàng</h5>
            </div>
            <hr />
            <div>
                <div  style={{ width: "1300px" }}>
                    <div className="row">
                        <div className="col-8 p-3" style={{   borderRadius: "8px" }}>
                            <div className="row align-items-center py-2 border-bottom">
                                <div className="col-3 d-flex flex-column justify-content-between">
                                    <div className="row mt-5">
                                        <div className="col-3">
                                            <img  style={{ height: '120px', width: '120px', objectFit: 'cover' }}  src="logo192.png" className="rounded float-start" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 text-center">

                                </div>

                                <div className="col-2 text-center">
                                    <span> </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckBill