import { useEffect, useState } from "react"
import { chiTietGioHangIsSelected } from "../../../api/GioHang";
import GioHang from "../../../models/GioHang";
import { dinhDang } from "../../utils/DinhDangSo";
import { Link } from "react-router-dom";
import ComponentCheckBill from "./ComponentCheckBill/ComponentCheckBill";


const CheckBill = () => {
    const [chiTietGioHang, setChiTietGioHang] = useState<GioHang[]>([]);

    useEffect(() => {
        async function getChiTietGioHang() {
            const chiTietGioHang = await chiTietGioHangIsSelected();
            setChiTietGioHang(chiTietGioHang);
        }
        getChiTietGioHang()
    }, [])


    return (
        <div className="container mb-5 p-3 border rounded-2">
            <div>
                <h5>Kiểm tra lại đơn hàng</h5>
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
                {
                    chiTietGioHang.map((element, index) => (
                        <ComponentCheckBill Sach={element}></ComponentCheckBill>
                    ))
                }
            </div>


        </div>
    )
}
export default CheckBill