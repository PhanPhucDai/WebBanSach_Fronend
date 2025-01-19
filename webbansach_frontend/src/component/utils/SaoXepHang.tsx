import { StarFill } from "react-bootstrap-icons";

export const rederRating= (diem: number)=>{
    const start = [];
    for (let index = 1; index <=5 ; index++) {
        if(index<=5){
            start.push(<StarFill className="text-warning"/>)
        }else{
            start.push(<StarFill className="text-secondary"/>)
        }
    }
    return start;
}

  