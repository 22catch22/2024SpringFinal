import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const FinalUserContext = createContext({})

export function FinalUserContextProvider({children}){
const [finaluser, setFinalUser] = useState(null);
useEffect(() => {

    if(!finaluser){

    axios.get('./finalusers').then(({data}) => {
    setFinalUser(data)})
    
    }
}, [])
    return (
   
    <FinalUserContext.Provider value = {{finaluser, setFinalUser}}>
    {children}
    </FinalUserContext.Provider>
    
        )
}