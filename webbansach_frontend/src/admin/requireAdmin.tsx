import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

interface JwtPayload {
    isAdmin: boolean,
    isStaff: boolean,
    isUser: boolean
}

const RequireAdmin = <P extends object>(WrapperdComponent: React.ComponentType<P>) => {
    const WithAdminCheck: React.FC<P> = (props) => {
        const navigate = useNavigate();
        useEffect(() => {
            const token = localStorage.getItem('token');
            console.log("Token" + token);
            if (!token) {
                navigate("/dang-nhap");
                return  ;
            }
            else {

                const decodeToken = jwtDecode(token) as JwtPayload;
                console.log("Decode Token" + decodeToken);
                //Lay thong tin cu the
                const isAdmin = decodeToken.isAdmin;
                if (!isAdmin) {
                    navigate("/dang-nhap");
                    return    ;
                }

            }},[navigate])

        return <WrapperdComponent {...props} />
    }
    return WithAdminCheck;
}
export default RequireAdmin;