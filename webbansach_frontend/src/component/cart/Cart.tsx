import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GioHang from "../../models/GioHang";
import { chiTietGioHang } from "../../api/GioHang";
import ChiTietGioHang from "./ComponentCart/ChiTietGioHang";
interface GioHanginter {
  xoaSanPhamTrongGioHang: (Sach: GioHang) => Promise<void>
}

const Cart: React.FC<GioHanginter> = ({ xoaSanPhamTrongGioHang }) => {
  const [chiTietItem, setchiTietItem] = useState<GioHang[]>([]);
  const [baoLoi, setbaoLoi] = useState('');


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
      setbaoLoi(reposne.body + "");
    } else {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }


  }

  const giamSoLuong = async (Sach: GioHang) => {
    const reposne = await fetch("http://localhost:8080/gio-hang/xoa-so-luong", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Sach)
    }
    )
    if (!reposne.ok) {
      setbaoLoi(reposne.body + "");
    } else {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }
  }

  //Xóa sản phẩm trong giỏ hànghàng
  const xoaSanPhamGioHang = async (Sach: GioHang) => {
    xoaSanPhamTrongGioHang(Sach);
    const item = await chiTietGioHang();
    setchiTietItem(item);

  }
  const [chonTatCa,setChonTatCa] = useState(false);

  const chonTatCaHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedEvent = e.target.checked;
    console.log("chontatca",chonTatCa)
    setChonTatCa(checkedEvent);
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
                <input type="checkbox" id="select-all" onChange={chonTatCaHandle} checked={chonTatCa} className="form-check-input me-2 mb-1" style={{padding: '10px'}}/>
                <label htmlFor="select-all" className="m-0"><h6 className="mb-0">Chọn tất cả</h6></label>
              </div>

              <div className="col-3 text-center"><h6 className="mb-0">Số lượng</h6></div>

              <div className="col-3 text-center"><h6 className="mb-0">Tổng tiền</h6></div>
            </div>
            <div  >
              {chiTietItem.map((item) => (
                <ChiTietGioHang key={item.sach} Sach={item} giamSoLuong={giamSoLuong} tangSoLuong={tangSoLuong} xoaSanPham={xoaSanPhamGioHang} duocChonIn={chonTatCa}/>
              ))}
            </div>
          </div>

          <div className="col-4 h-25">
            <div className="row h-50" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px", }}>
              <div className="col-6 d-flex p-2  align-items-center"><h5 >Khuyến mãi</h5></div>
              <div className="col-4"></div>
              <div className="col-2">
                <span className="carousel-control-next-icon justify-content-center d-flex align-items-center" aria-hidden="true"></span>
              </div>
            </div>
            <div className=" row mt-1" style={{ backgroundColor: "var(--bs-secondary-bg)", borderRadius: "8px", }}>
              <h5 className="text-center m-3">Tổng cộng</h5>
              <hr />
              <div className="row justify-content-center">
                <div className="col-6">Tổng Số Tiền (gồm VAT)</div>
                <div className="col-6"><h5 className="text-center text-danger">500.000đ</h5></div>
                <button className="btn btn-danger  mt-3 mb-2" style={{width:"300px"}}>
                  <b style={{ fontSize: "18px"}}>Thanh toán</b>
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart