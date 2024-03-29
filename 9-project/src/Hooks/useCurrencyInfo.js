import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/$(currency).json`)
        .then((resp)=> resp.json())
        .then((resp)=> setData(resp[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;