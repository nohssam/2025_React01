import { useState } from "react";
import Page from "./Page";
import './ContextEx.css'

export default function ContextEx(){
    const [isDark, setIsDark] = useState(false);
    return(
        <div>
            <Page isDark={isDark} setIsDark={setIsDark}/>
        </div>
    )
}