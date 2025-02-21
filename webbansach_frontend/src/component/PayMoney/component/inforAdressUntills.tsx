import { useEffect, useState } from "react"
import getInfor from "../../../api/NguoiDung";
import TinhMdodel from "../../../models/TinhModel";
import layDanhSachTinh, { layDanhSachHuyen, layDanhSachXa } from "../../../api/DiaChiAPI";
import HuyenModel from "../../../models/HuyenModel";
import XaModel from "../../../models/Xa";
import { tinhTienGiaoHangAPI } from "../../../api/TinhTienGiaoHang";
interface useRefAddress {
    tinh: React.RefObject<HTMLSelectElement>;
    huyen: React.RefObject<HTMLSelectElement>
    xa: React.RefObject<HTMLSelectElement>
    addressDeitail: React.RefObject<HTMLInputElement>
}

interface InforAddressProps {
    setPhiGiaoHang: (phi: number) => void;
    useRefAddress: useRefAddress;
}


const InforAddress: React.FC<InforAddressProps> = ({ setPhiGiaoHang, useRefAddress }) => {
    const [tenNguoiDung, setTenNguoiDung] = useState('');
    const [email, setEmail] = useState('');
    const [soDienThoai, setSoDienThoai] = useState(0);
    const [tinh, setTinh] = useState<TinhMdodel[]>([]);
    const [huyen, setHuyen] = useState<HuyenModel[]>([]);
    const [xa, setXa] = useState<XaModel[]>([]);
    const [diaChiChiTiet, setDiaChiChiTiet] = useState('');
    const [tinhIsSelected, setTinhIsSelected] = useState('');
    const [huyenIsSelected, setHuyenIsSelected] = useState('');
    const [xaIsSelected, setXaIsSelected] = useState('');

    const getInforUser = async () => {
        const require = await getInfor();
        setEmail(require.email);
        setSoDienThoai(require.soDienThoai);
        setTenNguoiDung(require.hoDem + " " + require.ten);

    }
    getInforUser();

    useEffect(() => {
        const danhSachTinhThanh: TinhMdodel[] = [];
        const layTinh = async () => {
            const respone = await layDanhSachTinh();
            const data = respone.data;
            for (const key in data) {
                danhSachTinhThanh.push({
                    ProvinceID: data[key].ProvinceID,
                    ProvinceName: data[key].ProvinceName

                })
            }
            setTinh(danhSachTinhThanh);
        }
        layTinh()
    }, [])

    const layHuyen = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const danhSachHuyenThanh: HuyenModel[] = [];
        const maTinh = e.target.value
        if (maTinh === 'T0') {
            setTinhIsSelected('T0')
            return
        }
        setTinhIsSelected(maTinh)

        const respone = await layDanhSachHuyen(maTinh);
        const data = respone.data;
        for (const key in data) {
            danhSachHuyenThanh.push({
                DistrictID: data[key].DistrictID,
                DistrictName: data[key].DistrictName
            })
        }
        setHuyen(danhSachHuyenThanh);
    }

    const layXa = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const danhSachXa: XaModel[] = [];
        const maHuyen = e.target.value
        if (maHuyen === 'T0') {
            setHuyenIsSelected('T0')
            return
        }
        setHuyenIsSelected(maHuyen)

        const respone = await layDanhSachXa(maHuyen);
        const data = respone.data;
        for (const key in data) {
            danhSachXa.push({
                WardCode: data[key].WardCode,
                WardName: data[key].WardName
            })
        }
        setXa(danhSachXa);
    }

    useEffect(() => {
        const fetchFee = async () => {
            let tinhValue = tinh.find(e => e.ProvinceID === Number.parseInt(tinhIsSelected))?.ProvinceName || '';
            let huyenValue = huyen.find(e => e.DistrictID === Number.parseInt(huyenIsSelected))?.DistrictName || '';
            let xaValue = xa.find(e => String(e.WardCode) === xaIsSelected)?.WardName || ''; 
 
            try {
                const rs = await tinhTienGiaoHangAPI(tinhValue, huyenValue, xaValue, diaChiChiTiet);
                setPhiGiaoHang(rs.fee.fee)
            } catch (error) {
                console.error("Lỗi khi lấy phí giao hàng:", error);}};
        fetchFee();
    }, [xaIsSelected, xa]);


    return (
        <div className="container  mb-2">
            <div className="border rounded-2 p-4">
                <h5>Địa chỉ giao hàng</h5>
                <hr />
                <div className="row mt-2">
                    <label htmlFor="" className="col-md-2 col-12 fw-bold">Tên người nhận:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Tên người nhận" value={tenNguoiDung} className="form-control rounded-2 shadow-sm border border-secondary" disabled />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Email:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Email" value={email} className="form-control rounded-2 shadow-sm border border-secondary" disabled />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Số điện thoại:</label>
                    <div className="col-md-10 ">
                        <input type="text" placeholder="Số điện thoại" value={soDienThoai} className="form-control rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Tỉnh/Thành Phố:</label>
                    <div className="col-md-10 ">
                        <select className="form-select" aria-label="Default select example" onChange={layHuyen} ref={useRefAddress.tinh} >
                            <option selected value={'T0'} >Tỉnh/ Thành phố</option>
                            {tinh.map((tinh) => (<option value={tinh.ProvinceID} >{tinh.ProvinceName}</option>))}
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Quận/Huyện:</label>
                    <div className="col-md-10 ">
                        <select ref={useRefAddress.huyen}  className="form-select" aria-label="Default select example" disabled={tinhIsSelected === 'T0'} onChange={layXa}>
                            <option selected={tinhIsSelected === 'T0' ? true : false} value={'T0'}>Huyện/ Quận</option>
                            {huyen.map((huyen) => (<option key={huyen.DistrictID} value={huyen.DistrictID}>{huyen.DistrictName}</option>))}
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12 col-md-2 fw-bold">Phường/Xã:</label>
                    <div className="col-md-10">
                        <select
                            ref={useRefAddress.xa} 
                            className="form-select"
                            aria-label="Default select example"
                            disabled={huyenIsSelected === 'H0'}  
                            value={xaIsSelected} 
                            onChange={(e) => setXaIsSelected(e.target.value)}>
                            <option value="H0" selected={xaIsSelected === 'H0'}>Xã</option>
                            {xa.map((x) => (
                                <option key={x.WardCode} value={x.WardCode}>{x.WardName}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="row mt-2">
                    <label htmlFor="" className="col-12  col-md-2 fw-bold">Địa chỉ nhận hàng:</label>
                    <div className="col-md-10 ">
                        <input type="text" ref={useRefAddress.addressDeitail} onChange={(e) => { setDiaChiChiTiet(e.target.value) }} value={diaChiChiTiet} placeholder="Địa chỉ nhận hàng" className="form-control  rounded-2 shadow-sm border border-secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InforAddress