interface PhanTrangInterface {
    trangHienTai: number;
    tongTrang: number;
    phanTrang: (page: number) => void; // Xác định kiểu callback
}

export const PhanTrang: React.FC<PhanTrangInterface> = (props) => {
    const { trangHienTai, tongTrang, phanTrang } = props;

    // Tạo danh sách trang
    const danhSachTrang = [];
    for (let i = Math.max(1, trangHienTai - 2); i <= Math.min(tongTrang, trangHienTai + 2); i++) {
        danhSachTrang.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* Nút Đầu */}
                <li className="page-item">
                    <button className="page-link" onClick={() => phanTrang(1)} disabled={trangHienTai === 1}>
                        Đầu
                    </button>
                </li>

                {/* Các nút trang */}
                {danhSachTrang.map((trang) => (
                    <li className={`page-item ${trangHienTai === trang ? "active" : ""}`}  key={trang}>
                        <button className="page-link" onClick={() => phanTrang(trang)}>
                            {trang}
                        </button>
                    </li>
                ))}

                {/* Nút Cuối */}
                <li className="page-item">
                    <button className="page-link" onClick={() => phanTrang(tongTrang)} disabled={trangHienTai === tongTrang}>
                        Cuối
                    </button>
                </li>
            </ul>
        </nav>
    );
};
