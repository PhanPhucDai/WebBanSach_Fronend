import React, { useEffect, useState } from "react";
import SachModels from "../../../models/SachModels";
import { lay1HinhAnhCua1Sach, layToanBoHinhAnh } from "../../../api/HinhAnh";
import HinhAnhModels from "../../../models/HinhAnhModel";

interface CarouselItemInterface{
    sach: SachModels;
}


const CarouselItem: React.FC<CarouselItemInterface> = ({ sach }) => {
    const maSach: number= sach.maSach;
    const [danhSachanh,setDanhSachAnh] = useState<HinhAnhModels[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null)

    useEffect(()=>{
        lay1HinhAnhCua1Sach(maSach).then(
            hinhAnhData =>{
                setDanhSachAnh(hinhAnhData);
                setDangTaiDuLieu(false)
            }
        ).catch(
            error =>{
                setDangTaiDuLieu(false)
                setBaoLoi(error.massage)
            }
        )
    })

    
    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        )
    }

    if (baoLoi) {
        return (
            <div>
                <h1>Đang bị lỗi: ${baoLoi}</h1>
            </div>
        )
    }
    let hinhAnh=null;
    if(danhSachanh[0] && danhSachanh[0].duLieuAnh){
        hinhAnh=danhSachanh[0].duLieuAnh
    }
     return (
         <div>
            <div className="row align-items-center">
                <div className="col-6">
                    <img src={`${hinhAnh}`} className="d-block " alt="..."  style={{ maxWidth: '200px', height: 'auto' }}/>
                   
                </div>
                <div className="col-6">
                     <h5>{sach.tenSach}</h5>
                    <p>{sach.moTa}</p>
                </div>
            </div>
         </div>
    );
    
}

export default CarouselItem;