import React, { useEffect, useState } from "react";
import SachModels from "../../../models/SachModels";
import { layToanBoHinhAnh } from "../../../api/HinhAnh";
import HinhAnhModels from "../../../models/HinhAnhModel";
import { Link } from "react-router-dom";
import { rederRating } from "../../utils/SaoXepHang";
import { dinhDang } from "../../utils/DinhDangSo";
import { jwtDecode } from "jwt-decode";
import GioHang from "../../../models/GioHang";
import ThemGioHang from "../../../models/ThemGioHang";

interface SachPropsInterface {
    sach: SachModels;
    themSanPhamGioHang: (Sach: ThemGioHang) => Promise<void>;
}

interface token {
    idUser: number;
}

 

const SachProps: React.FC<SachPropsInterface> = ({ sach, themSanPhamGioHang }) => {
    const maSach: number = sach.maSach;
    const [danhSachanh, setDanhSachAnh] = useState<HinhAnhModels[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState(true);
    const [baoLoi, setBaoLoi] = useState(null)

    useEffect(() => {
        layToanBoHinhAnh(maSach).then(
            hinhAnhData => {
                setDanhSachAnh(hinhAnhData);
                setDangTaiDuLieu(false)
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false)
                setBaoLoi(error.massage)
            }
        )
    }
    )

    const themSanPham = async () => {
        let idNguoiDung = 0;
        let newGioHang: ThemGioHang;
        let tokenNguoiDung = localStorage.getItem('token');
        if (tokenNguoiDung) {
            const jwtDecodeToken = jwtDecode<token>(tokenNguoiDung);
            idNguoiDung = jwtDecodeToken.idUser;
        }
        if (idNguoiDung) {
            const reponse = await fetch(`http://localhost:8080/nguoi-dung/${idNguoiDung}/GioHang`)
            const reponseJson = await reponse.json();
            console.log("reponseJson", reponse);

            const idGioHang = reponseJson.maGioHang;
            newGioHang = ({ soLuong: 1, maSach: maSach, idGioHang: idGioHang });
             
            themSanPhamGioHang(newGioHang);
        }

    }


    if (dangTaiDuLieu) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
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
    let hinhAnh = null;
    if (danhSachanh[0] && danhSachanh[0].duLieuAnh) {
        hinhAnh = danhSachanh[0].duLieuAnh
    }
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                {/* Ảnh sách */}
                <Link to={`/sach/${sach.maSach}`}>
                    <img src={`${hinhAnh}`} className="card-img-top" alt={sach.tenSach} style={{ height: '280px' }} />
                </Link>
                <div className="card-body">
                    <Link to={`/sach/${sach.maSach}`} className="text-decoration-none"  > <h5 className="card-title">{sach.tenSach}</h5> </Link>
                    <p className="card-text">{sach.moTa}</p>
                    <div className="price"> <span className="origin-price"><strong>Giá bán</strong> <del>{dinhDang(sach.giaNiemYet)}</del> </span>
                        <span className="discounted-price">
                            {dinhDang(sach.giaBan)}
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            {rederRating(sach.trungBinhXepHang ? sach.trungBinhXepHang : 0)}
                        </div>
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block me-1">  <i className="fas fa-heart"></i></a>
                            <button title="Cart" onClick={themSanPham} type="button" className="btn btn-danger btn-block"> <i className="fas fa-shopping-cart"></i>  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SachProps