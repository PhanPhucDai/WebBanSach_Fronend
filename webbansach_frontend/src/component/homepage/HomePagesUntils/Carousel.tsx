import React, { useEffect, useState } from "react";
import SachModels from "../../../models/SachModels";
import { lay3QuyenSachMoi } from "../../../api/SachAPI";
import CarouselItem from "./carouseItem";
 



const Carousel: React.FC = () => {
    const [layQuyenSachMoi, setLayQuyenSachMoi] = useState<SachModels[]>([]);
    const [dangLay, setDangLay] = useState(true);
    const [baoLoi, setbaoLoi] = useState(null);

    useEffect(() => {
        lay3QuyenSachMoi()
            .then(
                kq => {
                    setLayQuyenSachMoi(kq.ketQua);
                    setDangLay(false);
                }
            )
            .catch(
                baoLoi => {
                    setbaoLoi(baoLoi);
                    setDangLay(false);
                }
            )
    }, [])

    if (dangLay) {
        return (
            <div>
                <h1>Đang lấy dữ liệu</h1>
            </div>
        )

    }
    if (baoLoi) {
        return (
            <div>
                <h1>Báo Lôi: {baoLoi}</h1>
            </div>
        )
    }

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 h-25"> 
                    <CarouselItem key={0} sach={layQuyenSachMoi[0]}/>
                </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 h-25">
                    <CarouselItem key={1} sach={layQuyenSachMoi[1]} />
                </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4 h-25">
                    <CarouselItem key={2} sach={layQuyenSachMoi[2]} />
                </div>
            </div>
        </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>

        
     );
}

 



export default Carousel