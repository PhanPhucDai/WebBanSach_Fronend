package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

import java.sql.Date;
import java.util.List;
@Data
public class DonHang {
    private int maGioHang;
    private Date ngayTao;
    private String diaChiMuaHang;
    private String diaChiNhanHang;
    private double tongTienSanPham;
    private double chiPhiGiaoHang;
    private double chiPhiThanhToan;
    private List<ChiTietDonHang> danhSachChiTietDioHang;
    private NguoiDung nguoiDung;
    private HinhThucThanhToan hinhThucThanhToan;
    private HinhThucGiaoHang hinhThucGiaoHang ;

}
