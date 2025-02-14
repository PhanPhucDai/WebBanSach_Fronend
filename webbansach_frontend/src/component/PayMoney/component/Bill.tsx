import React from "react";
import { dinhDang } from "../../utils/DinhDangSo";

interface phiGiaoHanginter{
    phiGiaoHang: number;
}

const Bill  :React.FC<phiGiaoHanginter> = ({phiGiaoHang}) => {

    return (
        <div className="container bg-white border border-dark rounded-2 pe-5">
            <div className="row">
                <div className="col text-end mb-2">
                    <span className="me-2">Thành tiền:</span>
                    <span>1 <b>đ</b></span>
                </div>
            </div>
            <div className="row">
                <div className="col text-end mb-2">
                    <span className="me-2">Phí giao hàng:   <b>{dinhDang(phiGiaoHang)}đ</b></span>
                  
                </div>
            </div>
            <div className="row">
                <div className="col text-end">
                    <span className="me-2 fw-bold">Tổng tiền:</span>
                    <span className="fw-bold">1 <b>đ</b></span>
                </div>
            </div>

            <hr />

            <div className="text-end">
                <button type="button" className="btn btn-danger">Thanh toán</button>
            </div>
        </div>

    )
}
export default Bill