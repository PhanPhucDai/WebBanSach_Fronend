import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KichHoatTaiKhoan = () => {
    const [emailReal, setEmail] = useState('');
    const [maKichHoatReal, setMaKichHoat] = useState('');
    const [dakichHoat, setDakichHoat] = useState(false);
    const [thongBao, setThongBao] = useState('');
    const { email, maKichHoat } = useParams();
    useEffect(() => {
      

        if (email && maKichHoat) {
            setEmail(email);
            setMaKichHoat(maKichHoat);
            thucHienKichHoat();
        }

    }, []);
    const thucHienKichHoat = async () => {
        try {
            const URL: string = "http"
            const respone = await fetch(`http://localhost:8080/tai-khoan/kich-hoat?email=${email}&maKichHoat=${maKichHoat}`
                , { method: "GET" }
            );
            if (respone.ok) {
                setDakichHoat(true);
                setThongBao("Tài khoản kích hoạt thành công");
            } else {
                setThongBao("Tài khoản kích hoạt không thành công");
            }
        } catch (error) {
            setThongBao("Tài khoản kích hoạt không thành công");
        }
    }

    return (
        <div>
        {dakichHoat ? (
            <p>Tài khoản đã kích hoạt thành công!</p>
        ) : (
            <p>Tài khoản không thể kích hoạt.</p>
        )}
    </div>
    
    )
}

export default KichHoatTaiKhoan;