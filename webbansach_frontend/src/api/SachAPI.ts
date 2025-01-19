import React from "react";
import SachModels from "../models/SachModels";
import { my_request } from "./Request";
import { Console } from "console";

interface ketQuaInterface {
    ketQua: SachModels[];
    tongSoTrang: number;
    tongSoSach: number;
}

async function laySach(duongDan: string): Promise<ketQuaInterface> {
    const ketQua: SachModels[] = []
    const response = await my_request(duongDan);
    const json=await response.json();
    const responData = json._embedded.saches
    const tongSoTrang: number = json.page.totalPages;


    for (const key in responData) {
        ketQua.push({
            maSach: responData[key].maSach,
            tenSach: responData[key].tenSach,
            tenTacGia: responData[key].tenTacGia,
            ISBN: responData[key].ISBN,
            moTa: responData[key].moTa,
            giaNiemYet: responData[key].giaNiemYet,
            giaBan: responData[key].giaBan,
            soLuong: responData[key].soLuong,
            trungBinhXepHang: responData[key].trungBinhXepHang,
            moTaChiTiet: responData[key].moTaChiTiet || ""
        })

    }
    return { ketQua: ketQua, tongSoSach: tongSoTrang, tongSoTrang: tongSoTrang };
}

export async function lay3QuyenSachMoi(): Promise<ketQuaInterface> {
    return laySach("http://localhost:8080/sach?sort=maSach,desc&page=0&size=3");
}

export async function layToanBoSach(trangHienTai: number): Promise<ketQuaInterface> {
    return laySach(`http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trangHienTai}`);
}

export async function timKiemSach(tuKhoaTimKiemSach: string, maTheLoai: number): Promise<ketQuaInterface> {
    let duongDan: string = '';
    if (tuKhoaTimKiemSach !== '' && maTheLoai === 0) {
        duongDan = `http://localhost:8080/sach/search/findByTenSachContaining?sort=maSach,desc&size=8&page=0&tenSach=${tuKhoaTimKiemSach}`;
    } else if (tuKhoaTimKiemSach === '' && maTheLoai > 0) {
        duongDan = `http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?maTheLoai=${maTheLoai}&sort=maSach,desc&size=8&page=0`;
    } else if (tuKhoaTimKiemSach !== '' && maTheLoai > 0) {
        duongDan = `http://localhost:8080/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}&tenSach=${tuKhoaTimKiemSach}`;
    }
    return laySach(duongDan);
}

export async function laySachTheoMaSach(maSach: number): Promise<SachModels | null> {
   
    try {
        const resquest = await  my_request(`http://localhost:8080/sach/${maSach}`)
        let sachData: SachModels | null = null;
        const jsonResponse = await resquest.json();
        if (jsonResponse !== null) {
            sachData = jsonResponse;
        }
        if (sachData ) {
            return{
            maSach: sachData.maSach,
            tenSach: sachData.tenSach,
            tenTacGia: sachData.tenTacGia,
            ISBN: sachData.ISBN,
            moTa: sachData.moTa,
            moTaChiTiet: sachData.moTaChiTiet,
            giaNiemYet: sachData.giaNiemYet,
            giaBan: sachData.giaBan,
            soLuong: sachData.soLuong,
            trungBinhXepHang: sachData.trungBinhXepHang
            }
            
        }else{
            throw new Error('Sách kông tồn tại')
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}