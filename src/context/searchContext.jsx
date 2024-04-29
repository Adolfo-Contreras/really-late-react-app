import { createContext, useContext, useState } from "react";

const searchContext = createContext()
export default function SearchContext({children}){
    const [query, setQuery] = useState(null);
    return <searchContext.Provider value={[query, setQuery]}>{children}</searchContext.Provider>
}
export function useSearchTerm(){
    const context = useContext(searchContext)
    if (!context) {
        throw new Error('uh idk context did a bad thing')
    }
    return context
}