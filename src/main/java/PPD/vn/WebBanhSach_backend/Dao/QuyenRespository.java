package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.HinhThucThanhToan;
import PPD.vn.WebBanhSach_backend.Entity.Quyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "quyen")
public interface QuyenRespository extends JpaRepository<Quyen, Integer> {
}
