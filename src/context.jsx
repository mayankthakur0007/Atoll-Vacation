// context.js
import { createContext } from 'react';
export const AppContext = createContext({
    selectedPackage:"",
    setPackage:()=>{}
});
