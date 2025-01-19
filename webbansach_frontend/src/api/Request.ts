export async function my_request(duongDan: string) {
    //Truy vấn đến đường dẫn
    const response = await fetch(duongDan);
    //Nếu trả về lỗi
    if (!response.ok) { throw new Error(`Không thể truy cập ${duongDan}`) }
    //Nếu trả về ok
    return response ;
}