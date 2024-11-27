package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

@Data
public class SachYeuThich {
    private int maSachYeuThich;
    private Sach sach;
    private NguoiDung nguoiDung;
}
