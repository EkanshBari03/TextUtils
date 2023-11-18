import React,{useState} from 'react'

export default function TextForm(props) {
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpClick = ()=>{
        // console.log("Uppercase button clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }
    const handleCopy = ()=> { 
        let newText  = document.getElementById('textBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const clearText =()=>{
        let newText = '';
        setText(newText);
    }
    const [text,setText] = useState('');
  return (
   <> 
   <div className='container' style={ {color : props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
<textarea className="form-control" value = {text} style={ {backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange = {handleOnChange} id="textBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
<button className="btn btn-primary mx-2 my-2" onClick={clearText} >Clear</button>
   </div>
   <div className="container" style={ {color : props.mode==='dark'?'white':'black'}}>
    <h2>Summary of your Text</h2>
    <p >{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text on above text box"}</p>
   </div>
   </>
  )
}
