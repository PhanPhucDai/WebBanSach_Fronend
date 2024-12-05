package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.DonHang;
import PPD.vn.WebBanhSach_backend.Entity.HinhAnh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HinhAnhRespository extends JpaRepository<HinhAnh, Integer> {
}
