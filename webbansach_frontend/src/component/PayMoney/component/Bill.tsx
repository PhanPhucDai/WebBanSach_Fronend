const  Bill = () => {

    return (
        <div className="container bg-white border rounded-2">
            <div className="row d-flex flex-column align-items-end">
                <div className="m-3">
                    <div className="row">
                        <div className="col-2">Thành tiền:</div>
                        <div className="col-10">1 <b>đ</b></div>
                    </div>
                    <div className="row">
                        <div className="col-2">Phí giao hàng:</div>
                        <div className="col-10">1 <b>đ</b></div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tổng tiền:</div>
                        <div className="col-10">1 <b>đ</b></div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="col-4 m-2">
                <button type="button" className="btn-danger btn">Thanh toán</button>
            </div>
        </div>
    )
}
export default Bill