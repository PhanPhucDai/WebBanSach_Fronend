package PPD.vn.WebBanhSach_backend.Rest;

import PPD.vn.WebBanhSach_backend.Entity.DonHang;
import PPD.vn.WebBanhSach_backend.Entity.HinhAnh;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "hinh-anh")
public interface HinhAnhRespository extends JpaRepository<HinhAnh, RepositoryRestResource> {
}
