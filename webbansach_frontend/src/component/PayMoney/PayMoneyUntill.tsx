import React, { useRef, useState } from "react";
import InforAdressuntill from "./component/inforAdressUntills";
import MethodTransport_Shipping from "./component/MethodTransport&Shipping";
import CodePromotional from "./component/CodePromotional";
import Bill from "./component/Bill";
import CheckBill from "./component/CheckBill";
import { useLocation } from "react-router-dom";
const Paymoney = () => {
    const [tinh, setTinh] = useState('');
    const [huyen, setHuyen] = useState('');
    const [xa, setXa] = useState('');
    const [phiGiaoHang, setPhiGiaoHang] = useState(0);

    const useRefAddress= {
        tinh: useRef<HTMLSelectElement | null >(null),
        huyen:useRef<HTMLSelectElement | null >(null),
        xa:useRef<HTMLSelectElement | null >(null),
        addressDeitail: useRef<HTMLInputElement | null>(null),
     };

  
    const checkTrim = () =>{
        for(const key of Object.keys(useRefAddress) as Array<keyof typeof useRefAddress>){
            const inputRef  = useRefAddress[key].current;
            console.log("inputRef", inputRef?.value);
            if(inputRef &&  (inputRef.value.trim() === "" || 
            inputRef.value.trim() === "T0" || 
            inputRef.value.trim() === "H0" || 
            inputRef.value.trim() === "123")){
                inputRef.focus();
                inputRef.scrollIntoView({ behavior: "smooth", block: "center" })
                return;
            }
        }
    }
      const location= useLocation();
    const tongTien = location.state?.tongTien || 0;
 

    return (
        <div>
            <div className="pb-5">
                <InforAdressuntill   setPhiGiaoHang={setPhiGiaoHang} useRefAddress={useRefAddress} />
                <MethodTransport_Shipping />
                <CodePromotional />
                <CheckBill />
            </div>

            <div className="fixed-bottom bg-white shadow p-2">
                <Bill phiGiaoHang={phiGiaoHang} tongTien={tongTien} checkTrim={checkTrim} />
            </div>
        </div>



    );
}

export default Paymoney;