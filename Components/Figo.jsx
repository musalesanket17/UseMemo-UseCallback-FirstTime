import { useMemo, useState } from "react"


export const Figo=()=>{
     
    const [text,setText] = useState("")

    const figo =(n)=>{
         
        return n<=1 ? n : figo(n-1) + figo(n-2)
    }
 
     const figowithmemo = useMemo(()=> figo(Number(text)) ,[text])

    const calFibo =()=>{
        console.time("t1")
        // let x=figo(Number(text))
        console.timeEnd("t1")
        // console.log(figowithmemo())
    }

    return(
        <>
         <input value={text} onChange={e=>setText(e.target.value)} />
         <button onClick={calFibo} >Calculate</button>
        </>
    )
}