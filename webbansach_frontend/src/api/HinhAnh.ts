import React from "react";
import HinhAnhModels from "../models/HinhAnhModel";
import { my_request } from "./Request";

async function layAnhCuaMotSach(duongan: string): Promise<HinhAnhModels[]>{
    const ketQua: HinhAnhModels[]=[]
    const respone=await my_request(duongan)
    const json=await respone.json();
    const responeData=json._embedded.hinhAnhs;
        for (const key in responeData) {
        ketQua.push({
                maHinhAnh: responeData[key].maHinhAnh,
                tenHinhAnh: responeData[key].tenHinhAnh,
                laIcons: responeData[key].laIcons,
                duongDan: responeData[key].duongDan,
                duLieuAnh: responeData[key].duLieuAnh,
            })
        }
        return ketQua;
}

export async function layToanBoHinhAnh(maSach: number): Promise<HinhAnhModels[]> {
    return layAnhCuaMotSach(`http://localhost:8080/sach/${maSach}/danhSachHinhAnh`)
}
 
export async function lay1HinhAnhCua1Sach(maSach: number): Promise<HinhAnhModels[]> {
    return layAnhCuaMotSach(`http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`)
}