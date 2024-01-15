import { useState } from "react"
import './Style.css'
import { useLocalStorage } from "./LocalStorage"
const Storage=()=>{
    const[value, setValue]= useState('')
    const{setItem, getItem, deleteItem}= useLocalStorage('value')
    return(
        
<div className="main">
    <div className="'sub">
      <input type='text' onChange={(e)=>setValue(e.target.value)} />
      <div className="button" style={{marginTop:'2rem'}}>
      <button onClick={()=>setItem(value)} style={{marginRight:'1rem'}}>Set</button>
      <button onClick={()=>console.log(getItem())}style={{marginRight:'1rem'}}>Get</button>
      <button onClick={deleteItem}>Delete</button>
      </div>
      </div>
      

    </div>
        
    )
}
export default Storage;