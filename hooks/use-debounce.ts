import { useEffect, useState } from "react";

export function useDebounce(value:any, delay?:any){
   const [debouncedVal, setDebouncedVal]= useState(value);

   useEffect(()=>{
       const timer = setTimeout(()=> setDebouncedVal(value),delay || 500);

       return ()=>{
        clearTimeout(timer);
       }

   },[value,delay])

   return debouncedVal;
}