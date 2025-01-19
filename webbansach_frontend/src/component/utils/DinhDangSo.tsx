export const dinhDang = (x: number | undefined) => {
    if (x === undefined) {
        return 0;
    }
    if (isNaN(x)) {
        return 0;
    }
    return x.toLocaleString("vi-VN");
}
