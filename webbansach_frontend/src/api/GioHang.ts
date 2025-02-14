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
        let data: GioHang[];
        if (tokenJwt) {
                const jwtDeocode = jwtDecode<jwt>(tokenJwt);
                idUser = jwtDeocode.idUser;
        }else{
             return    data = [];
        }
        const respone =await fetch("http://localhost:8080/gio-hang/San-pham-gio-hang", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({ maNguoiDung: idUser })
        })

          data  = await respone.json();
       
        data.forEach((chiTietGioHang) => {
                danhSachGioHang.push({
                        maChiTietGioHang: chiTietGioHang.maChiTietGioHang,
                        soluong: chiTietGioHang.soluong,
                        sach: chiTietGioHang.sach,
                        gioHang: chiTietGioHang.gioHang,
                        isChecked: 0,
                        tongTienItem: 0
                });
        });


        return danhSachGioHang;
}
 
export async function chiTietGioHangIsSelected(): Promise<GioHang[]> {
        const tokenJwt = localStorage.getItem('token');
        const danhSachGioHang: GioHang[] = [];
        let idUser = 0;
        let data: GioHang[];
        if (tokenJwt) {
                const jwtDeocode = jwtDecode<jwt>(tokenJwt);
                idUser = jwtDeocode.idUser;
        }else{
             return    data = [];
        }
        const respone =await fetch(`http://localhost:8080/gio-hang/Chi-tiet-gio-hang/isSelected?maNguoiDung=${idUser}`)

          data  = await respone.json();
       
        data.forEach((chiTietGioHang) => {
                danhSachGioHang.push({
                        maChiTietGioHang: chiTietGioHang.maChiTietGioHang,
                        soluong: chiTietGioHang.soluong,
                        sach: chiTietGioHang.sach,
                        gioHang: chiTietGioHang.gioHang,
                        isChecked: 0,
                        tongTienItem: 0
                });
        });


        return danhSachGioHang;
}