import React, { useState } from "react";
import { useEffect } from "react";
const WithLoading =(WrapppedComponent)=>{
    return function WithLoadingx(props){

        const [isLoading,setIsLoading]=useState(true);

        useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false)
            },2000)
        },[])
        return isLoading  ?  (<>Loading</>) :  (<WrapppedComponent{...props}/>)
    }
}
export default WithLoading;