import { useEffect, useState } from "react";

export function MyClock(){
    const [hour,setHour] = useState(new Date().toLocaleTimeString());

    
    const interval = () =>{
        window.setInterval(()=>{
            setHour(new Date().toLocaleTimeString());
        },1000)
    }

    useEffect(()=>{
        interval();
        return function(){
            clearInterval(interval);
        }
    })

    
    
    return <>
    <body>
        <h1>{hour}</h1>
    </body>
    </>
}
