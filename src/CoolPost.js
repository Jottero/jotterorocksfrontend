import {useState} from "react"
function Coolpost(){
    const [title,setTitle]=useState("Default title :)")
    const [content,setContent]=useState("No content provided by user")

    const handleClick=() => {
        setTitle(title+"poggers")
    }
    return(
        <div className="CoolPost">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick} style={{backgroundColor:" gray"}}>Click!</button>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </div>
        
    )
} 

export default Coolpost;