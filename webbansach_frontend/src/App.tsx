import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/homepage/HomePage';
import KichHoatTaiKhoan from './component/user/kichHoatTaiKhoan';
import ChiTietSanPham from './component/product/ChiTietSanPham';
import DangKi from './component/user/DangKiNguoiDung';
import Test1 from './component/user/Test1';
import SachForm from './admin/SachForm';
import DangNhap from './component/user/DangNhap';
import Cart from './component/cart/Cart';
import GioHang from './models/GioHang';
import { chiTietGioHang } from './api/GioHang';
import ThemGioHang from './models/ThemGioHang';



function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState("");
  const [chiTietItem, setchiTietItem] = useState<GioHang[]>([]);

  useEffect(() => {
    const gioHang = async () => {
      setchiTietItem(await chiTietGioHang());
    }
    gioHang();
  }, []);

  const xoaSanPhamGioHang = async (Sach: GioHang) => {
    const reponse = await fetch('http://localhost:8080/gio-hang/xoa-san-pham-gio-hang'
      , {
        method: "DELETE"
        , headers: {
          "Content-Type": "application/json"
        }
        , body: JSON.stringify(Sach)
      });


    if (!reponse.ok) {
      console.error("Bị lỗi trong quá trình xóa", reponse.text);
    } else {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }

  }

  const themSanPhamGioHang = async (Sach: ThemGioHang) => {
    const respone = await fetch("http://localhost:8080/gio-hang/them-san-pham-gio-hang", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },body: JSON.stringify({
        soluong: Sach.soLuong,
        gioHang: {
          maGioHang: Sach.idGioHang,
        },
        sach: {
          maSach: Sach.maSach,
        },
      }),
    });

    if (respone.ok) {
      const item = await chiTietGioHang();
      setchiTietItem(item);
    }
  }

  return (
    <BrowserRouter>
      <div className='fixed-top mb-5'  >
        <Navbar tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem} soLuongGioHang={chiTietItem}></Navbar>
      </div>
      <div className='mt-5' style={{ paddingTop: '20px' }} >
        <Routes>
          <Route path="/" element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} themSanPhamGioHang={themSanPhamGioHang}></HomePage>} />
          <Route path="/:maTheLoai" element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem} themSanPhamGioHang={themSanPhamGioHang}></HomePage>} />
          <Route path="/sach/:maSach" element={<ChiTietSanPham />} />
          <Route path="/sach/" element={<ChiTietSanPham />} />
          <Route path="/dang-ki" element={<DangKi />} />
          <Route path="/gio-hang" element={<Cart xoaSanPhamTrongGioHang={xoaSanPhamGioHang} />}></Route>
          <Route path="/dang-nhap" element={<DangNhap />} />
          <Route path="/Test1" element={<Test1 />} />
          <Route path="/kich-hoat/:email/:maKichHoat" element={<KichHoatTaiKhoan />} />
          <Route path="/admin/sach-form" element={<SachForm />} />
        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}


export default App;
