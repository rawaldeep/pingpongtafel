import Cookies from 'js-cookie';
import decode from 'jwt-decode';
// const key = Cookies.get('token');


// export function rememberToken(token){
//     if(token){
//         localStorage.setItem(key, token)
//     }else{
//         localStorage.removeItem(key)
//     }
// }

export function getvalidToken(){
    const token = Cookies.get('token');
    // try{
    //     const decodedToken = decode(token);
    //     const now = Date.now()/1000
    //     if(now > decodedToken.exp){
    //         return null
    //     }
        return token
    
    // catch(error){
    //     return null
    // }
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


