import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  // let U = Text.toUpperCase();
  // let L = Text.toLowerCase();
  const [btntext, setbtntext] = useState("Convert to Uppercase");

  const toggle = () => {
    if (btntext === "Convert to Uppercase") {
      let newText = Text.toUpperCase();
      setText(newText);
      setbtntext("Convert to Lowercase");
     props.showalert("Converted to Uppercase", "success");
    } else {
      let newText = Text.toLowerCase();
      setText(newText);
      setbtntext("Convert to Uppercase");
      props.showalert("Converted to Lowercase", "success");
    }
  };

  const whenclicked = () => {
    // console.log("Uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const whenthisclicked = () => {
    // console.log("Uppercase was clicked");
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase", "success");
  };
  const whenthisoneclicked = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  };

  const Onchange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };

  //   setText ("Myname");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'? '#5BD1D7':'black'}}>
        <h1 style={{color: props.mode==='dark'? 'white':'black'}} >{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            onChange={Onchange}
            value={Text}
            rows={8}
            style={{backgroundColor: props.mode==='dark'? '#23272f':'white', color: props.mode==='dark'? '#5BD1D7':'black' }}
            
          ></textarea>
        </div>

        <button className={`btn btn-${props.mode==='dark'? 'outline-info':'primary'} mx-1`}  onClick={whenclicked} >
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='dark'? 'outline-info':'primary'} mx-1`}  onClick={whenthisclicked}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='dark'? 'outline-info':'primary'} mx-1`}  onClick={whenthisoneclicked}>
          Clear Text
        </button>

        <button className={`btn btn-${props.mode==='dark'? 'outline-info':'primary'} mx-1`}  onClick={toggle}>
          Uppercase/Lowercase
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p style={{color: props.mode==='dark'? '#5BD1D7':'black'}}>
          {" "}
          you text have {Text.split(" ").length - 1} words and {Text.length}{" "}
          characters
        </p>
        <p style={{color: props.mode==='dark'? '#5BD1D7':'black'}}>
          This will take <b>{0.008 * Text.length}</b> minutes of you{" "}
        </p>
        <h2 style={{color: props.mode==='dark'? 'white':'black'}}>Preview</h2>
        <p style={{color: props.mode==='dark'? '#5BD1D7':'black'}}>{Text.length>0?Text:"Enter your text to preview"}</p>
      </div>
    </>
  );
}
