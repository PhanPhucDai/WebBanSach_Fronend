import React, { useEffect, useState } from "react";
import DanhGiaModel from "../../../models/DanhGiaModel";
import { layDanhGiaMaSach } from "../../../api/DanhGiaSanPhamAPi";
import { error } from "console";
import { rederRating } from "../../utils/SaoXepHang";
interface DanhGiaSanPham{
    maSach: number;
}
const DanhGiaSanPham: React.FC<DanhGiaSanPham> = (sach) => {
    const maSach: number=  sach.maSach;
    const [danhSachDanhGia, setDanhSachDanhGia]= useState<DanhGiaModel[]>([])
    const [dangTai, setDangTai] = useState(true);
    const [baoLoi,setBaoLoi] = useState("");

    useEffect(()=>{
        layDanhGiaMaSach(maSach).then(
            danhSachDanhGia=>{
                setDanhSachDanhGia(danhSachDanhGia)
                setDangTai(false)
            }
        ).catch(
            error=>{
                setDangTai(false)
                setBaoLoi("Lỗi lấy đánh giá"+error);
            }
        )
    },[]
)

 

    return (
        <div className="row">
            <h5>Đánh giá sản phẩm: </h5>
            {
                (
                    danhSachDanhGia.map((danhGia, index) => (
                        <div className="row">
                            <div className="col-4">
                                <h5>{rederRating(danhGia.diemXepHang?danhGia.diemXepHang:0)}</h5>
                            </div>
                            <div className="col-8">
                                <h5>{danhGia.nhanXet}</h5>
                            </div>
                        </div>
                    )
                ))
            }
        </div>
    )
}

export default  DanhGiaSanPham