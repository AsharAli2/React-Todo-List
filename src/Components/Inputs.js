import React, { useState } from 'react'

export default function Inputs({settext,text}) {
    const [first, setfirst] = useState("")
    const handle=(e)=>{setfirst(e.target.value)}
    function show(){
        console.log("hi");
        if(first!==''){

          settext([...text,first])
        }
        setfirst("")
    }

    const container={
        // "border":"2px solid black",
        "margin-top":"10px",
"display":"flex",
"flex-direction":"column",
"justify-content":"center",
"align-items":"center"

    }
  return (
    <>
    <div className='container bg-dark' style={container}>
        <h1 className='' style={{color:"white",fontFamily:"cursive"}}>Add a Todo</h1>
        <div className='mt-0 border-0'>

        <textarea cols="60" rows="10" name="" id="" value={first} onChange={handle} placeholder='Add Your Todo Here'></textarea>
        </div>
        <button className='btn btn-primary px-5 mb-2' onClick={show}>Add</button>
        
    </div>
    </>
  )
}
