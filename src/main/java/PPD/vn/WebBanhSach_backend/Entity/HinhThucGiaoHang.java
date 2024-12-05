package PPD.vn.WebBanhSach_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
@Table(name = "hinh_thuc_giao_hang")
public class HinhThucGiaoHang {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column( name =  "ma_hinh_thuc_giao_hang")
    private int maHinhThucGiaoHang;
    @Column( name =  "ten_hinh_thuc_giao_hang")
    private String tenHinhThucGiaoHang;
    @Column( name =  "mo_ta")
    private  String mota;
    @Column( name =  "chi_phi_giao_hang")
    private double chiPhiGiaoHang;
    @OneToMany(
            mappedBy = "hinhThucGiaoHang",
            fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
            }
    )
    private List<DonHang> danhSachGiaoHang;
}
