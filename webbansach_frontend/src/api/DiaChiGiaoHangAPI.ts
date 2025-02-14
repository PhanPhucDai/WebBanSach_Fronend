import { jwtDecode } from "jwt-decode";
import { my_request } from "./Request";

interface jwt {
    idUser: number;
}

// export async function DiaChiGiaoHangFromDb(): Promise<DiaChiGiaoHang[]> {
//     const danhSachDiaChiGiaoHang: DiaChiGiaoHang[] = [];
//     let jwt = localStorage.getItem('token');
//     let idUser = 0;
//     let data: DiaChiGiaoHang[];
//     if (jwt) {
//         const decode = jwtDecode<jwt>("jwt");
//         idUser = decode.idUser
//     } else {
//         data = [];
//     }
//     const request = await my_request(`http://localhost:8080/nguoi-dung/${idUser}/diaChiGiaoHang`)
//     data = await request.json();
//     data.forEach(diaChiGiaoHang => {
//         danhSachDiaChiGiaoHang.push({
//             ProvinceID: diaChiGiaoHang.ProvinceID,
//             ProvinceName: diaChiGiaoHang.ProvinceName,
//             DistrictID: diaChiGiaoHang.DistrictID,
//             DistrictName: diaChiGiaoHang.DistrictName,
//             WardCode: diaChiGiaoHang.WardCode,
//             WardName: diaChiGiaoHang.WardName,
//         }

//         )
//     });
//     return danhSachDiaChiGiaoHang;

// }

// export async function saveDiaChiGiaoHang(diaChiGiaoHang: DiaChiGiaoHang) {
//     const danhSachDiaChiGiaoHang: DiaChiGiaoHang[] = [];
//     let jwt = localStorage.getItem('token');
//     let idUser = 0;
//     let data: DiaChiGiaoHang[];
//     if (jwt) {
//         const decode = jwtDecode<jwt>("jwt");
//         idUser = decode.idUser
//     } else {
//         data = [];
//     }
//     const request = await my_request(`http://localhost:8080/nguoi-dung/${idUser}/diaChiGiaoHang`)
//     data = await request.json();
//     data.forEach(diaChiGiaoHang => {
//         danhSachDiaChiGiaoHang.push({
//             ProvinceID: diaChiGiaoHang.ProvinceID,
//             ProvinceName: diaChiGiaoHang.ProvinceName,
//             DistrictID: diaChiGiaoHang.DistrictID,
//             DistrictName: diaChiGiaoHang.DistrictName,
//             WardCode: diaChiGiaoHang.WardCode,
//             WardName: diaChiGiaoHang.WardName,
//         }

//         )
//     }
//     );
//     return danhSachDiaChiGiaoHang;

// }