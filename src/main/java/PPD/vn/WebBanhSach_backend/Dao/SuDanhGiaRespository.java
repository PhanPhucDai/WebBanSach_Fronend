package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.SachYeuThich;
import PPD.vn.WebBanhSach_backend.Entity.SuDanhGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "su-danh-gia")
public interface SuDanhGiaRespository extends JpaRepository<SuDanhGia, Long> {
}
