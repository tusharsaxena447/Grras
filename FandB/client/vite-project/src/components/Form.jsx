import { useState } from "react"
import axios from "axios"

export default function Form() {
    const [input,setInput] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        const formdata = {input}
        axios.post('http://localhost:5000/api/insert',formdata).then(res => console.log(res))
        .catch(Error => console.log(Error))
        // setInput("")
    }
    function handleChange(e){
        setInput(e.target.value)
    }
  return (
    <>
    Form
    <form action="" onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={handleChange}/>
    <button type="submit">Click</button>
    </form> 
    </>
  )
}
