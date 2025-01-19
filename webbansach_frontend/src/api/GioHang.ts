import { Console } from "console";
import GioHang from "../models/GioHang";
import { my_request } from "./Request";
import { jwtDecode } from "jwt-decode";
interface jwt {
        idUser: number;
}



export async function chiTietGioHang(): Promise<GioHang[]> {
        const tokenJwt = localStorage.getItem('token');
        const danhSachGioHang: GioHang[] = [];
        let idUser = 0;
        if (tokenJwt) {
                const jwtDeocode = jwtDecode<jwt>(tokenJwt);
                idUser = jwtDeocode.idUser;
        }
        const respone =await fetch("http://localhost:8080/gio-hang/San-pham-gio-hang", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({ maNguoiDung: idUser })
        })

        const data: GioHang[] = await respone.json();
       
        data.forEach((chiTietGioHang) => {
                danhSachGioHang.push({
                        maChiTietGioHang: chiTietGioHang.maChiTietGioHang,
                        soluong: chiTietGioHang.soluong,
                        sach: chiTietGioHang.sach,
                        gioHang: chiTietGioHang.gioHang,
                });
        });


        return danhSachGioHang;
}

export async function xoaSanPhamGioHang(): Promise<GioHang[]> {
        const tokenJwt = localStorage.getItem('token');
        const danhSachGioHang: GioHang[] = [];
        let idUser = 0;
        if (tokenJwt) {
                const jwtDeocode = jwtDecode<jwt>(tokenJwt);
                idUser = jwtDeocode.idUser;
        }
        const respone =await fetch("http://localhost:8080/gio-hang/San-pham-gio-hang", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({ maNguoiDung: idUser })
        })

        const data: GioHang[] = await respone.json();
       
        data.forEach((chiTietGioHang) => {
                danhSachGioHang.push({
                        maChiTietGioHang: chiTietGioHang.maChiTietGioHang,
                        soluong: chiTietGioHang.soluong,
                        sach: chiTietGioHang.sach,
                        gioHang: chiTietGioHang.gioHang,
                });
        });


        return danhSachGioHang;
}




