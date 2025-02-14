

export const tinhTienGiaoHangAPI = async (tinh: string, huyen: string, xa: string, diaChiChiTiet: string) => {
    const request = await fetch("https://services.giaohangtietkiem.vn/services/shipment/fee", {
        
        method: "Post",
        headers: {
            'Token': 'X0H1LW81ryCklerFIKJyNXiNMkjser1xY59Sxm',
            'X-Client-Source': 'S22842353',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pick_province: "Đồng Nai",
            pick_district: "Nhơn Trạch",
            province: tinh,
            district: huyen,
            weight: 10,
            deliver_option: "none"
        })
    })
    console.log("tinh"+tinh )
    console.log("huyen"+huyen)
    console.log("xa"+xa)

    const respone = await request.json();
    console.log("reqone" + JSON.stringify(respone, null, 2))
    return respone
}