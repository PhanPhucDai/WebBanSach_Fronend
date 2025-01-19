import React, { useState } from "react";

const DangNhap = () => {
 const [username, setUsername]= useState('')
 const [password, setPassword]= useState('')
 const [baoLoi, setBaoLoi]= useState('')

 const handleLogin = () =>{
    const logiRequest = {
        username: username,
        password: password,
    }
    fetch('http://localhost:8080/tai-khoan/dang-nhap',{
        method: "POST"
        ,headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(logiRequest)
    }).then(
        (respone)=>{
            if(respone.ok){
                return respone.json();
            }else{
                throw new Error('Đăng nhập thất bại!!!')
            }
        }
    ).then(
        (data)=>{
            const {jwt} = data;
            localStorage.setItem('token', jwt);
            setBaoLoi("Đăng nhập thành công. ")
        }
    ).catch(
        (error)=>{
            console.error('Đăng nhập thất bại',error )
            setBaoLoi("Đăng nhập không thành công. Vui long kiểm tra lại tên đăng nhập và mật khẩukhẩu")
        }
    )
 }
    return (
            <div className="container mt-5" style={{   marginTop: '220px' }}>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" >Tên đăng nhập</label>
                    <input type="text" id="form2Example1" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" >Mật khẩu</label>
                    <input value={ password } onChange={(e)=>setPassword(e.target.value)} type="password" id="form2Example2" className="form-control" />
                    
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Đăng nhập</button>
                {baoLoi&& <div style={{color:'red'}}>{baoLoi}</div>}
        </div>
    )

}
export default DangNhap;