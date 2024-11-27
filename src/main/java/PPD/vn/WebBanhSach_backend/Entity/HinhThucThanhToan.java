package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

import java.util.List;
@Data
public class HinhThucThanhToan {
    private int maHinhThucThanhToan;
    private String tenHinhThucThanhToan;
    private  String mota;
    private double chiPhiThanhToan;
    private List<DonHang> danhSachDonHang;
}
