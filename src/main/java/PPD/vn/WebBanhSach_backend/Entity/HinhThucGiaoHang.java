package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

import java.util.List;
@Data
public class HinhThucGiaoHang {
    private int maHinhThucGiaoHang;
    private String tenHinhThucGiaoHang;
    private  String mota;
    private double chiPhiGiaoHang;
    private List<DonHang> danhSachGiaoHang;
}
