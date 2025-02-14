/* eslint-disable @typescript-eslint/no-unused-expressions */

class GioHang {
   maChiTietGioHang: number;
   soluong: number;
   sach: number;
   gioHang: number;
   isChecked: number;
   tongTienItem: number;
 
   constructor(maGiohang: number, soLuong: number, sach: number, gioHang: number, isChecked: number , tongTienItem: number= 0) {
     this.maChiTietGioHang = maGiohang;
     this.soluong = soLuong;
     this.sach = sach;
     this.gioHang = gioHang;
     this.isChecked = isChecked;
     this.tongTienItem = tongTienItem;
   }

  
 }
 
 export default GioHang;
 
  