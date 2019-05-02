import Cookies from 'js-cookie';
import decode from 'jwt-decode';

export function getvalidToken(){
    const token = Cookies.get('token');
    
        return token;
    
}

export function getdecodedToken(){
const validToken = getvalidToken()
if(validToken){
    console.log(decode(validToken).gitid);
    return decode(validToken).gitid
}else{
    return null
}
}


