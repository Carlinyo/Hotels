
interface Rate{
    rate:number
}

export const RATE:React.FC<Rate>=({rate})=>{
    return(
    <>
        {rate}
    </>
    )
}