import React, { useEffect, useState } from "react";
import { layToanBoHinhAnh } from "../../../api/HinhAnh";
import HinhAnhModels from "../../../models/HinhAnhModel";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface HinhAnhSanPham {
    maSach: number;
}

const HinhAnhSanPham: React.FC<HinhAnhSanPham> = (propts) => {

    const [hinhAnhs, setHinhAnhs] = useState<HinhAnhModels[]>([]);
     const [dangTai, setDangTai] = useState(true)
    const [baoLoi, setBaoLoi] = useState(null)

    const maSach: number = propts.maSach;


    useEffect(() => {
        layToanBoHinhAnh(maSach).then(
            kq => {
                setHinhAnhs(kq);
                setDangTai(false)
            }
        ).catch(
            error => {
                setBaoLoi(error.massage)
                setDangTai(false)
            })
    })
    if (dangTai) {
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
    return (
        <div className="row">
            <div className="col-12">
                <Carousel showArrows={true}>
                    {
                        hinhAnhs.map((hinhAnh, index) => {
                            return (<div key={index}>
                                    <img src={hinhAnh.duLieuAnh} alt={`${hinhAnh.tenHinhAnh}`}  style={{maxWidth: "250px"}}  />
                                </div>
                            );
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
    
}

export default HinhAnhSanPham