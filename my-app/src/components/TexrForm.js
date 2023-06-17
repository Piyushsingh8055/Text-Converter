import React ,{useState}  from 'react';

export default function TexrForm(props)  {
  const handleUpClick=() =>{
    // console.log("Uppercase was clicked  "+text)
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=() =>{
    // console.log("Uppercase was clicked  "+text)
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=() =>{
    let newText='';
    setText(newText)
  }
  
  const handleExtraSpaces=() =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleCopy=() =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleOnChange=(event) =>{
    // console.log("CLicked on handle  ");
    setText(event.target.value); 
  }
  const [text,setText]=useState("");
  // setText("Hello " );
  return (
    <>
    <div className='container'> 
        <div className='mb-3'>
            <h2> {props.heading}</h2>
            
            <textarea className='form-control' id='myBox' value={text} onChange={handleOnChange} rows='8'></textarea>

        </div>
        <button className="btn btn-outline-danger mx-3" on onClick={handleUpClick}> Convert to Upper case</button>
        <button className="btn btn-outline-warning mx-3" on onClick={handleLoClick}> Convert to Lower case</button>
        <button className="btn btn-outline-primary mx-3" on onClick={handleClearClick}> Clear text</button>
        <button className="btn btn-outline-dark mx-3" on onClick={handleCopy}> Copy text</button>
        <button className="btn btn-outline-warning mx-3" on onClick={handleExtraSpaces}> Remove extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <h6>Number of Words {text.split(" ").length},<br /> Number of Character {text.length}</h6>
      <h6>Time to read the word {0.008* text.split(" ").length},</h6>
      <h2>Sentences Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
