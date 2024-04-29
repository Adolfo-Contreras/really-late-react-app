import { createContext, useContext, useState } from "react";

const newsContext = createContext()
export default function NewsContext({children}){
    const [articles, setArticles] = useState(null);
    return <newsContext.Provider value={[articles, setArticles]}>{children}</newsContext.Provider>
}
export function useNewsArticles(){
    const context = useContext(newsContext)
    if (!context) {
        throw new Error('uh idk context did a bad thing')
    }
    return context
}