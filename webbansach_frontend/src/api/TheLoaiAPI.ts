import React from "react";
import TheLoai from "../models/TheLoaiModel";
import { my_request } from "./Request";

interface danhSachTheLoai{
    danhSachTheLoai: TheLoai[];
}


  async function layTheLoai(): Promise<danhSachTheLoai> {
    const danhSachTheLoai: TheLoai[]= [];
    const request = await my_request("http://localhost:8080/the-loai");
    const json=await request.json();
    const dataTheLoai = json._embedded.theLoais
    
    for(const key in dataTheLoai){
        danhSachTheLoai.push({
            maTheLoai: dataTheLoai[key].maTheLoai,
            tenTheLoai: dataTheLoai[key].tenTheLoai,
        })
    }
   
    return {danhSachTheLoai};
}

export default layTheLoai;