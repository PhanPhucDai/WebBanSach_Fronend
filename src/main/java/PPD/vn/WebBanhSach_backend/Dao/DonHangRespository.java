package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.ChiTietDonHang;
import PPD.vn.WebBanhSach_backend.Entity.DonHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonHangRespository extends JpaRepository<DonHang, Integer> {
}
