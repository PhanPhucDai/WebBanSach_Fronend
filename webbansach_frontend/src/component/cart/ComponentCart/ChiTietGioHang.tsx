import React, { FC, useEffect, useState } from "react";
import GioHang from "../../../models/GioHang";
import SachModels from "../../../models/SachModels";
import HinhAnhModels from "../../../models/HinhAnhModel";
import { lay1HinhAnhCua1Sach } from "../../../api/HinhAnh";
import { laySachTheoMaSach } from "../../../api/SachAPI";
import { dinhDang } from "../../utils/DinhDangSo";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";


interface ChiTietGioHangProps {
  Sach: GioHang;
  duocChonIn: boolean;
  tinhTongTien: () => void; 
  giamSoLuong: (Sach: GioHang) => void; 
  tangSoLuong: (Sach: GioHang) => void;  
  xoaSanPham: (Sach: GioHang) => void;
}


const ChiTietGioHang:React.FC<ChiTietGioHangProps> = ({ Sach,tinhTongTien, giamSoLuong, tangSoLuong, xoaSanPham, duocChonIn }) =>{
  const maSach: number = Sach.sach;
  const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModels[]>([]);
  const [duLieuSach, setduLieuSach] = useState<SachModels>();
  const [duLieuAnh, setDuLieuAnh] = useState('');
  const [duocChon, setDuocChon] = useState(false);
   useEffect(() => {
    lay1HinhAnhCua1Sach(maSach)
      .then(
        kq => {
          setDanhSachAnh(kq)

        }
      )
    laySachTheoMaSach(maSach)
      .then(
        kq => {
          if (kq) {
            setduLieuSach(kq);
          }
        }
      )
    if (duLieuSach?.giaBan) {
       Sach.tongTienItem=Sach.soluong * duLieuSach?.giaBan;
    }
  }, [maSach, duLieuSach])

  useEffect(() => {
 

    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
      setDuLieuAnh(danhSachAnh[0].duLieuAnh)
    }

  }, [danhSachAnh] )

  //Tăng số lượng 
  const tangSoLuonghandle = async () => {
    tangSoLuong(Sach);
  }
  //Giảm số lượng 
  const giamSoLuongHandle = async () => {
     giamSoLuong(Sach)
  }

  //Xóa sản phẩm trong giỏ hàng
  const xoaSanPhamHandle = async () => {
     xoaSanPham(Sach)
  }

  useEffect (()=>{
    setDuocChon(duocChonIn);
    tinhTongTien();
  },[duocChonIn])
  
  const boChonHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedEvent = e.target.checked; 
    setDuocChon(checkedEvent);
    Sach.isChecked=checkedEvent;
    tinhTongTien();
 }

  return (
      <div className="container-fluit my-4" style={{width:"1300px"}}>
       
        <div className="row">
          <div className="col-8 p-3" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px"}}>
            <div className="row align-items-center py-2 border-bottom">
              <div className="col-3 d-flex align-items-center">
                <input className="form-check-input me-2" onChange={(e)=>boChonHandle(e)} checked={Sach.isChecked} type="checkbox" style={{ padding: '10px' }} />
                <img title="hình ảnh" src={`${duLieuAnh}`} style={{ height: '120px', width: '120px', objectFit: 'cover' }} />
              </div>

              <div className="col-3 d-flex flex-column justify-content-between">
              <Link to={`/sach/${duLieuSach?.maSach}`} className="text-decoration-none text-black"><h5 className="mb-2">{duLieuSach?.tenSach}</h5></Link>
                <div className="row mt-5">
                  <div className="col-3"><del>{dinhDang(duLieuSach?.giaNiemYet)}</del></div>
                  <div className="col-6">{dinhDang(duLieuSach?.giaBan)}</div>
                </div>

              </div>

              <div className="col-3 text-center">
                <div className="input-group">
                  <button onClick={giamSoLuongHandle} className="btn btn-outline-secondary" type="button" id="button-minus">-</button>
                  <input type="number" className="form-control" value={Sach.soluong} min="1" />
                  <button onClick={tangSoLuonghandle} className="btn btn-outline-secondary" type="button" id="button-plus">+</button>
                </div>
              </div>

              <div className="col-2 text-center">
                <span>{dinhDang(Sach.tongTienItem)}</span>
              </div>
              <div className="col-1 text-center">
                <button title="deleteItem" className="btn btn-outline-danger p-0 border-0" type="button" onClick={xoaSanPhamHandle} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    
  )
}
export default ChiTietGioHang