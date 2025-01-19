class DanhGiaModel {
    maNguoidung: number;
    maSach: number;
    maDanhGia: number;
    diemXepHang?: number;
    nhanXet?: string;

    constructor(maDanhGia: number,
        maNguoidung: number,
        maSach: number,
        diemXepHang?: number,
        nhanXet?: string) {
        this.maSach = maSach
        this.maNguoidung = maNguoidung
        this.maDanhGia = maDanhGia
        this.diemXepHang = diemXepHang
        this.nhanXet = nhanXet
    }
}

export default DanhGiaModel