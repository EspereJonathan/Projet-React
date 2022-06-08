import { useEffect, useRef, useState } from "react";

export function Mytimer(){

    const [hour,setHour] = useState(null);
    const [min,setMin] = useState(null);
    const [seconde,setSeconde] = useState(59);
    const [visible,setVisible] = useState(true);
    const heure = useRef(null);
    const minute = useRef(null);

    useEffect(()=>{
            const intervalTime = window.setInterval(()=>{
                if(min == 0 && seconde == 0 && hour == 0){
                    alert("it's time to read the fucking doc")
                    setVisible(true)
                    setHour(null)
                    setMin(null)
                    setSeconde(null)
                }else{
                    if(seconde>0 && hour>= 0 && min >= 0){
                        setSeconde(s=>s-1)
                    }else if(seconde==0 && min>0 && hour>= 0){
                        setMin(m => m-1)
                        setSeconde(s=>s=59)
                    }else if(hour > 0 && min==0 && seconde==0){
                        setHour(h => h-1)
                        setMin(min=>min=59)
                        setSeconde(s=>s=59)
                    }
                }
                
            },10)
            return function(){
                clearInterval(intervalTime)
            }
        })
        

        const handleLunch = (e) =>{
            setVisible(false);
            if(heure.current.value == null){
                setHour(0);
            }else if(minute.current.value == null){
                setMin(0);
            }else{
                setHour(heure.current.value)
                setMin(minute.current.value)
            }
            
        }
    return (
        
        <>
        {visible && 
        <form onSubmit={handleLunch}>
            <input type="number" min="0" max="24" ref={heure} placeholder="heure" className="input"/> &nbsp;
            <input type="number" min="1" max="59" ref={minute} placeholder="minute" className="input"/> &nbsp;
            <button type="submit" className="lancer">Lancer le decompte</button>
        </form>
        }
        {!visible && <h1>{hour}:{min}:{seconde}</h1>}
        
        </>
    )
}
