import React, { useEffect, useState } from "react";
import SachModels from "../../models/SachModels";
import { useParams } from "react-router-dom";
import { laySachTheoMaSach } from "../../api/SachAPI";
import HinhAnhSanPham from "./component/HinhAnhSanPham";
import DanhGiaSanPham from "./component/DanhGiaSanPham"
import { rederRating } from "../utils/SaoXepHang";
import "../../../src/Style.css"
import { dinhDang } from "../utils/DinhDangSo";
import SachLienQuan from "./component/SachLienQuan";
const ChiTietSanPham: React.FC = ({ }) => {

    const { maSach } = useParams();
    let maSachNumber = 0;

    try {
        maSachNumber = parseInt(maSach + "");
        if (Number.isNaN(maSachNumber)) {
            maSachNumber = 0
        }

    } catch (error) {
        console.log("error" + error)
    }
    const [sach, setSach] = useState<SachModels | null>(null);
    const [dangTai, setdangTai] = useState(true);
    const [loi, setLoi] = useState<null>(null);
    const [soLuong, setSoLuong] = useState(1);
    const tangSoLuong = () => {
        const soLuongSach = (sach && sach.soLuong ? sach.soLuong : 0);
        if (soLuong < soLuongSach) {
            setSoLuong(soLuong + 1)
        }
    }
    const giamSoLUong = () => {
        if (soLuong > 1) {
            setSoLuong(soLuong - 1)
        }
    }

    const handleSoLuong = (event: React.ChangeEvent<HTMLInputElement>) => {
        const soLuongMoi = parseInt(event.target.value);
        const soLuongTonKho = (sach && sach.soLuong ? sach.soLuong : 0);
        if (!isNaN(soLuong) && soLuongMoi >= 1 && soLuongMoi <= soLuongTonKho) {
            setSoLuong(soLuongMoi)
        }

    }
    const [theLoai, setTheLoai] = useState('');

    const layTheLoai = async () => {
       try{
        const respone =await fetch(`http://localhost:8080/sach/${maSachNumber}/danhSachTheLoai`)
        const responeDATA = await respone.json();
        const maTheLoai = await responeDATA._embedded.theLoais[0].maTheLoai;
        setTheLoai(maTheLoai);
         
       }catch(error){
            console.log("Xuất hiện lỗi"+ error);
       }
           
             
    }
    layTheLoai();
    useEffect(() => {
        let maSachNumber = 0;

        try {
            maSachNumber = parseInt(maSach + "");
            if (Number.isNaN(maSachNumber)) {
                maSachNumber = 0
            }

        } catch (error) {
            console.log("error" + error)
        }
        laySachTheoMaSach(maSachNumber)
            .then((sach) => {
                setSach(sach)
                setdangTai(false)
            })
            .catch((loi) => {
                setLoi(loi)
                setdangTai(false)
            })
    }, [maSach])
    if (loi) {
        return (
            <div>
                <h1>Đang bị lỗi: ${loi}</h1>
            </div>
        )
    }

    if (dangTai) {
        return (
            <div className="mt-5 ">
                <div className="   align-items-center justify-content-center" >
                    <h1>đang tải</h1>
                </div>
            </div>
        )

    }
    if (!sach) {
        return (

            <div className="mt-5 ">
                <div className="   align-items-center justify-content-center" >
                    <h1>Sách không tồn tại</h1>
                </div>
            </div>
        )

    }




    return (

        <div className="container mt-5">
            <div className="row mt-5 mb-4">
                <div className="col-3">
                    <div className="align-items-center justify-content-center" >
                        <HinhAnhSanPham maSach={maSachNumber}></HinhAnhSanPham>
                        <DanhGiaSanPham maSach={maSachNumber}></DanhGiaSanPham>
                    </div>
                </div>
                <div className="col-6">
                    <h2>Thông tin sản phẩm: </h2>
                    <div className="col-8 mt-3">
                        <h4>{sach.tenSach}</h4>
                        <h6>Xếp hạng đánh giá:      <span>{rederRating(sach.trungBinhXepHang ? sach.trungBinhXepHang : 0)}</span></h6>
                        <h6>Giá:    <span>{dinhDang(sach.giaBan)}</span></h6>
                        <div dangerouslySetInnerHTML={{ __html: sach.moTaChiTiet + "" }}>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <h2>Mua hàng: </h2>
                    <div>
                        <div className="mb-2 mt-3"></div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-secondary me-2" onClick={tangSoLuong}>+</button>
                            <input className="form-control text-center " type="number" value={soLuong} min={1} onChange={handleSoLuong}></input>
                            <button className="btn btn-outline-secondary ms-2" onClick={giamSoLUong}>-</button>
                        </div>
                        {
                            sach.giaBan && (
                                <div className="mt-2 text-center">
                                    Số tiền tạm tính<br></br>
                                    <h5>{dinhDang(soLuong * sach.giaBan)}đ</h5>
                                </div>
                            )
                        }
                        <button type="button" className="btn btn-danger mt-3">Mua ngay</button>
                        <button type="button" className="btn btn-outline-secondary mt-3 ms-3" >Thêm vào giỏ hàng</button>

                    </div>
                </div>
            </div>
            <div>
                <SachLienQuan maTheLoai={parseInt(theLoai)}></SachLienQuan>
            </div>
        </div>
    );

}

export default ChiTietSanPham