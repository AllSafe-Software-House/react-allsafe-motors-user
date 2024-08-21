import { createContext, useState } from "react";

export const menuContext = createContext();
export default function MenuContextProvider({children}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <menuContext.Provider value={{isMenuOpen,setIsMenuOpen}}>
        {children}
    </menuContext.Provider>
}