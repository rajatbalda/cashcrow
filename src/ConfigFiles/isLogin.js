import { encryptStorage } from "./EncryptStorage";

export const  isLogin = () =>{
    if(encryptStorage.getItem('userDetail_cashcrow')!=undefined){
        return true;
      }
    else{
        return false;
    }
}

export const  Logout = () =>{
    encryptStorage.removeItem('userDetail_cashcrow');
}

export const  getUserData = () =>{
    if(encryptStorage.getItem('userDetail_cashcrow')!=undefined){
        return encryptStorage.getItem('userDetail_cashcrow');
    }
    return undefined;
}

