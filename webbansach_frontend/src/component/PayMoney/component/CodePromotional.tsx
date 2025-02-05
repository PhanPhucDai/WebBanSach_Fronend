import { useState } from "react";
 
const CodePromotional = () => {
    const [response, setResponse] = useState("");  

    const codePromotional = () => {
        console.log("Button clicked!");
        setResponse("Mã khuyến mãi không được áp dụng");  
    };
    
    return (
        <div className="container mb-5">
            <div className="border rounded-2 p-4 mt-2">
                <h5>Nhập mã khuyến mãi</h5>
                <div className="row">
                    <div className="input-group">
                        <input required type="text" name="payment" placeholder="Nhập mã khuyến mãi" className="form-control" />
                        <button  className="btn btn-primary" type="button" onClick={codePromotional}>Áp dụng</button>
                       
                    </div>
                    {response && ( 
                        <div className="mt-2">
                            <span className="text-danger m-1">{response}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CodePromotional;