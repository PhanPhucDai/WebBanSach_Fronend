package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;


@Data
public class SuDanhGia {
    private long maDanhGia;

    private float diemXepHang;
    private NguoiDung  nguoiDung;
    private Sach sach;
}
