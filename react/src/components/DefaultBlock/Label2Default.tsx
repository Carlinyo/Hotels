import React from "react";


interface bascket{
    count:number;
    children:React.ReactNode
}
export const Bascket:React.FC<bascket> = ({count, children}) => {
    return(
        <>
            <p>{count}</p>
        </>
    );
}