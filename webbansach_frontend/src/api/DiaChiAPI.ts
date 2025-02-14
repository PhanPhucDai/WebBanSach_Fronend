import { json } from "stream/consumers";

async function layDanhSachTinh() {

    const request =await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province',{
        method:'GET',
        headers: { 'Token':'139bfc9a-d5a4-11ef-8360-f204b1609cdb' }})

    const respone = await request.json()
    return respone;
}
export default layDanhSachTinh

export async function layDanhSachHuyen(maTinhThanh:string) {
    const number = Number.isNaN(Number.parseInt(maTinhThanh)) ? 0 : Number.parseInt(maTinhThanh);
    const request =await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/district',{
        method:'Post',
        headers: { 'Content-Type': 'application/json', 'Token':'139bfc9a-d5a4-11ef-8360-f204b1609cdb' },
        body: JSON.stringify({"province_id": number})})

    const respone = await request.json()
    return respone;
}

export async function layDanhSachXa(maHuyenThanh:string) {
    const number = Number.isNaN(Number.parseInt(maHuyenThanh)) ? 0 : Number.parseInt(maHuyenThanh);
    const request =await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward',{
        method:'Post',
        headers: {  'Content-Type': 'application/json','Token':'139bfc9a-d5a4-11ef-8360-f204b1609cdb' },
        body: JSON.stringify({"district_id": number})})

    const respone = await request.json()
    return respone;
}
 