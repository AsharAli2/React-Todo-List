import React from 'react'

export default function Navbar() {

     return (
<>
<nav className="navbar navbar-expand-lg  bg-dark" >
  <div className="container-fluid" >
    <a className="navbar-brand" href="/" style={{color:"white",fontFamily:"sans-serif"}}>TODO LIST APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
</>
    )
}
