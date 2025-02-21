const MethodTransport_Shipping = () => {
    return (
        <div className="container ">
            <div className="border rounded-2 p-4">
                <h5>Phương thức vận chuyển</h5>
                <div className="align-items-center d-flex p-3 rounded  ">
                    <input type="checkbox" id="standard-delivery" className="me-2 control form-check-input" checked/>
                    <label htmlFor="standard-delivery" className="fw-semibold text-dark">🚚 Giao hàng tiêu chuẩn</label>
                </div>

            </div>
            <div className="border rounded-2 p-4 mt-2">
                <h5>Phương thức thanh toán</h5>
                <div className="row">
                    <div className="align-items-center d-flex mb-2">
                        <label style={{cursor:"pointer"}}><input checked type="radio" name="payment" className="me-2 control form-check-input"/>Thanh toán khi nhận hàng</label>
                    </div>
                    
                    <div className="align-items-center d-flex">
                        <label style={{cursor:"pointer"}}>
                            <input type="radio" name="payment" className="me-2 control form-check-input"/>Thanh toán bằng tài khoản
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MethodTransport_Shipping;