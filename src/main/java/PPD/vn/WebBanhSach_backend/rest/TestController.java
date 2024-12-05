package PPD.vn.WebBanhSach_backend.rest;

import PPD.vn.WebBanhSach_backend.Dao.ChiTietDonHangRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    private ChiTietDonHangRespository chiTietDonHangRespository;
    @Autowired
    public TestController(ChiTietDonHangRespository chiTietDonHangRespository){
        this.chiTietDonHangRespository=chiTietDonHangRespository;
    }

    @GetMapping("/")
    public void test(){

        System.out.println( chiTietDonHangRespository.findAll());
    }
}
