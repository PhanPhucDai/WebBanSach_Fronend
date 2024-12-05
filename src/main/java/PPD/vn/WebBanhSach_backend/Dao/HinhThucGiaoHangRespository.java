package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.HinhAnh;
import PPD.vn.WebBanhSach_backend.Entity.HinhThucGiaoHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HinhThucGiaoHangRespository extends JpaRepository<HinhThucGiaoHang, Integer> {
}
