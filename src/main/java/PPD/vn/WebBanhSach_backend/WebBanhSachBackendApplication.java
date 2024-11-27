package PPD.vn.WebBanhSach_backend;

import PPD.vn.WebBanhSach_backend.Entity.TheLoai;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebBanhSachBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebBanhSachBackendApplication.class, args);
		TheLoai theLoai=new TheLoai();
		theLoai.setTenTheLoai("1");
		theLoai.setMaTheLoai(1);
		System.out.println(theLoai.getTenTheLoai());
	}

}
