class NguoiDung {
    maNguoiDung: number;
    hoDem: String;
    ten: String;
    tenDangNhap: String;
    gioiTinh: String;
    email: String;
    soDienThoai: String
    constructor(maNguoiDung: number,
        hoDem: String,
        ten: String,
        tenDangNhap: String,
        gioiTinh: String,
        email: String,
        soDienThoai: String) {
        this.maNguoiDung = maNguoiDung;
        this.hoDem = hoDem;
        this.ten = ten;
        this.tenDangNhap = tenDangNhap;
        this.gioiTinh = gioiTinh;
        this.email = email;
        this.soDienThoai = soDienThoai;

    }
}
export default NguoiDung 