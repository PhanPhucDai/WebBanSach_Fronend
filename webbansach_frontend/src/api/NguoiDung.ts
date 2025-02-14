import { jwtDecode } from "jwt-decode";
import NguoiDung from "../models/NguoiDung";

interface tokenDecode {
    idUser: number;
}

async function getInfor() {
    
    const token = localStorage.getItem('token');
    if (!token) {
        return '';
    }
    const decode = jwtDecode<tokenDecode>(token);
    const iduser = decode.idUser;
    const request = await fetch(`http://localhost:8080/nguoi-dung/${iduser}`);
    const respone = await request.json();
    
    return respone;
}
export default getInfor;