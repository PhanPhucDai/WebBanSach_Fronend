 
import React, { useState } from "react";
 
function DangKi() {
    const [tenDangNhap, setTenDangNhap] = useState("");
    const [email, setEmail] = useState("");
    const [hoDem, setHoDem] = useState("");
    const [ten, setTen] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [gioiTinh, setGioiTinh] = useState("M");
    const [maKhau, setMaKhau] = useState("");
    const [matKhauLapLai, setMatKhauLapLai] = useState("");
    const [thongBao, setThongBao] = useState("");
    //khai báo lỗi 
    const [errorTenDangNhap, setErrorTenDangNhap] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        setErrorEmail('');
        setErrorMatKhau('');
        setErrorMatKhauLapLai('');
        setErrorTenDangNhap('');
        //tranhs click lien tuc
        event.preventDefault();

        const isTenDangNhapValid = !await kiemTraTenDangNhapDaTonTai(tenDangNhap);
        const isEmailValid = !await kiemTraEmailDaTonTai(email);
        const isMatKhauValid =await kiemTraMatKhau(maKhau);
        const isMatKhauLapLaiValid =await kiemTraMatKhauLapLai(matKhauLapLai);
        
        //kiem tra tat car cacs dieu kien
        if(isTenDangNhapValid && isEmailValid && isMatKhauValid && isMatKhauLapLaiValid){
            console.log("di vao ifif")
            try{
                const url=  `http://localhost:8080/tai-khoan/dang-ki`;
                const respone = await fetch(url,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                      
                    body: JSON.stringify({
                      
                        tenDangNhap: tenDangNhap, email: email, matKhau: maKhau, hoDem: hoDem, ten: ten, gioiTinh:gioiTinh, soDienThoai: soDienThoai
                    })
                })
                console.log( "tenDangNhap"+ tenDangNhap +"email"+  email+"maKhau"+  maKhau+"hoDem"+   hoDem+"ten"+ ten+"gioiTinh"+ gioiTinh+"soDienThoai"+  soDienThoai);
                if(respone.ok){
                    setThongBao("Tài khoản đăng kí thành công")
                }else{
                    setThongBao("Đã xãy ra lỗi")
                }
            }catch(error){
                setThongBao("Đã xãy ra lỗi"+error)
            }
        }

    }
    ////////////////////////////////////////////////Ten đang nhap///////////////////////////////////////////////////////////

    const kiemTraTenDangNhapDaTonTai = async (tenDangNhap: string) => {
        const url = `http://localhost:8080/nguoi-dung/search/existsByTenDangNhap?tenDangNhap=${tenDangNhap}`
        
        try {
            const respone = await fetch(url);
            const data = await respone.text();
            if (data === "true") {
                setErrorTenDangNhap("Tên đang nhập đã tồn tại");
                return true;
            }
            return false;
        } catch (errorerror) {
            
            return false;
        }
    }

    const handleTenDanhNhapChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setTenDangNhap(event.target.value);
        setErrorTenDangNhap('');
        return kiemTraTenDangNhapDaTonTai(event.target.value)
    }

    ////////////////////////////////////////////////Email///////////////////////////////////////////////////////////

    const [errorEmail, setErrorEmail] = useState("");
    const kiemTraEmailDaTonTai = async (email: string) => {
        const url = `http://localhost:8080/nguoi-dung/search/existsByEmail?email=${email}`
        console.log(url)
        try {
            const respone = await fetch(url);
            const data = await respone.text();
            if (data === "true") {
                setErrorEmail("Email đã tồn tại");
                return true;
            }
            return false;
        } catch (errorerror) {
             return false;
        }
    }

    const handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setErrorEmail('');
        return kiemTraEmailDaTonTai(event.target.value)
    }
    ////////////////////////////////////////////////Mat khau///////////////////////////////////////////////////////////

    const [errorMatKhau, setErrorMatKhau] = useState("");
    const kiemTraMatKhau = async (matKhau: string) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
        if (!passwordRegex.test(matKhau)) {
            setErrorMatKhau("Mật khẩu phải chứ ít nhất 8 kí tự và bao gồm 1 ít tự đặt biệt");
            return false;
        } else {
            setMaKhau(matKhau)
            setErrorMatKhau(" ")
            return true;
        }
    }

    const handleMatKhauChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaKhau(event.target.value);
        setErrorMatKhau('');
        return kiemTraMatKhau(event.target.value)
    }
    ////////////////////////////////////////////////Mat khau lap lai///////////////////////////////////////////////////////////

    const [errorMatKhauLapLai, setErrorMatKhauLapLai] = useState("");
    const kiemTraMatKhauLapLai = async (matKhauLapLai: string) => {
        if (matKhauLapLai !== maKhau) {
            setErrorMatKhauLapLai("Mật khẩu nhập lại không chính xác");
            return false;
        } else {
            setErrorMatKhauLapLai('');
            return true;
        }
    }
    
    const handleMatKhauLapChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatKhauLapLai(event.target.value);
        setErrorMatKhauLapLai('');
        return kiemTraMatKhauLapLai(event.target.value)
    }
    return (
        <div className="container">
            <h1 className="mt-5 text-center">Đăng kí</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="tenDangNhap" className="form-label">Tên đăng nhập:</label>
                        <input type="text" id="tenDangNhap" className="form-control" value={tenDangNhap} onChange={handleTenDanhNhapChange} />
                        <div style={{ color: "red" }}>{errorTenDangNhap}</div>
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="tenDangNhap" className="form-label">Nhập địa chỉ email:</label>
                        <input type="text" id="tenDangNhap" className="form-control" value={email} onChange={handleEmailChange} />
                        <div style={{ color: "red" }}>{errorEmail}</div>
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhau" className="form-label">Nhập mật khẩu:</label>
                        <input type="password" id="matKhau" className="form-control" value={maKhau} onChange={handleMatKhauChange} />
                        <div style={{ color: "red" }}>{errorMatKhau}</div>
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhauLapLai" className="form-label">Nhập lại mật khẩu:</label>
                        <input type="password" id="matKhauLapLai" className="form-control" value={matKhauLapLai} onChange={handleMatKhauLapChange} />
                        <div style={{ color: "red" }}>{errorMatKhauLapLai}</div>
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhauLapLai" className="form-label">Tên:</label>
                        <input type="text" id="matKhauLapLai" className="form-control" value={ten} onChange={(e) => setTen(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhauLapLai" className="form-label">Họ đệm:</label>
                        <input type="text" id="matKhauLapLai" className="form-control" value={hoDem} onChange={(e) => setHoDem(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhauLapLai" className="form-label">Số điện thoại:</label>
                        <input type="text" id="matKhauLapLai" className="form-control" value={soDienThoai} onChange={(e) => setSoDienThoai(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="matKhauLapLai" className="form-label">Giới tính:</label>
                        <input type="text" id="matKhauLapLai" className="form-control" value={gioiTinh} onChange={(e) => setGioiTinh(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 col-md-6 col-12 mx-auto">
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Đăng kí:</button>
                    </div>
                </div>
                <h5 >{thongBao}</h5>
            </form>
        </div>
    );
}

export default DangKi