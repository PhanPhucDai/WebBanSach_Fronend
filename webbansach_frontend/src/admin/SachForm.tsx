import React, { FormEvent, useEffect, useState } from "react"
import RequireAdmin from "./requireAdmin";
import { createTable } from '../admin/css/SachFormJs.js';
import TheLoai from "../models/TheLoaiModel";
const SachForm: React.FC = () => {
    const [sach, setSach] = useState({
        maSach: 0,
        tenSach: '',
        giaBan: 0,
        giaNiemYet: 0,
        moTa: '',
        moTaChiTiet: '',
        soLuong: 0,
        isbn: '',
        tenTacGia: '',
        trungBinhXepHang: 0,
    })
    const [theLoai, setTheLoai] = useState<TheLoai[]>([])
    const [baoLoi, setBaoLoi] = useState('')

    useEffect(() => {
        const layTheLoai = async () => {
            const respone = await fetch('http://localhost:8080/the-loai')
            const json = await respone.json();
            console.log(json._embedded)
            setTheLoai(json._embedded.theLoais || []);
        }
        layTheLoai();
    }, [])




    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sach.moTaChiTiet = document.getElementById("myTable")?.outerHTML + "";
        const token = localStorage.getItem('token');
        fetch('http://localhost:8080/sach/them-sach', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(sach)
        }).then((respone) => {
            if (respone.ok) {
                alert("Đã Thêm sách thành công");
                setSach({
                    maSach: 0,
                    tenSach: '',
                    giaBan: 0,
                    giaNiemYet: 0,
                    moTa: '',
                    moTaChiTiet: '',
                    soLuong: 0,
                    isbn: '',
                    tenTacGia: '',
                    trungBinhXepHang: 0,
                })
            } else {
                alert("Đã Thêm sách không thành công");
            }
        }).catch((error) => {
            console.log("Đã bị lỗi" + error)
        })

    }
    return (
        <div className="container-fluit row ">
            <style>
                {
                    `.container{
    width: 60%;
    margin: 0 auto;
  }
  
  h1 {
  margin-top: 0;
  text-align: center;
  }
  
  .input-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  }
  
  #rows,
  #columns {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  }
  #rows:focus,
  #columns:focus{
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }
  button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  }
  button:hover {
  background-color: #3e8e41;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  .header-input {
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    border: none;
    outline: none;
    text-transform: uppercase;
  }
  #myTable{
    margin-top: 30px;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  .editable-cell {
    background-color: #f2f2f2;
    outline: none
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  ` }
            </style>
            <form onSubmit={handleSubmit} className="row m-3">
                <div className="col-6 row">
                    <h3>Thông tin cơ bản sản phẩm</h3>
                    <div className="col-6">
                        <label >Mã sách</label>
                        <input className="form-control" id="maSach" value={sach.maSach} readOnly />
                        <label >Tên sách</label>
                        <input type="text" className="form-control" value={sach.tenSach} onChange={(e) => setSach({ ...sach, tenSach: e.target.value })} required />
                    </div>
                    <div className="col-6">
                        <label>Giá bán</label>
                        <input type="number" className="form-control" value={sach.giaBan} onChange={(e) => setSach({ ...sach, giaBan: parseFloat(e.target.value) })} required />
                        <label >Giá niêm yết</label>
                        <input type="number"
                            className="form-control"
                            value={sach.giaNiemYet}
                            onChange={(e) => setSach({ ...sach, giaNiemYet: parseFloat(e.target.value) })}
                            required />
                    </div>
                    <div className="col-6">
                        <label  >Số lượng</label>
                        <input type="number"
                            className="form-control"
                            value={sach.soLuong}
                            onChange={(e) => setSach({ ...sach, soLuong: parseInt(e.target.value) })}
                            required />
                        <label  >Mô tả</label>
                        <input type="text"
                            className="form-control"
                            value={sach.moTa}
                            onChange={(e) => setSach({ ...sach, moTa: e.target.value })}
                            required />
                        <div className="dropdown">
                            <button className=" btn btn-outline-light dropdown-toggle text-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Thể loại
                            </button>
                            <ul className="dropdown-menu">
                                {theLoai.map((theLoaiItem) => (
                                    <li key={theLoaiItem.maTheLoai} >
                                        <a className="dropdown-item" href="#">{theLoaiItem.tenTheLoai}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <label  >iSBN</label>
                        <input type="text"
                            className="form-control"
                            value={sach.isbn}
                            onChange={(e) => setSach({ ...sach, isbn: e.target.value })}
                            required />
                        <label  >Tên tác giả</label>
                        <input type="text"
                            className="form-control"
                            value={sach.tenTacGia}
                            onChange={(e) => setSach({ ...sach, tenTacGia: e.target.value })}
                            required />
                        <label >Trung bình xếp hạng</label>
                        <input type="number"
                            className="form-control"
                            value={sach.trungBinhXepHang}
                            onChange={(e) => setSach({ ...sach, trungBinhXepHang: parseFloat(e.target.value) })}
                            required />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Lưu</button>
                </div>
                <div className="col-6">
                    <div className="">
                        <h3 className="ms-5">Tạo chi tiết sản phẩm</h3>
                        <div className="input-container">
                            <input type="number" id="columns" min="1" placeholder="Number of Columns" />
                            <input type="number" id="rows" min="1" placeholder="Number of Rows" />
                            <button onClick={() => createTable()}>Create Table</button>
                            <table id="myTable"></table>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

const SachForm_Admin = RequireAdmin(SachForm);
export default SachForm_Admin