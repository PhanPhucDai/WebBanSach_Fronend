package PPD.vn.WebBanhSach_backend.Rest;

import PPD.vn.WebBanhSach_backend.Entity.Quyen;
import PPD.vn.WebBanhSach_backend.Entity.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "sach")
public interface SachRespository extends JpaRepository<Sach, Integer> {
}
