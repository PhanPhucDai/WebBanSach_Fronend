class HinhAnhModels {
    maHinhAnh: number;
    tenHinhAnh?: string;
    laIcons?: boolean;
    duongDan?: string;
    duLieuAnh?: string;

    constructor(
        maHinhAnh: number,
        tenHinhAnh: string,
        laIcons: boolean,
        duongDan: string,
        duLieuAnh: string,
    ){
        this.maHinhAnh=maHinhAnh;
        this.tenHinhAnh=tenHinhAnh;
        this.laIcons=laIcons;
        this.duongDan=duongDan;
        this.duLieuAnh=duLieuAnh;
    }
}

export default HinhAnhModels