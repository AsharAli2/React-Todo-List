import React from 'react'
import { useState } from 'react'

export default function Todo({texts,del}) {
  const [change, setchange] = useState({opa:"",wow:""})
    console.log(change);

  return (
    <>
    <div class="card " style={{width: "18rem",backgroundColor:"black",opacity:change.opa}} id='cards'>
  <div class="card-body">
    <h3 class="card-title text-center" style={{color:"#839496"}}>List</h3>
    <p class="card-text text-center" style={{fontSize:"15px",color:"white",textDecoration:change.wow}}>{texts}</p>
    <div className='d-flex' style={{justifyContent:"space-between"}}>
    <button   class="btn btn-danger px-3" onClick={()=>del(texts)}>Delete</button>
    <button class="btn btn-success px-3" onClick={()=>setchange({...change,opa:"0.3",wow:"line-through"})}>Completed</button>

    </div>

  </div>
</div>
    </>
  )
}
