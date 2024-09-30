import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");
  // setText("New text");  //correct way to change the state

  const handleUpClick = () => {
    // console.log("uppercase was clicked :"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success");
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked :"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
  };
  const handleAltClick = () => {
    const result = text
      .split("")
      .map((char, index) => {
        // Convert to lowercase if index is even, otherwise to uppercase
        return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
        // if (index % 2 === 0) {
        //   return char.toUpperCase();
        // } else {
        //   return char.toLowerCase();
        // }
      })
      .join("");
    setText(result);
    props.showAlert("Converted to AlternatingCase","Success");
  };

  const handleInClick = () => {
    const result = text
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
    setText(result);
    props.showAlert("Converted to InversedCase","Success");
  };
  // const handleCapClick = () => {
  //   const result = text.split(" ").map((word) => {
  //       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  //     })
  //     .join("");
  //   setText(result);
  // };
  const handleExtraSpaces =()=>{
    // var txt=document.getElementById('myBox');
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Any extra spaces has been removed","Success");
   }
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared","Success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container  text-${props.mode==='light'?'dark':'light'}`}>  
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control "
            id="myBox"
            rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          lower case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleInClick}>
          InVeRsE CaSe
        </button>
        <button className="btn btn-primary mx-3" onClick={handleAltClick}>
          aLtErNaTiNg cAsE
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={handleCapClick}>
          Capitalized Case
        </button> */}
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        
      </div>

      {/* <div className="container my-3">
      <h2>Your Summary here</h2>
      <p>{text.split(" ").length} Words and {text.length} Letters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2> Text Preview</h2>
      <p>{text}</p>
    </div> */}

      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Summary here</h2>
        {text.charAt(text.length - 1) === " " ? (
          <>
            <p>
              {text.split(" ").length - 1} Words and {text.length} Letters
            </p>
            <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
          </>
        ) : (
          <>
            <p>
              {text.split(" ").length} Words and {text.length} Letters
            </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
          </>
        )}
        <h2> Text Preview</h2>
        <p>{text.length>0?text:"Enter something in the TextBox to preview it"}</p>
      </div>
    </>
  );
}
