package PPD.vn.WebBanhSach_backend.Rest;

import PPD.vn.WebBanhSach_backend.Entity.HinhAnh;
import PPD.vn.WebBanhSach_backend.Entity.HinhThucGiaoHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "hinh-thuc-giao-hang")
public interface HinhThucGiaoHangRespository extends JpaRepository<HinhThucGiaoHang, Integer> {
}
