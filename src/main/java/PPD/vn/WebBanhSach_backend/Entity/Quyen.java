package PPD.vn.WebBanhSach_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Table(name = "Quyen")
@Entity
public class Quyen {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column (name = "ma_quyen")
    private int maQuyen;
    @Column (name = "ten_quyen")
    private String tenQuyen;
    @ManyToMany(
            fetch= FetchType.LAZY
            ,cascade = {
            CascadeType.DETACH,
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.REFRESH
    })
    @JoinTable(
            name = "nguoidung_quyen",
            joinColumns = @JoinColumn(name = "ma_quyen"),
            inverseJoinColumns = @JoinColumn(name = "ma_nguoi_dung")

    )
    private List<NguoiDung> danhSachNguoiDung;
}
