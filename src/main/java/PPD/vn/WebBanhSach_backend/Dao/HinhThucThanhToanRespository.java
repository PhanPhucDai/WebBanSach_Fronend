package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.HinhThucGiaoHang;
import PPD.vn.WebBanhSach_backend.Entity.HinhThucThanhToan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HinhThucThanhToanRespository extends JpaRepository<HinhThucThanhToan, Integer> {
}
