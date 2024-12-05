package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.HinhThucThanhToan;
import PPD.vn.WebBanhSach_backend.Entity.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NguoiDungRespository extends JpaRepository<NguoiDung, Integer> {
}
