
import React, { useEffect, useState } from "react";
import SachModels from "../../../models/SachModels";
import { dinhDang } from "../../utils/DinhDangSo";
import { rederRating } from "../../utils/SaoXepHang";
import { Link } from "react-bootstrap-icons";


interface Sachs {
    maTheLoai: number
}

const SachLienQuan = ({ maTheLoai }: Sachs) => {
    const [sach, setSach] = useState<SachModels[]>([]);
    useEffect(() => {
        const laySachMoiNhatTheoTheLoai = async () => {
            const respone = await fetch(`http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?maTheLoai=${maTheLoai}&sort=maSach,desc&size=6&page=0`);
            const json =await respone.json();
            if (json._embedded && json._embedded.saches) {
                const danhSachSach = json._embedded.saches;
                setSach(danhSachSach);
            } else {
                console.log("Dữ liệu không hợp lệ hoặc không có sách nào");
            }
        };
        laySachMoiNhatTheoTheLoai();
    }, [maTheLoai])


    return (
        <div className="container-fluit row">
            {sach.map((sach)=>(
                <div className="" style={{width:'250px'}}>
                <div className="card">
                    {/* Ảnh sách */}
                    <div className="card-body">
                        <Link to={`/sach/${sach.maSach}`} className="text-decoration-none"  > <h5 className="card-title">{sach.tenSach}</h5> </Link>
                        <p className="card-text">{sach.moTa}</p>
                        <div className="price"> <span className="origin-price"><strong>Giá bán</strong> <del>{dinhDang(sach.giaNiemYet)}</del> </span>
                            <span className="discounted-price">
                                {dinhDang(sach.giaBan)}
                            </span>
                        </div>
                        <div className=" mt-2" role="group">
                            <div>
                                {rederRating(sach.trungBinhXepHang ? sach.trungBinhXepHang : 0)}
                            </div>
                            
                        </div>
                        <div className="col-6">
                                <a href="#" className="btn btn-secondary btn-block me-1">  <i className="fas fa-heart"></i></a>
                                <button title="#" type="button" className="btn btn-danger btn-block"> <i className="fas fa-shopping-cart"></i>  </button>
                        </div>
                    </div>
                </div>
            </div>
            ))
}
        </div>
    )
}


export default SachLienQuan;