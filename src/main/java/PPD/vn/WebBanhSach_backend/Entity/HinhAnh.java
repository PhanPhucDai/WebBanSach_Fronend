package PPD.vn.WebBanhSach_backend.Entity;

import lombok.Data;

@Data
public class HinhAnh {
    private int maHinhAnh;
    private String tenHinhAnh;
    private boolean laIcons;
    private String duongDan;
    private String data;
    private Sach sach;

}
