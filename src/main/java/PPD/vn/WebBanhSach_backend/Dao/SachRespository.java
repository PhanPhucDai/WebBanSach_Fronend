package PPD.vn.WebBanhSach_backend.Dao;

import PPD.vn.WebBanhSach_backend.Entity.Quyen;
import PPD.vn.WebBanhSach_backend.Entity.Sach;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SachRespository extends JpaRepository<Sach, Integer> {
}
