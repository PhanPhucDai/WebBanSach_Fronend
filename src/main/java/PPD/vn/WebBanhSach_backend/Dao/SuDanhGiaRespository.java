package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.SachYeuThich;
import PPD.vn.WebBanhSach_backend.Entity.SuDanhGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuDanhGiaRespository extends JpaRepository<SuDanhGia, Long> {
}
