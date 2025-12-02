import { useLocation } from "react-router-dom"

export const getCurrentRoute=():string=>{
const location=useLocation();
const path=location.pathname;
return path;
}