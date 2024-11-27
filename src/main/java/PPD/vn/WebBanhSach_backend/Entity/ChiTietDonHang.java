package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

@Data
public class ChiTietDonHang {
    private long maChiTietGioHang;
    private int soLuong ;
    private double giaban;
    private Sach sach;
    private DonHang donHang;


}
