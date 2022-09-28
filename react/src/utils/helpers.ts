import {  RefObject, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { hotelsbyGeo } from "../actions/hotels-actions";
import { AppDispatch, RootState } from "../store/store";


export function useOnClickOutside(ref:RefObject<any>, handler:any) {
  useEffect(
    () => {
      const listener = (event:any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
         }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
     },
    [ref, handler]
  );
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export function ToNormalText(text:any){
  text = text.split("_")
  return text.join(" ")
}

export function TotalPrice (Buscket:Array<any>){
  let total:any = 0
  for(let i = 0; i < Buscket.length; i++){
    for(let j = 0; j < Buscket[i].offers.length; j++ ){
      if(Buscket[i].offers[j].price.currency == "EUR"){
        total+=Buscket[i].offers[j].price.total * 1.02
      }else if (Buscket[i].offers[j].price.currency == "GBP"){
        total += Buscket[i].offers[j].price.total * 1.21
      }else if (Buscket[i].offers[j].price.currency == "USD"){
        total+=Buscket[i].offers[j].price.total
      }
    }
  }
  return total
}

export function getHotelsbyGeo(test:any,dispatch:any){
  console.log(test)
  if(test[0]){
    dispatch(hotelsbyGeo(test[0].lat,test[0].lon))
  }
}
