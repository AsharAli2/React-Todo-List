import { useState } from 'react';
import './App.css';
import Inputs from './Components/Inputs';
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';
function App() {
  const [text, settext] = useState([])
  console.log(text);
const del=(texts)=>{
settext(text.filter((e)=>{
  return e!==texts;
}))
}  


  // text.filter(text=>{
  //   return (text!==del,
  //   console.log(text))
  // })

  
// console.log(del);
  return (
    <>
    <Navbar/>
    <Inputs settext={settext} text={text} />
    <h1 className='text-center' style={{color:"white"}}>Todo Lists</h1>
    <div className="row m-0">

    {text.length!==0?
    text.map(texts=>{
      return(
        <div className='col-3 mb-3'>
          
          <Todo texts={texts} del={del} />
        </div>
        
        
        
        )}):<h4 className='text-center' style={{color:"#586E75"}}>No Todos to display</h4>}
      </div>
      
      {/* {text.filter(text=>{
        return text===del;
    
      }).map(text=>{
        return(
          <div>
  
            <Todo text={text} setdel={setdel} />
          </div>
        )})} */}
    </>
  );
}

export default App;
