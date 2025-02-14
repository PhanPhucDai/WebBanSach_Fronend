import React, { useState } from "react";
import InforAdressuntill from "./component/inforAdressUntills";
import MethodTransport_Shipping from "./component/MethodTransport&Shipping";
import CodePromotional from "./component/CodePromotional";
import Bill from "./component/Bill";
import CheckBill from "./component/CheckBill";
const Paymoney = () => {
    const [tinh, setTinh] = useState('');
    const [huyen, setHuyen] = useState('');
    const [xa, setXa] = useState('');
    const [phiGiaoHang, setPhiGiaoHang] = useState(0);

    
    

    return (
        <div>
            <div className="pb-5">
                <InforAdressuntill setPhiGiaoHang={setPhiGiaoHang}/>
                <MethodTransport_Shipping />
                <CodePromotional />
                <CheckBill />
            </div>

            <div className="fixed-bottom bg-white shadow p-2">
                <Bill phiGiaoHang={phiGiaoHang}/>
            </div>
        </div>



    );
}

export default Paymoney;