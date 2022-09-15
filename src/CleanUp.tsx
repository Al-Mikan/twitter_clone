import React,{useState,useEffect} from 'react'

const CleanUp:React.FC = () => {
    const [currentNum,setCurrentNum]=useState(0)
    const incrementNum=()=>{
        console.log("increment")
        setCurrentNum((preNumber)=>preNumber+1)
    }
    useEffect(()=>{
        console.log("use Effect in Clean up component")
        window.addEventListener("mousedown",incrementNum)
        return ()=>{
            console.log("clean up invoked")
            window.removeEventListener("mousedown",incrementNum)
        }
    },[])
  return (
    <div>{currentNum}</div>
  )
}

export default CleanUp

