import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GioHang from "../../models/GioHang";
import { dinhDang } from "../utils/DinhDangSo";
import { chiTietGioHang } from "../../api/GioHang";
import ChiTietGioHang from "./ComponentCart/ChiTietGioHang";
interface GioHanginter {
  xoaSanPhamTrongGioHang: (Sach: GioHang) => Promise<void>
}

const Cart: React.FC<GioHanginter> = ({ xoaSanPhamTrongGioHang }) => {
  const [chiTietItem, setchiTietItem] = useState<GioHang[]>([]);

  useEffect(() => {
    async function layChiTietGioHang() {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }
    layChiTietGioHang();

  }, [])

  const tangSoLuong = async (Sach: GioHang) => {
    const reposne = await fetch("http://localhost:8080/gio-hang/them-so-luong", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Sach)
    }
    )
    if (!reposne.ok) {
    } else {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }


  }

  const giamSoLuong = async (Sach: GioHang) => {
    if (Sach.soluong > 1) {
      const reposne = await fetch("http://localhost:8080/gio-hang/xoa-so-luong", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Sach)
      }
      )
      if (!reposne.ok) {
      } else {
        const item = await chiTietGioHang();
        setchiTietItem(item);
      }
    }

  }

  //Xóa sản phẩm trong giỏ hàng
  const xoaSanPhamGioHang = async (Sach: GioHang) => {
    await xoaSanPhamTrongGioHang(Sach);
     const item = await chiTietGioHang();
     setchiTietItem(item);
  }
  const [chonTatCa, setChonTatCa] = useState(0);

  const [tongTien, setTongTien] = useState(0);
  const chonTatCaHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedEvent = e.target.checked;
    setChonTatCa(checkedEvent == false ? 0 : 1);

  }

  useEffect(() => {

    chiTietItem.forEach((e) => {
      if (chonTatCa) { e.isChecked = chonTatCa }
    })
    if (!chonTatCa) {
      chiTietItem.map((e) => { e.isChecked = chonTatCa })
    }
    setTongTien(0);
    tinhTongTien();
  }, [chonTatCa])

  const tinhTongTien = () => {
    setTongTien(0)
    let tongTienMoi = 0;
    chiTietItem.forEach((e) => {
      if (e.isChecked) {
        tongTienMoi += e.tongTienItem;
      }
    });

    // Cập nhật trạng thái 'tongTien' sau khi tính toán xong
    setTongTien(tongTienMoi);
  }

  return (
    <div className="container">
      {chiTietItem.length <= 0 ? (
        <div>
          <div>
            <h4>Giỏ hàng</h4>
            <div
              className="h-50 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: "var(--bs-secondary-bg)",
                width: "1092px",
                borderRadius: "4px",
                height: "340px",
              }}
            >
              <div className="mt-5">
                <img
                  title="null"
                  src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                  className="center"
                  alt="Empty Cart"
                />
              </div>
              <p style={{ marginTop: "20px" }}>
                Bạn chưa có sản phẩm nào trong giỏ hàng
              </p>
              <div>
                <Link to={"/"} className="btn btn-danger mb-5">
                  Tới trang chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <h4 className="">Giỏ hàng</h4>
          <div className="col-8 row g-0 h-50 d-flex flex-column ">
            <div className=" border-bottom row">
              <div className="col-6 d-flex align-items-center">
                {/**Chọn tất cả sản phẩm trong giỏ hàng*/}
                <input type="checkbox" id="select-all" onChange={chonTatCaHandle} checked={chonTatCa != 0} className="form-check-input me-2 mb-1" style={{ padding: '10px' }} />
                <label htmlFor="select-all" className="m-0"><h6 className="mb-0">Chọn tất cả</h6></label>
              </div>

              <div className="col-3 text-center"><h6 className="mb-0">Số lượng</h6></div>

              <div className="col-3 text-center"><h6 className="mb-0">Tổng tiền</h6></div>
            </div>
            <div>{/***Chi tiết sản phẩm*/}
              {chiTietItem.map((item) => (
                <div>
                  <ChiTietGioHang key={item.sach} tinhTongTien={tinhTongTien} Sach={item} giamSoLuong={giamSoLuong} tangSoLuong={tangSoLuong} xoaSanPham={xoaSanPhamGioHang} duocChonIn={chonTatCa} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-4 h-25">
            <div className="row h-50" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px", }}>
              <div className="col-6 d-flex p-2  align-items-center"><h5 >Khuyến mãi</h5></div>
              <div className="col-4"></div>
              <div className="col-2 d-flex position-relative" style={{ top: "8px" }}>
                <span className="carousel-control-next-icon" ></span>
              </div>
            </div>
            <div className=" row mt-1" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px", }}>
              <h5 className="text-center m-3">Tổng cộng</h5>
              <hr />
              <div className="row justify-content-center">
                <div className="col-6">Tổng Số Tiền (gồm VAT)</div>
                <div className="col-6"><h5 className="text-center text-danger">{dinhDang(tongTien)}đ </h5></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {tongTien > 0 ? (
                    <Link to="/thanh-toan" style={{ textDecoration: "none" }}>
                      <button
                        className="btn btn-danger mt-3 mb-2"
                        style={{
                          width: "300px",
                          height: "50px", // Đảm bảo chiều cao cố định
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <b style={{ fontSize: "18px" }}>Thanh toán</b>
                      </button>
                    </Link>
                  ) : (
                    <div
                      className="btn btn-danger mt-3 mb-2"
                      style={{
                        width: "300px",
                        height: "50px", // Đảm bảo chiều cao cố định
                        opacity: 0.5,
                        cursor: "not-allowed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <b style={{ fontSize: "18px" }}>Thanh toán</b>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </div>
  );
}
export default Cart