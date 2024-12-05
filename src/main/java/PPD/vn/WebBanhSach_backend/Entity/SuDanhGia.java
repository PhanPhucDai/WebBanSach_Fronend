package PPD.vn.WebBanhSach_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Table(name = "su_danh_gia")
@Data
public class SuDanhGia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ma_danh_gia")
    private long maDanhGia;
    @Column(name="diem_xe_phang")
    private float diemXepHang;
    @Column(name="nhan_xet")
    private String nhanXet;
    @ManyToOne(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
            }
    )
    @JoinColumn(name = "ma_nguoi_dung", nullable = false)
    private NguoiDung  nguoiDung;
    @ManyToOne(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
                    CascadeType.REFRESH,
            }
    )
    @JoinColumn(name = "ma_sach", nullable = false)
    private Sach sach;
}
