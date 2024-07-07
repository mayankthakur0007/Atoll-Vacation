// context.js
import { createContext } from 'react';

export const PackageContext = createContext({
    "selectedPackage": '',
    "setLocation": ()=>{}
});
