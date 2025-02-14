import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { METHODS } from "http";
import { json } from "stream/consumers";
import { laySachTheoMaSach } from "../../../../api/SachAPI";
import { lay1HinhAnhCua1Sach } from "../../../../api/HinhAnh";
import SachModels from "../../../../models/SachModels";
import HinhAnhModels from "../../../../models/HinhAnhModel";
import { dinhDang } from "../../../utils/DinhDangSo";
import GioHang from "../../../../models/GioHang";


interface ChiTietGioHangProps {
  Sach: GioHang;
 }


const ComponentCheckBill: React.FC<ChiTietGioHangProps> = ({ Sach }) => {
  const maSach: number = Sach.sach;
  console.log(maSach);
  const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModels[]>([]);
  const [error, setError] = useState('');
  const [duLieuSach, setduLieuSach] = useState<SachModels>();
  const [duLieuAnh, setDuLieuAnh] = useState('');
  const [dangTai, setDangTai] = useState(false);

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
      Sach.tongTienItem = Sach.soluong * duLieuSach?.giaBan;
    }
  }, [maSach, duLieuSach])

  useEffect(() => {
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
      setDuLieuAnh(danhSachAnh[0].duLieuAnh)
    }
  }, [danhSachAnh])


  return (
    <div className="container my-4" style={{ width: "1300px" }}>
      <div className="row">
        <div className="p-3" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px" }}>
          <div className="row align-items-center py-2 border-bottom">
            <div className="col-3 d-flex align-items-center">
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
                 <input type="number" className="form-control" value={Sach.soluong} min="1" />
               </div>
              <div className="row"><span className="text-danger">{error}</span></div>
            </div>
            <div className="col-2 text-center">
              <span>{dinhDang(Sach.tongTienItem)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ComponentCheckBill;