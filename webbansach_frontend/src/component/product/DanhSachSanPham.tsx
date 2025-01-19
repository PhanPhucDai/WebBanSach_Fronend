import React, { useState, useEffect } from "react";

import SachModels from "../../models/SachModels";
import SachProps from "./component/SachProps";
import { layToanBoSach, timKiemSach } from "../../api/SachAPI";
import { PhanTrang } from "../utils/PhanTran";
import GioHang from "../../models/GioHang";
import ThemGioHang from "../../models/ThemGioHang";


interface DanhSachSanPhamProps {
    tuKhoaTimKiem: string;
    maTheLoai: number;
    themSanPhamGioHang: (Sach: ThemGioHang) => Promise<void>
 
}

 
function DanhSachSanPham({ tuKhoaTimKiem, maTheLoai, themSanPhamGioHang }: DanhSachSanPhamProps) {

    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModels[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState<string | null>(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [tenTheLoai, setTenTheLoai] = useState('');
    useEffect(() => {
        if (maTheLoai !== 0) {
            fetch(`http://localhost:8080/the-loai/${maTheLoai}`)
                .then(
                    (res) => {
                        if (!res.ok) {
                            throw new Error("Lỗi kết nối hoặc server phản hồi không hợp lệ");

                        }
                        console.error("Cấu trúc phản hồi không như mong đợi:", res);
                        return res.json()
                    }
                )
                .then((result) => {
                    // Kiểm tra nếu `result._embedded` tồn tại
                    if (result.tenTheLoai) {
                        console.error("Cấu trúc phản hồi không như mong đợi:", result);
                        setTenTheLoai("Thể loại: "+result.tenTheLoai);
                    } else {
                        console.error("Cấu trúc phản hồi không như mong đợi:", result);
                    }
                })
                .catch((error) => {
                    console.error("Có lỗi xảy ra khi gọi API:", error);
                });
        }
        if (tuKhoaTimKiem === '' && maTheLoai === 0) {


            layToanBoSach(trangHienTai - 1).then(
                kq => {
                    setTenTheLoai('')
                    setDanhSachQuyenSach(kq.ketQua);
                    setTongSoTrang(kq.tongSoSach);
                    setDangTaiDuLieu(false);
                }
            ).catch(
                error => {
                    setBaoLoi(error.baoLoi)
                }
            );
        } else {
            timKiemSach(tuKhoaTimKiem, maTheLoai)
                .then(
                    kq => {
                        setDanhSachQuyenSach(kq.ketQua)
                        setTongSoTrang(kq.tongSoSach);
                        setDangTaiDuLieu(false);
                    }
                )
                .catch(error => {
                    setBaoLoi(error.baoLoi)
                })
        }
    }, [trangHienTai, tuKhoaTimKiem, maTheLoai])   //chỉ gọi một lần 

    const phanTrang = (trang: number) => setTrangHienTai(trang)





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
    if (danhSachQuyenSach.length === 0) {
        return (
            <div className="container">
                <div className="row mt-4 d-flex align-items-center justify-content-center" >
                    <h1>Không có sách được tìm thấy</h1>
                </div>
            </div>
        )

    }

    return (

        <div className="container">
            <div className="">
                <h4>{tenTheLoai}</h4>
            </div>
            <div className="row mt-4" >
                {
                    danhSachQuyenSach.map((sach) => (
                        <SachProps key={sach.maSach} sach={sach} themSanPhamGioHang={themSanPhamGioHang}/>
                    ))
                }
            </div>
            <div className="mt-4 d-flex justify-content-center align-items-center">
                <PhanTrang trangHienTai={trangHienTai} tongTrang={tongSoTrang} phanTrang={phanTrang}></PhanTrang>
            </div>
        </div>
    );
};

export default DanhSachSanPham;
