package PPD.vn.WebBanhSach_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Table(name="hinh_anh")
@Data
public class HinhAnh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hinh_anh")
    private int maHinhAnh;
    @Column(name = "ten_tinh_anh")
    private String tenHinhAnh;
    @Column(name = "la_icons")
    private boolean laIcons;
    @Column(name = "duong_dan")
    private String duongDan;
    @Column(name = "du_Lieu_Anh")
    @Lob
    private String duLieuAnh;
    @ManyToOne(
            cascade = {
                    CascadeType.DETACH,
                    CascadeType.PERSIST,
                    CascadeType.MERGE,
                    CascadeType.REFRESH})
    //nullable là hình ảnh tồn tại thì bắt buộc nó phải thuộc về hình ảnh nào
    @JoinColumn(name = "ma_sach", nullable = false)
    private Sach sach;

}
