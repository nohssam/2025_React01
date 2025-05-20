import { useState } from "react";
import Page from "../step20/Page";
import { ThemeContext } from "./ThemeContest";
import './ContextText.css'

export default function ContextTest(){
   const [isDark, setIsDark] = useState(false);
   return(
        <div>
            {/* props 전달하지 않는다. */}
            {/* 하위 컴포넌트들에게 데이터를 제공한다는 뜻 */}
            <ThemeContext.Provider value={{isDark,setIsDark }}>
               <Page />
            </ThemeContext.Provider>
        </div> 
   )
}