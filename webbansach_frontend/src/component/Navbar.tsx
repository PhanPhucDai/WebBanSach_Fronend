import React, { ChangeEvent, useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import layTheLoai from "../api/TheLoaiAPI";
import TheLoai from "../models/TheLoaiModel";
import { jwtDecode } from "jwt-decode";
import GioHang from "../models/GioHang";
import { Popover } from "bootstrap";
import { chiTietGioHang } from "../api/GioHang";

interface NavbarPropt {
    tuKhoaTimKiem: string;
    setTuKhoaTimKiem: (tuKhoa: string) => void
    soLuongGioHang: GioHang[]
}

interface tokenJwt {
    nameUser: string;
    idUser: number;
}

function Navbar({ tuKhoaTimKiem, setTuKhoaTimKiem, soLuongGioHang}: NavbarPropt,) {
    const [timKiem, setTimKiem] = useState('');
    const [daDangNhap, setDaDangNhap] = useState(false);
    const [tenNguoiDung, setTenNguoiDung] = useState('');
    const [theLoai, setTheLoai] = useState<TheLoai[]>([]);
 

    useEffect(() => {
        layTheLoai().then(
            kq => {
                setTheLoai(kq.danhSachTheLoai);
            }
        )
        const token = localStorage.getItem('token');
        if (token) {
            const jwtDecoded = jwtDecode<tokenJwt>(token);
            setTenNguoiDung(jwtDecoded.nameUser);
            setDaDangNhap(true);
        }
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = Array.from(popoverTriggerList).map(popoverTriggerEl =>
            new Popover(popoverTriggerEl)
        );
    }, [])


  




    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTimKiem((e.target.value));
    }

    const handle = () => {
        setTuKhoaTimKiem(timKiem)
    }


    return (
        <div className="container-fluit ">
            <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BookStore</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4 ">
                            <li className="nav-item pe-auto">
                                <Link to="/" className=" nav-link  ms-5 " ><i className="fa fa-home me-2"></i>Trang chủ </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/0" className="nav-link dropdown-toggle text-black ms-5" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-book me-2"></i>Thể loại sách</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        {theLoai.map((theLoai) => (<li><Link className="dropdown-item" to={`/${theLoai.maTheLoai}`}>{`${theLoai.tenTheLoai}`}</Link></li>))}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex col-3" role="search">
                            <input className="form-control" type="search" placeholder="Tiềm kiếm sách ?" aria-label="Search" onChange={onSearchInputChange} value={timKiem} />
                            <button title="search" className="btn btn-outline-success" type="button" onClick={handle}>
                                <Search />
                            </button>
                        </div>
                        <div className="d-flex  col-5 align-items-center justify-content-end" role="search">
                            <div className="text-black me-5">
                                <i className="fa fa-heart me-2 text-danger" />Danh sách yêu thích
                            </div>
                            <div className="d-flex align-items-center text-black me-5 position-relative">
                                <i className="fa fa-shopping-cart me-3 position-relative" style={{ fontSize: '24px' }} />
                                {
                                    !daDangNhap ? (
                                        <div className="pe-auto">
                                            <a href="#" className="d-flex justify-content-center text-dark text-decoration-none pe-auto" data-bs-toggle="popover"
                                                data-bs-placement="bottom"
                                                data-bs-content="Vui lòng đăng nhập để xem giỏ hàng của bạn"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation">
                                                <span className="navbar-icon"></span> Giỏ hàng
                                            </a>
                                        </div>
                                    ) : (
                                        soLuongGioHang.length > 0 ? (
                                            <div>
                                                <span className="badge bg-danger position-absolute" style={{
                                                    borderRadius: '50%',
                                                    top: '-10px',
                                                    left: '-20px',

                                                    fontSize: '14px',
                                                }}> {soLuongGioHang.length}
                                                </span>
                                                <Link to="/gio-hang" className="nav-link" style={{ fontSize: '16px' }}>Giỏ hàng</Link>
                                            </div>
                                        ) : (
                                            <div>
                                                <Link to="/gio-hang" className="nav-link" style={{ fontSize: '16px' }}>Giỏ hàng</Link>
                                            </div>
                                        )

                                    )

                                }

                            </div>

                            <div className="text-black ">
                                {
                                    !daDangNhap ? (
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-4">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className='fas fa-user-alt  me-2' />Tài khoản
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="/dang-ki" className="dropdown-item">Đăng kí</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/dang-nhap" className="dropdown-item">Đăng nhập</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    ) : (
                                        <div>
                                            <span>Xin chào: </span><span>{tenNguoiDung}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar