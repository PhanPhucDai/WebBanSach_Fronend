import React from "react";
import Banner from "./HomePagesUntils/Banner";
import Carousel from "./HomePagesUntils/Carousel";
import DanhSachSanPham from "../product/DanhSachSanPham";
import { useParams, useSearchParams } from "react-router-dom";
 import ThemGioHang from "../../models/ThemGioHang";

 

interface HomePagePropt{
    tuKhoaTimKiem: string,
    themSanPhamGioHang : (Sach: ThemGioHang) => Promise<void>
 

}

function HomePage({tuKhoaTimKiem, themSanPhamGioHang}: HomePagePropt){
    const {maTheLoai} = useParams();
    let maTheLoaiNumber = 0;
    try {
        maTheLoaiNumber= parseInt(maTheLoai+"");//nan
    } catch (error) {
        maTheLoaiNumber = 0;
        console.log("Error"+error);
    }

    if(Number.isNaN(maTheLoaiNumber)){
        maTheLoaiNumber= 0;
    }

    return(
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <DanhSachSanPham tuKhoaTimKiem={tuKhoaTimKiem} maTheLoai={maTheLoaiNumber} themSanPhamGioHang={themSanPhamGioHang}/>
        </div>
       
    );
}

export default HomePage; 