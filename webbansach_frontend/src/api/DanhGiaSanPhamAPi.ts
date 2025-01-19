import React from "react";
import DanhGiaModel from "../models/DanhGiaModel";
import { my_request } from "./Request";
async function layDanhGia(duongDan: string): Promise<DanhGiaModel[]> {

    const ketQua: DanhGiaModel[] = []
    const respone = await my_request(duongDan);
    const responeData = await respone.json();
    const json = responeData._embedded.suDanhGias

    for (const key in json) {
        ketQua.push({
            maNguoidung: 0,
            maSach: 0,
            maDanhGia: json[key].maDanhGia,
            diemXepHang: json[key].diemXepHang,
            nhanXet: json[key].nhanXet,
        })
    }
    return ketQua;
}
export async function layDanhGiaMaSach(maSach: number): Promise<DanhGiaModel[]> {
    return layDanhGia(`http://localhost:8080/sach/${maSach}/suDanhGia`);
}