import React from "react";
import InforAdressuntill from "./component/inforAdressUntills";
import MethodTransport_Shipping from "./component/MethodTransport&Shipping";
import CodePromotional from "./component/CodePromotional";
import Bill from "./component/Bill";
import CheckBill from "./component/CheckBill";
const Paymoney = () => {
    return (
        <div>
            <div className="pb-5">  
                <InforAdressuntill />
                <MethodTransport_Shipping />
                <CodePromotional />
                <CheckBill/>
            </div>

            <div className="fixed-bottom bg-white shadow p-2">
                <Bill/>
            </div>
        </div>



    );
}

export default Paymoney;