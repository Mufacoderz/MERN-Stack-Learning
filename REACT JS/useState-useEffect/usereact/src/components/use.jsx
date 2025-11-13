import { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const [log, setLog] = useState("")

    useEffect(()=>{
        setLog(`set sekarang: ${count}`)
    }, [count])

    return(
        <>
            <div style={{textAlign:"center", marginTop:"50px"}}>
                <h1>Counter: {count}</h1>
                <p>{log}</p>
                <button onClick={()=> setCount(count+1) }>Tambah</button>
                <button onClick={()=> setCount(count-1) }>Kurang</button>
            </div>
        </>
    )

}

export default Counter